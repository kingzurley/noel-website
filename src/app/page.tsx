import { WatchContainer } from "./components/WatchContainer";

import watch1 from "../../assets/watch1.png";
import watch2 from "../../assets/watch2.png";
import watch3 from "../../assets/watch3.png";
import watch4 from "../../assets/watch4.png";
import watch5 from "../../assets/watch5.png";
import watch6 from "../../assets/watch6.png";
import watch7 from "../../assets/watch7.png";
import watch8 from "../../assets/watch8.png";

const homeWatches = [
  {
    image: watch1.src,
    title: "Tissot PRX Powermatic",
    price: 640,
  },
  {
    image: watch2.src,
    title: "Tudor Black Bay",
    price: 3360,
  },
  {
    image: watch3.src,
    title: "Tudor Royal Day/Date",
    price: 2210,
  },
  {
    image: watch4.src,
    title: "Breitling Navitimer",
    price: 4450,
  },
  {
    image: watch5.src,
    title: "Longines Spirit",
    price: 2600,
  },
  {
    image: watch6.src,
    title: "Longines Conquest",
    price: 1900,
  },
  {
    image: watch7.src,
    title: "IWC Ingenieur",
    price: 10500,
  },
  {
    image: watch8.src,
    title: "Hamilton Khaki Field",
    price: 715,
  },
];

export default function Home() {
  return <WatchContainer model={homeWatches} />;
}
