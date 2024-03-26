import {
  IWatchDetailsProps,
  WatchDetails,
} from "@/app/components/WatchDetails";

export default function WatchDetailsPage(props: IWatchDetailsProps) {
  return (
    <WatchDetails
      image={props.image}
      title={props.title}
      price={props.price}
      text={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    />
  );
}
