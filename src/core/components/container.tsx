import { Column } from "./layout";
interface ContainerProps {
    children: React.ReactNode;
    marginTop?:boolean
}

export function Container({children,marginTop}: ContainerProps) {
  return (
    <Column className={`max-w-[1920px] mx-auto px-10 w-full ${marginTop && 'pt-[100px]'}`}>{children}</Column>
  );
}
