import Image, { StaticImageData } from "next/image";
import { IWatchCardProps } from "./WatchCard";
import watch9 from "../../../assets/watch9.png";
import watch10 from "../../../assets/watch10.png";
import watch11 from "../../../assets/watch11.png";
import watch12 from "../../../assets/watch12.png";

export interface IWatchDetailsProps extends IWatchCardProps {
  text: string;
}

export const WatchDetails = (props: IWatchDetailsProps): JSX.Element => {
  return (
    <div className="grid grid-cols-3 pt-10 items-center">
      <div className="grid gap-8">
        <Image src={watch9} height={50} width={120} alt={props.title} />
        <Image src={watch10} height={50} width={120} alt={props.title} />
        <Image src={watch11} height={50} width={120} alt={props.title} />
        <Image src={watch12} height={50} width={120} alt={props.title} />
      </div>
      <div>
        <Image src={watch9} height={200} width={270} alt={props.title} />
        <div>{props.title}</div>
        <div>£{props.price}</div>
      </div>

      <div className="align-middle p-3 ">{props.text}</div>
    </div>
  );
};
