import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader></SearchHeader>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>
    </>
  );
}

export default App;
