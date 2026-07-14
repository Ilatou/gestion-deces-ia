import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DecesList from "../pages/DecesList";
import NotFound from "../pages/NotFound";
import DecesCreate from "../pages/DecesCreate";
import DecesEdit from "../pages/DecesEdit";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/deces"
                    element={<DecesList />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
                <Route
                    path="/deces/create"
                    element={<DecesCreate />}
                />
                <Route
                    path="/deces/edit/:id"
                    element={<DecesEdit />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
