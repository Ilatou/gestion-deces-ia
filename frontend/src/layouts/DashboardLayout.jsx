import { Box, Toolbar } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
    return (
        <Box sx={{ display: "flex" }}>
            {/* Menu latéral */}
            <Sidebar />

            {/* Zone principale */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "#f5f5f5",
                    minHeight: "100vh",
                }}
            >
                {/* Barre supérieure */}
                <Navbar />

                {/* Espace pour éviter que le contenu soit caché sous la Navbar */}
                <Toolbar />

                {/* Contenu des pages */}
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardLayout;