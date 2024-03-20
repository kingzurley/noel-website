import Image, { StaticImageData } from "next/image";

interface IWatchCardProps {
  image: string | StaticImageData;
  title: string;
  price: number;

}

export const WatchCard = (props: IWatchCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-3 bg-white shadow-md font-bold h-96 w-72 hover:scale-105 duration-200 rounded-md">
      <Image src={props.image} height={200} width={270} alt={props.title}/>
      <h1 className="">{props.title}</h1>
      <h2 className="">{props.price}</h2>
    </div>
  );
};
