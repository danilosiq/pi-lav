import { Adapter } from "next-auth/adapters";
import { prisma } from "../prisma";

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user: any) {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          cpf: '',
          gender: '',
          phone: '',
        },
      });
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        emailVerified: null,
        cpf: prismaUser.cpf,
        gender: prismaUser.gender,
        phone: prismaUser.phone,
      };
    },

    async getUser(id: string) {
      const prismaUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!prismaUser) {
        return null;
      }
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        emailVerified: null,
        cpf: prismaUser.cpf,
        gender: prismaUser.gender,
        phone: prismaUser.phone,
      };
    },

    async getUserByAccount({
      providerAccountId,
      provider,
    }: {
      providerAccountId: string;
      provider: string;
    }) {
      const account = await prisma.account.findUnique({
        where: {
          providerId_providerAccountId: {
            providerAccountId: providerAccountId,
            providerId: provider,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account || !account.user) {
        return null;
      }
      const { user } = account;

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        cpf: user.cpf,
        gender: user.gender,
        phone: user.phone,
      };
    },

    async linkAccount(account: any) {
      let user = await prisma.user.findFirst({
        where: { id: account.id },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            name: account.name ?? "Unknown",
            cpf: account.cpf ?? "Unknown",
            email: account.email ?? "Unknown",
            gender: account.gender ?? "Unknown",
            phone: account.phone ?? "Unknown",
          },
        });
      }
      await prisma.account.create({
        data: {
          userId: user.id,
          providerType: account.type,
          providerId: account.provider,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refresh_token,
          accessToken: account.access_token,
          accessTokenExpires: account.accessTokenExpires,
        },
      });
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken: sessionToken,
        },
        include: {
          user: true,
        },
      });
      if (!prismaSession || !prismaSession.user) {
        return null;
      }

      const { user, ...session } = prismaSession;
      return {
        session: {
          userId: session.userId,
          expires: session.expires,
          sessionToken: session.sessionToken,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: null,
          cpf: user.cpf,
          gender: user.gender,
          phone: user.phone,
        },
      };
    },

    async getUserByEmail(email) {
      const prismaUser = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!prismaUser) {
        return null;
      }
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        emailVerified: null,
        cpf: prismaUser.cpf,
        gender: prismaUser.gender,
        phone: prismaUser.phone,
      };
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          sessionToken: sessionToken,
        },
        data: {
          expires,
          userId: userId,
        },
      });
      return {
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
        expires: prismaSession.expires,
      };
    },

    async createSession({
      userId,
      sessionToken,
      expires,
    }: {
      userId: string;
      sessionToken: string;
      expires: Date;
    }) {
      const session = await prisma.session.create({
        data: {
          userId: userId,
          sessionToken: sessionToken,
          expires,
        },
      });

      return {
        sessionToken: session.sessionToken,
        userId: session.userId,
        expires: session.expires,
      };
    },

    async deleteSession(sessionToken: string) {
      await prisma.session.deleteMany({
        where: { sessionToken: sessionToken },
      });
    },
  };
}
