import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { WatchCard } from "../components/WatchCard";
import watch18 from "../../../assets/watch18.png";
import watch19 from "../../../assets/watch19.png";
import watch20 from "../../../assets/watch20.png";
import watch21 from "../../../assets/watch21.png";
import watch22 from "../../../assets/watch22.png";
import watch23 from "../../../assets/watch23.png";
import watch24 from "../../../assets/watch24.png";
import watch25 from "../../../assets/watch25.png";
import watch26 from "../../../assets/watch26.png";
import { WatchContainer } from "../components/WatchContainer";

const diveWatches = [
  {
    image: watch18.src,
    title: "Tissot PRX Powermatic",
    price: 640,
  },
];

export default function Pilot() {
  return <WatchContainer model={diveWatches} />;
}
