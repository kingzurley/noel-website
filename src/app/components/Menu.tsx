import { MenuItem } from "./MenuItem";

export const Menu = (): JSX.Element => {
  return (
    <div className="bg-green-600 w-80 flex flex-col gap-4 bg-transparent flex-wrap pt-10 sticky">
      <MenuItem title="Daily" link="" />

      <MenuItem title="Dive" link="/dive" />

      <MenuItem title="Dress" link="/dress" />

      <MenuItem title="Pilot" link="/pilot" />
    </div>
  );
};
