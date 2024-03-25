import watch27 from "../../../assets/watch27.png";
import watch30 from "../../../assets/watch30.png";
import watch31 from "../../../assets/watch31.png";
import watch33 from "../../../assets/watch33.png";
import watch35 from "../../../assets/watch35.png";
import watch36 from "../../../assets/watch36.png";
import watch41 from "../../../assets/watch41.png";
import watch48 from "../../../assets/watch48.png";
import { WatchContainer } from "../components/WatchContainer";

const dressWatches = [
  {
    image: watch27.src,
    title: "Cartier Santos",
    price: 7400,
  },
  {
    image: watch30.src,
    title: "Tudor 1926",
    price: 1840,
  },
  {
    image: watch31.src,
    title: "Cartier Santos Skeleton",
    price: 29100,
  },
  {
    image: watch33.src,
    title: "Blancpain Grande Date",
    price: 10800,
  },
  {
    image: watch35.src,
    title: "Glashutte Lunar",
    price: 9300,
  },
  {
    image: watch36.src,
    title: "Vacheron Constantin Patrimony",
    price: 30600,
  },
  {
    image: watch41.src,
    title: "Patek Philippe Ellipse",
    price: 31600,
  },
  {
    image: watch48.src,
    title: "Patek Philippe Annual",
    price: 49350,
  },
];

export default function Dress() {
  return <WatchContainer model={dressWatches} category="/dress" />;
}
