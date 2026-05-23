import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import CompanyInfo from "./components/CompanyInfo";
import FeedbackForm from "./components/FeedbackForm";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignIn onAuthenticate={() => setIsAuthenticated(true)} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard onSignOut={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CompanyInfo onSignOut={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/feedback"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FeedbackForm onSignOut={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
