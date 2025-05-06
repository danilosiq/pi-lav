import { Column } from "@/core/components/layout";
import { Clock, LogOut, TicketPercentIcon, User } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProfileSideBar() {
  const router = useRouter();
  const sideBarTopics = [
    {
      label: "Dados do perfil",
      icon: <User />,
      value:'profile-data'
    },
    {
      label: "Histórico",
      icon: <Clock />,
      value:'historic'

    },
    {
      label: "Cupons",
      icon: <TicketPercentIcon />,
      value:'coupon'

    },
  ];

  return (
    <Column className=" gap-3 pt-6 h-[500px] shadow-xl/20 bg-white relative rounded-md">
      {sideBarTopics.map((topic, i) => (
        <div
          className="px-4 gap-2 py-1 flex text-slate-600  hover:bg-secondary hover:text-white cursor-pointer transition-all"
          key={i}
          onClick={() => router.push(topic.value)}
        >
          {topic.icon}
          <span>{topic.label}</span>
        </div>
      ))}
      <div className="bg-danger text-white flex justify-center items-center  absolute bottom-0 w-full rounded-b-md py-2 gap-3">
        <LogOut />
        <p>sair</p>
      </div>
    </Column>
  );
}
