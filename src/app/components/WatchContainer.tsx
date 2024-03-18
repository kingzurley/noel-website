import { WatchCard } from "./WatchCard";
import watch1 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch1.png";
import watch2 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch2.png";
import watch3 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch3.png";
import watch4 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch4.png";
import watch5 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch5.png";
import watch6 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch6.png";
import watch7 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch7.png";
import watch8 from "/Users/noelcampbell-hunter/projects/noel-website/assets/watch8.png";

export const WatchContainer = (): JSX.Element => {
  return (
    <div className=" flex flex-row font-mono gap-4 flex-wrap p-2.5 text-lg bg-gradient-to-br from-cyan-200 to-purple-500">
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
