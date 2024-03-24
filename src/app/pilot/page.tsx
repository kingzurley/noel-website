import watch18 from "../../../assets/watch18.png";
import watch19 from "../../../assets/watch19.png";
import watch20 from "../../../assets/watch20.png";
import watch22 from "../../../assets/watch22.png";
import watch23 from "../../../assets/watch23.png";
import watch24 from "../../../assets/watch24.png";
import watch25 from "../../../assets/watch25.png";
import watch26 from "../../../assets/watch26.png";
import { WatchContainer } from "../components/WatchContainer";

const pilotWatches = [
  {
    image: watch18.src,
    title: "Zenith Pilot Big Date",
    price: 10100,
  },
  {
    image: watch19.src,
    title: "Hamilton Pioneer",
    price: 780,
  },
  {
    image: watch20.src,
    title: "IWC Top Gun",
    price: 5900,
  },
  {
    image: watch24.src,
    title: "Longines Spirit",
    price: 2600,
  },
  {
    image: watch23.src,
    title: "Zenith Black Ceramic",
    price: 8500,
  },
  {
    image: watch22.src,
    title: "IWC Pilot",
    price: 8200,
  },
  {
    image: watch25.src,
    title: "Breitling Navitimer",
    price: 4400,
  },
  {
    image: watch26.src,
    title: "Patek Philippe Calatrava",
    price: 41430,
  },
];

export default function Pilot() {
  return <WatchContainer model={pilotWatches} />;
}
