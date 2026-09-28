import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { App } from "./App";
import { AgentUIProvider } from "./components/agent/AgentUI";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 15_000, refetchOnWindowFocus: true, retry: 1 },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AgentUIProvider>
          <App />
          <Toaster position="bottom-left" richColors closeButton />
        </AgentUIProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
