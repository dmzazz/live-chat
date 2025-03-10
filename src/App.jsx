import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
