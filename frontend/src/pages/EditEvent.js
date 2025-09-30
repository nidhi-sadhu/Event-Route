import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export function EditEvent() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventForm event={data.event} />
    </>
  );
}
