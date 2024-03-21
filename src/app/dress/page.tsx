import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { WatchCard } from "../components/WatchCard";
import watch27 from "../../../assets/watch27.png";
import watch28 from "../../../assets/watch28.png";
import watch29 from "../../../assets/watch29.png";
import watch30 from "../../../assets/watch30.png";
import watch31 from "../../../assets/watch31.png";
import watch32 from "../../../assets/watch32.png";
import watch33 from "../../../assets/watch33.png";
import watch34 from "../../../assets/watch34.png";
import watch35 from "../../../assets/watch35.png";
import watch36 from "../../../assets/watch36.png";
import watch37 from "../../../assets/watch37.png";
import watch38 from "../../../assets/watch38.png";
import watch39 from "../../../assets/watch39.png";
import watch40 from "../../../assets/watch40.png";
import watch41 from "../../../assets/watch41.png";
import watch42 from "../../../assets/watch42.png";
import watch43 from "../../../assets/watch43.png";
import watch44 from "../../../assets/watch44.png";
import watch46 from "../../../assets/watch46.png";
import watch48 from "../../../assets/watch48.png";
import { WatchContainer } from "../components/WatchContainer";

const dressWatches = [
  {
    image: watch27.src,
    title: "Tissot PRX Powermatic",
    price: 640,
  },
];

export default function Dress() {
  return <WatchContainer model={dressWatches} />;
}
