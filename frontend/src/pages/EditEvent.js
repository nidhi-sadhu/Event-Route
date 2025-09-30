import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export function EditEvent() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventForm method="PATCH" event={data.event} />
    </>
  );
}
