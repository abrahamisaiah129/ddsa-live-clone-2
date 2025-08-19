
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import NotFoundPage from "./pages/notFound/404.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>

  )
}
