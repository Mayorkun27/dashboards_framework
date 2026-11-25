import { Toaster } from "sonner";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/auth/Login";
import Overview from "./pages/Overview";
import NotFound from "./pages/view/NotFound";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<MainLayout pageName="Dashboard" />}>
          <Route index element={<Overview />} />
          <Route path="dashboard/overview" element={<Overview />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
