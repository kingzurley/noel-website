import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { WatchCard } from "../components/WatchCard";
import watch10 from "../../../assets/watch10.png";
import watch11 from "../../../assets/watch11.png";
import watch12 from "../../../assets/watch12.png";
import watch13 from "../../../assets/watch13.png";
import watch14 from "../../../assets/watch14.png";
import watch15 from "../../../assets/watch15.png";
import watch16 from "../../../assets/watch16.png";
import watch9 from "../../../assets/watch9.png";

import React from "react";
import Link from "next/link";
import { WatchContainer } from "../components/WatchContainer";

const diveWatches = [
  {
    image: watch10.src,
    title: "Omega Seamaster 300m",
    price: 640,
  },
];

export default function Dive() {
  return <WatchContainer model={diveWatches} />;
}
