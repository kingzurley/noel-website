import { WatchCard } from "./WatchCard";

interface IWatchModel {
  image: string;
  title: string;
  price: number;
}

interface IWatchContainerInterface {
  model: IWatchModel[];
}

export const WatchContainer = (
  props: IWatchContainerInterface
): JSX.Element => {
  return (
    <div className="col-span-4 flex flex-row justify-center font-mono gap-10 flex-wrap pt-10 text-base bg-gradient-to-t from-slate-50 to-slate-200 hover:bg-red-700 h-full">
      {props.model.map((watch: IWatchModel, index) => {
        return (
          <WatchCard
            image={watch.image}
            title={watch.title}
            price={watch.price}
            key={index}
          />
        );
      })}
    </div>
  );
};
