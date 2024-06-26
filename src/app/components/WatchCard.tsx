import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface IWatchCardProps {
  image: string;
  title: string;
  price: number;
  text: string;
  category?: string;
}

export const WatchCard = (props: IWatchCardProps): JSX.Element => {
  return (
    <Link
      href={{
        pathname: `${props.category}/${props.title
          .split(" ")
          .join("_")
          .toLowerCase()}`,
        query: {
          title: props.title,
          price: props.price,
          image: props.image,
          text: props.text,
        },
      }}
    >
      <div className="flex flex-col items-center gap-3 bg-white shadow-md font-bold h-96 w-72 hover:scale-105 duration-200 rounded-md p-3">
        <Image src={props.image} height={200} width={270} alt={props.title} />
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
      </div>
    </Link>
  );
};
