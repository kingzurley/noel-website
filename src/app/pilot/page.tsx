import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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

export const WatchContainer = (): JSX.Element => {
  return (
    <div className="flex flex-row font-mono gap-4 flex-wrap p-2.5 text-base shadow-md bg-gradient-to-t from-slate-50 to-slate-200">
      <WatchCard image={watch18} title="Zenith Big Date" price={10100} />
      <WatchCard image={watch19} title="Hamilton Pioneer" price={780} />
      <WatchCard image={watch20} title="IWC Top Gun" price={5900} />
      <WatchCard image={watch21} title="Bremont MBS" price={4295} />
      <WatchCard image={watch22} title="IWC Spitfire" price={8350} />
      <WatchCard image={watch23} title="Zenith Pilot Ceramic" price={8500} />
      <WatchCard image={watch24} title="Longines Spirit" price={2600} />
      <WatchCard image={watch25} title="Breitling Navitimer" price={4400} />
      <WatchCard
        image={watch26}
        title="Patek Philippe Calatrava"
        price={41430}
      />
    </div>
  );
};

export default function Pilot() {
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
