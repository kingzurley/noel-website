import { MenuItem } from "./MenuItem";

export const Menu = (): JSX.Element => {
  return (
    <div className="min-w-64 flex flex-col gap-4 bg-transparent bg-slate-100 sticky top-0 h-screen">
      <MenuItem title="Daily" link="/" />
      <MenuItem title="Dive" link="/dive" />
      <MenuItem title="Dress" link="/dress" />
      <MenuItem title="Pilot" link="/pilot" />
    </div>
  );
};
