import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/index.css";
import { startMockServer } from "../src/__tests__/helpers";

startMockServer();
const client = new QueryClient();

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={client}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {},
};

export default preview;
