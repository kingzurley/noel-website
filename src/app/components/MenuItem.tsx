import Link from "next/link";

interface IMenuItemProps {
  title: string;
  link: string;
}

export const MenuItem = (props: IMenuItemProps): JSX.Element => {
  return (
    <button>
      <Link href={props.link}>
        <div className="grid place-content-center font-mono text-2xl bg-transparant h-40 shadow bg-gradient-to-t from-slate-50 to-slate-100 position:sticky min-w-64">
          <text>{props.title}</text>
        </div>
      </Link>
    </button>
  );
};
