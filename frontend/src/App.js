import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { EditEvent } from "./pages/EditEvent";
import EventDetails, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import { RootLayout } from "./pages/Root";
import { EventRootLayout } from "./pages/EventRoot";
import { ErrorPage } from "./pages/Error";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import { action as createOrUpdateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: createOrUpdateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: createOrUpdateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
