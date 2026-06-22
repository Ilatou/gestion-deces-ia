import { Typography } from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
    return (
        <DashboardLayout>
            <Typography variant="h4" gutterBottom>
                Bienvenue dans Gestion Décès IA
            </Typography>

            <Typography variant="body1">
                Tableau de bord des statistiques et analyses des décès.
            </Typography>
        </DashboardLayout>
    );
}

export default Dashboard;