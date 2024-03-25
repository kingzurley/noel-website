import Link from "next/link";

interface IMenuItemProps {
  title: string;
  link: string;
}

export const MenuItem = (props: IMenuItemProps): JSX.Element => {
  return (
    <Link href={props.link}>
      <div className="flex justify-start items-center font-mono text-2xl bg-transparant h-24 pl-10">
        <text className="">{props.title}</text>
      </div>
    </Link>
  );
};
