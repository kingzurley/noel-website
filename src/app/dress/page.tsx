import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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

export const WatchContainer = (): JSX.Element => {
  return (
    <div className="flex flex-row font-mono gap-4 flex-wrap p-2.5 text-base shadow-md bg-gradient-to-t from-slate-50 to-slate-200">
      <WatchCard image={watch27} title="Cartier Santos" price={7400} />
      <WatchCard image={watch28} title="Cartier Santos Dumont" price={4000} />
      <WatchCard image={watch29} title="Raymond Weil Maestro" price={995} />
      <WatchCard image={watch30} title="Tudor 1926" price={1840} />
      <WatchCard
        image={watch31}
        title="Cartier Santos Skeleton"
        price={29100}
      />
      <WatchCard image={watch32} title="Tissot PRX" price={640} />
      <WatchCard
        image={watch33}
        title="Blancpain Villeret"
        price={10800}
      />
      <WatchCard image={watch34} title="Longines Elegant" price={1700} />
      <WatchCard
        image={watch35}
        title="Glashutte Pano Matic Lunar"
        price={9300}
      />
      <WatchCard
        image={watch36}
        title="Vacheron Constantin Patrimony"
        price={30600}
      />
      <WatchCard image={watch37} title="Glashutte Senator" price={10100} />
      <WatchCard
        image={watch38}
        title="Vacheron Constantin Fiftysix"
        price={12200}
      />
      <WatchCard
        image={watch39}
        title="Patek Philippe Calendar"
        price={49350}
      />
      <WatchCard
        image={watch40}
        title="Patek Philippe Calatrava"
        price={34620}
      />
      <WatchCard
        image={watch41}
        title="Patek Philippe Golden Ellipse"
        price={31600}
      />
      <WatchCard
        image={watch42}
        title="Vacheron Constantin Patrimony Gold"
        price={30600}
      />
      <WatchCard
        image={watch43}
        title="Vacheron Constantin Overseas"
        price={29800}
      />
      <WatchCard
        image={watch44}
        title="Vacheron Constantin Overseas"
        price={24100}
      />
      <WatchCard
        image={watch46}
        title="Vacheron Constantin Trad"
        price={43600}
      />
      <WatchCard
        image={watch48}
        title="Patek Philippe Caldendar"
        price={49350}
      />
    </div>
  );
};

export default function Dress() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row">
        <Menu />
        <WatchContainer />
      </div>
      <Footer />
    </div>
  );
}