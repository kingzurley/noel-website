import Link from "next/link";

interface IMenuItemProps {
  title: string;
  link: string;
}

export const MenuItem = (props: IMenuItemProps): JSX.Element => {
  return (
    <button>
      <Link href={props.link}>
        <div className="grid place-content-center font-mono text-3xl bg-transparant h-40 shadow-2xl">
          <text>{props.title}</text>
        </div>
      </Link>
    </button>
  );
};
