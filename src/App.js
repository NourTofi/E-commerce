import Rout from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Rout />
    </QueryClientProvider>
  );
}

export default App;
