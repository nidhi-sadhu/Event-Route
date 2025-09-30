import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { EditEvent } from "./pages/EditEvent";
import EventDetails, {
  loader as eventDetailsLoader,
} from "./pages/EventDetails";
import { NewEvent } from "./pages/NewEvent";
import { RootLayout } from "./pages/Root";
import { EventRootLayout } from "./pages/EventRoot";
import { ErrorPage } from "./pages/Error";
import EventsPage, { loader as eventsLoader } from "./pages/Events";

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
              },
              {
                path: "edit",
                element: <EditEvent />,
              },
            ],
          },
          { path: "new", element: <NewEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
