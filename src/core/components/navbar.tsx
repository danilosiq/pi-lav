import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleHelp, Home, Menu, User, WashingMachine } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCheckData } from "../hook/useCheckData";
import { useGetUser } from "../hook/useGetUser";
import { Button } from "./button";
import { Column, Row } from "./layout";

export function Navbar() {
  const { data, isLoading } = useGetUser("GetData");
  const router = useRouter();
  const pathname = usePathname();

  const { isMissingData } = useCheckData(data?.email!);
  const navTopics = [
    {
      label: "Home",
      link: "/home",
      icon: <Home />,
    },
    {
      label: "Selecionar roupas",
      link: "/select-clothes",
      icon: <WashingMachine />,
    },
    {
      label: "Ajuda",
      link: "/about",
      icon: <CircleHelp />,
    },
  ];

  return (
    <div className="  w-full z-50 p-4 fixed">
      <Row className="bg-white rounded-2xl shadow-xl/20 items-center px-10 h-[48px] w-full justify-between">
        <p className="font-lilita text-3xl text-primary font-bold">LAV.</p>
        <Row className="gap-9 h-full items-center ">
          {navTopics.map((topic, index) => {
            const isSelected = pathname.includes(topic.link);

            return (
              <div
                key={index}
                onClick={() => router.push(topic.link)}
                className="h-full max-md:hidden flex items-center"
              >
                <Row
                  className={`${
                    isSelected
                      ? "shadow-md/40 text-background bg-primary "
                      : "text-primary hover:shadow-md/40"
                  } rounded-md transition-all h-[80%] justify-center gap-2  px-4 items-center cursor-pointer `}
                >
                  {topic.icon}
                  <p className="">{topic.label}</p>
                </Row>
              </div>
            );
          })}

          {!data && !isLoading ? (
            <>
              <div className=" flex items-center justify-center">
                <Button
                  colorSchema="ghost"
                  label="Entrar"
                  onClick={() => router.push("/login")}
                />
              </div>
              <div className=" max-sm:hidden flex items-center justify-center">
                <Button
                  colorSchema="primary"
                  label="Cadastre-se"
                  onClick={() => router.push("/sign-in")}
                />
              </div>
            </>
          ) : (
            <div
              onClick={() => router.push("/profile")}
              className="h-full max-md:hidden flex items-center"
            >
              <Row
                className={`${
                  pathname.includes("/profile")
                    ? "shadow-md/40 text-background bg-primary "
                    : "text-primary hover:shadow-md/40"
                } rounded-md transition-all h-[80%] relative justify-center gap-2  px-4 items-center cursor-pointer `}
              >
                <User />
                {isMissingData && (
                  <div className="w-[10px] h-[10px] rounded-full animate-ping bg-danger absolute top-1 left-2" />
                )}
                <p className="">Perfil</p>
              </Row>
            </div>
          )}

          <Drawer>
            <DrawerTrigger className="max-md:block hidden">
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="bg-primary">
              <DrawerTitle />
              <DrawerDescription></DrawerDescription>
              <Column className="gap-4 items-center my-10">
                <p className="font-lilita text-3xl text-background font-bold">
                  LAV.
                </p>
                <Column className="gap-6">
                  {navTopics.map((topic, index) => {
                    const isSelected = pathname.includes(topic.link);

                    return (
                      <div
                        key={index}
                        onClick={() => router.push(topic.link)}
                        className="h-full flex items-center"
                      >
                        <Row
                          className={`${
                            isSelected
                              ? "shadow-md/40 text-primary bg-background  "
                              : "text-background hover:shadow-md/40"
                          } rounded-md transition-all py-1 justify-center gap-2  px-4 items-center cursor-pointer `}
                        >
                          {topic.icon}
                          <p className="">{topic.label}</p>
                        </Row>
                      </div>
                    );
                  })}

                  
                </Column>
              </Column>
            </DrawerContent>
          </Drawer>
        </Row>
      </Row>
    </div>
  );
}
