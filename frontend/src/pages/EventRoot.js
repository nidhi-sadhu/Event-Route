import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

export function EventRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
