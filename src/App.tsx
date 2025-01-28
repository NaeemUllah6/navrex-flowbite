import type { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FlowbiteWrapper from "./components/flowbite-wrapper";
import DashboardPage from "./pages";
import ForgotPasswordPage from "./pages/authentication/forgot-password";
import PasswordResetSuccessfully from "./pages/authentication/password-reset-successfuly";
import ResetPasswordPage from "./pages/authentication/reset-password";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import DataIntegrationPage from "./pages/data-integration";
import NeuropsychLabsPage from "./pages/neuropsych-labs";
import NotFoundPage from "./pages/pages/404";
import ServerErrorPage from "./pages/pages/500";
import MaintenancePage from "./pages/pages/maintenance";
import PatientsPage from "./pages/patients";
import QEEGPage from "./pages/qeeg";
import DXSurvey from "./pages/survey";
import TestingPage from "./pages/testings";
import DatabaseAnalytics from "./pages/database-analytics";
const App: FC = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FlowbiteWrapper />}>
          {/* <Route path="/" element={<DashboardPage />} index /> */}
          <Route path="/" element={<PatientsPage />} />
          <Route path="/dx-survey" element={<DXSurvey />} />
          <Route path="/testings" element={<TestingPage />} />
          <Route path="/qeeg" element={<QEEGPage />} />
          <Route path="/neuropsych-labs" element={<NeuropsychLabsPage />} />
          <Route path="/data-integration" element={<DataIntegrationPage />} />
          <Route path="/database-analytics" element={<DatabaseAnalytics />} />
          <Route path="/pages/maintenance" element={<MaintenancePage />} />
          <Route path="/pages/404" element={<NotFoundPage />} />
          <Route path="/pages/500" element={<ServerErrorPage />} />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route
            path="/authentication/password-reset-successfully"
            element={<PasswordResetSuccessfully />}
          />
          <Route
            path="/authentication/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route
            path="/authentication/reset-password"
            element={<ResetPasswordPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
