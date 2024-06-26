import watch10 from "../../../assets/watch10.png";
import watch11 from "../../../assets/watch11.png";
import watch12 from "../../../assets/watch12.png";
import watch13 from "../../../assets/watch13.png";
import watch14 from "../../../assets/watch14.png";
import watch15 from "../../../assets/watch15.png";
import watch16 from "../../../assets/watch16.png";
import watch9 from "../../../assets/watch9.png";

import { WatchContainer } from "../components/WatchContainer";

const diveWatches = [
  {
    image: watch9.src,
    title: "Omega Seamaster 300m",
    price: 640,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch10.src,
    title: "Doxa Carbon Whitepearl 300m",
    price: 3790,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch11.src,
    title: "Tudor Pelagos FXD 200m",
    price: 3590,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch12.src,
    title: "Omega Planet Ocean 6000m",
    price: 11600,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch13.src,
    title: "Breitling Superocean 300m",
    price: 4150,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch14.src,
    title: "Panerai Submersible 300m",
    price: 8600,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch15.src,
    title: "Omega Seamaster Prorof 1200m",
    price: 13500,
    text: "omega speedmaster james bond 007 super wow",
  },
  {
    image: watch16.src,
    title: "Doxa Sharkhunter 300m",
    price: 640,
    text: "omega speedmaster james bond 007 super wow",
  },
];

export default function Dive() {
  return <WatchContainer model={diveWatches} category="/dive" />;
}
