import {
  IWatchDetailsProps,
  WatchDetails,
} from "@/app/components/WatchDetails";

export default function WatchDetailsPage({
  searchParams,
}: {
  searchParams: { title: string; price: number; image: string; text: string };
}) {
  return (
    <WatchDetails
      text={searchParams.text}
      title={searchParams.title}
      price={searchParams.price}
      image={searchParams.image}
    />
  );
}
