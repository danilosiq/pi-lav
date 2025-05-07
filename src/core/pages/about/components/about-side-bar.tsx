import { Column } from "@/core/components/layout";
import { Book, Headset, Info } from "lucide-react";
import { useRouter } from "next/navigation";

export function AboutSideBar() {
  const router = useRouter();
  const sideBarTopics = [
    {
      label: "Sobre a LAV.",
      icon: <Info />,
      value:'/about'
    },
    {
      label: "Como funciona a LAV",
      icon: <Book />,
      value:'/about/tutorial'

    },
    {
      label: "Contato - SAC",
      icon: <Headset />,
      value:'/about/contact'

    },
  ];

  return (
    <Column className=" gap-3 pt-6 h-[500px]  shadow-xl/20 bg-white relative rounded-md">
      {sideBarTopics.map((topic, i) => (
        <div
          className="px-4 items-center gap-2 py-1 flex text-slate-600  hover:bg-secondary hover:text-white cursor-pointer transition-all"
          key={i}
          onClick={() => router.push(topic.value)}
        >
          {topic.icon}
          <span>{topic.label}</span>
        </div>
      ))}
      
    </Column>
  );
}
