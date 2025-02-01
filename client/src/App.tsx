import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./pages/static/Home";
import Login from "./pages/static/Login";
import Register from "./pages/static/Register";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
