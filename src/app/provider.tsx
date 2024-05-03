import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TasksPage } from "@/tasks/pages/tasks-page";

// React Router Dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <TasksPage />,
  },
]);

// React Query
const client = new QueryClient();

type AppProviderProps = {
  children: React.ReactElement;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      {children}
    </QueryClientProvider>
  );
};
