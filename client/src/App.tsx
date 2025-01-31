import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./pages/static/Home";
import Login from "./pages/static/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
