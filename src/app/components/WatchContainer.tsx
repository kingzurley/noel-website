import { WatchCard } from "./WatchCard";
import watch1 from "../../../assets/watch1.png";
import watch2 from "../../../assets/watch2.png";
import watch3 from "../../../assets/watch3.png";
import watch4 from "../../../assets/watch4.png";
import watch5 from "../../../assets/watch5.png";
import watch6 from "../../../assets/watch6.png";
import watch7 from "../../../assets/watch7.png";
import watch8 from "../../../assets/watch8.png";

export const WatchContainer = (): JSX.Element => {
  return (
    <div className=" flex flex-row font-mono gap-4 flex-wrap p-2.5 text-base shadow-md bg-gradient-to-t from-slate-50 to-slate-200 hover:bg-red-700">
      <WatchCard image={watch1} title="Tissot PRX Powermatic" price={640} />
      <WatchCard image={watch2} title="Tudor Black Bay" price={3360} />
      <WatchCard image={watch3} title="Tudor Royal Day/Date" price={2210} />
      <WatchCard image={watch4} title="Breitling Navitimer" price={4450} />
      <WatchCard image={watch5} title="Longines Spirit" price={2600} />
      <WatchCard image={watch6} title="Longines Conquest" price={1900} />
      <WatchCard image={watch7} title="IWC Ingenieur" price={10500} />
      <WatchCard image={watch8} title="Hamilton Khaki Field" price={715} />
    </div>
  );
};
