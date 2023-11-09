import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import HRDashboardPage from "../pages/HRDashboard.jsx";
import ProtectedPage from "./protectedpage.jsx";

const routes = [
  <Route path="/login" element={<LoginPage />}></Route>,
  <Route
    path="/"
    element={
      <ProtectedPage>
        <HRDashboardPage />
      </ProtectedPage>
    }
  ></Route>,
];
export default routes;
