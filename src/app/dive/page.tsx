import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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

export const WatchContainer = (): JSX.Element => {
  return (
    <div className=" flex flex-row font-mono gap-4 flex-wrap p-2.5 text-lg bg-gradient-to-br from-cyan-200 to-purple-500">
      <WatchCard image={watch9} title="Omega Seamaster 300m" price={5300} />
      <WatchCard
        image={watch10}
        title="DOXA Carbon Whitepearl 300m"
        price={3790}
      />
      <WatchCard image={watch11} title="Tudor Pelagos FXD 200m" price={3590} />
      <WatchCard
        image={watch12}
        title="Omega Planet Ocean 6000m"
        price={11600}
      />
      <WatchCard
        image={watch13}
        title="Breitling Superocean 300m"
        price={4150}
      />
      <WatchCard
        image={watch14}
        title="Panerai Submersible 300m"
        price={8600}
      />
      <WatchCard image={watch15} title="DOXA Sharkhunter 300m" price={1850} />
      <WatchCard
        image={watch16}
        title="Omega Planet Ocean 6000m"
        price={11900}
      />
    </div>
  );
};

export default function Dive() {
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
