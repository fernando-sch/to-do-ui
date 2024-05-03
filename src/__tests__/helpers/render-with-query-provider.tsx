import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RenderHookOptions,
  renderHook,
  render,
  RenderOptions,
} from "@testing-library/react";

export const renderHookWithQueryProvider = <THookReturn, THookProps>(
  hook: (props: THookProps) => THookReturn,
  options?: RenderHookOptions<THookProps>
) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return renderHook<THookReturn, THookProps>(hook, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
    ...options,
  });
};

export const renderComponentWithQueryProvider = (
  component: React.ReactNode,
  options?: RenderOptions
) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(component, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
    ...options,
  });
};
