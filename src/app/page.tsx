import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { WatchContainer } from "./components/WatchContainer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row">
        <Menu />
        <WatchContainer />
      </div>
      <Footer />
    </div>
  );
}
