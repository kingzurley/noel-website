import Image, { StaticImageData } from "next/image";

interface IWatchCardProps {
  image: string | StaticImageData;
  title: string;
  price: number;

}

export const WatchCard = (props: IWatchCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-4 w-80 shadow-md font-bold">
      <Image src={props.image} height={120} width={360} alt={props.title}/>
      <h1 className="">{props.title}</h1>
      <h2 className="">{props.price}</h2>
    </div>
  );
};
