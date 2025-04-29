import Image from "next/image";
import CodeBarIcon from "../assets/icons/code-bars-icon.png";
import EloLogo from "../assets/icons/elo-logo.png";
import GoogleSafeBrowseLogo from "../assets/icons/google-safe-browse-logo.png";
import MasterCardLogo from "../assets/icons/mastercard-logo.png";
import PixLogo from "../assets/icons/pix-logo.png";
import VisaLogo from "../assets/icons/visa-logo.png";
import { Column } from "./layout";

export function Footer() {
  const helpTopics = [
    {
      label: "Central de atendimento",
      link: "/help/central-atendimento",
    },
    {
      label: "Como funciona?",
      link: "/help/tutorial",
    },
    {
      label: "Sobre nós",
      link: "/help/about",
    },
    {
      label: "Política de privacidade",
      link: "/help/politics",
    },
  ];
  const institutionalTopics = [
    {
      label: "Cidades disponiveis",
      link: "/help/cities",
    },
  ];
  const paymentMethods = [
    {
      label: "MasterCard",
      icon: MasterCardLogo,
    },
    {
      label: "Visa",
      icon: VisaLogo,
    },
    {
      label: "Elo",
      icon: EloLogo,
    },
    {
      label: "Pix",
      icon: PixLogo,
    },
    {
      label: "Boleto",
      icon: CodeBarIcon,
    },
  ];

  return (
    <Column className="w-full min-h-[360px] mt-[200px] bg-primary max-w-[1920px] mx-auto px-10 py-10">
      <div className="border-b gap-14 pb-6 mb-6 flex max-sm:flex-col">
        <Column className="mr-14">
          <p className="text-white font-lilita text-[60px] ">LAV.</p>
          <p className="text-xs text-gray-100">
            Roupa suja <span className="font-lilita text-white">NÃO</span> se
            lava em casa.
          </p>
        </Column>
        <Column className="gap-2">
          <p className="font-lilita text-white">Atendimento</p>
          {helpTopics.map((topic, index) => (
            <p key={index} className="text-sm border-b-transparent border-b hover:border-white hover:cursor-pointer text-gray-300">
              {topic.label}
            </p>
          ))}
        </Column>
        <Column className="gap-2">
          <p className="font-lilita text-white">Institucional</p>
          {institutionalTopics.map((topic, index) => (
            <p key={index} className="text-sm border-b-transparent border-b hover:border-white hover:cursor-pointer text-gray-300">
              {topic.label}
            </p>
          ))}
        </Column>
      </div>
      <div className="justify-between gap-10 flex max-sm:flex-col items-center">
        <Column className="gap-4">
          <p className="text-white">Formas de pagamento</p>
          <div className="gap-3 bg-background py-2 px-4 sm:rounded-4xl max-sm:rounded-md sm:flex grid grid-cols-2 sm:w-[350px]">
            {paymentMethods.map((method, index) => (
              <Image
                alt={`${method.label}_Logo`}
                key={index}
                src={method.icon}
                className="w-[50px] h-[50px] object-contain"
              />
            ))}
          </div>
        </Column>
        <Image
          src={GoogleSafeBrowseLogo}
          alt="Google Safe Browse"
          className="bg-background w-[340px] rounded-md h-[70px] md:h-[100px] items-center justify-center object-contain"
        />
      </div>
    </Column>
  );
}
