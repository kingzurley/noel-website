import { IWatchCardProps, WatchCard } from "./WatchCard";

interface IWatchContainerInterface {
  model: IWatchCardProps[];
  category?: string;
}

export const WatchContainer = (
  props: IWatchContainerInterface
): JSX.Element => {
  return (
    <div className="col-span-4 flex flex-row justify-center font-mono gap-10 flex-wrap pt-10 text-base bg-gradient-to-t from-slate-50 to-slate-200 hover:bg-red-700 h-full">
      {props.model.map((watch: IWatchCardProps, index) => {
        return (
          <WatchCard
            image={watch.image}
            title={watch.title}
            price={watch.price}
            key={index}
            category={props.category}
            text={watch.text}
          />
        );
      })}
    </div>
  );
};
