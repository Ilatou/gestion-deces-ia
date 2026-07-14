import { useEffect, useState } from "react";
import {
    Typography,
    Grid,
    CircularProgress,
    Alert,
    Paper,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

import {
    getDashboardStats,
    getRegions,
    getSexes,
    getTopCauses,
} from "../services/analyticsService";

import {
    BarChart,
    PieChart,
} from "../components/Charts";


function Dashboard() {
    const [stats, setStats] = useState(null);
    const [regions, setRegions] = useState([]);
    const [sexes, setSexes] = useState([]);
    const [causes, setCauses] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [
                    dashboardData,
                    regionsData,
                    sexesData,
                    causesData,
                ] = await Promise.all([
                    getDashboardStats(),
                    getRegions(),
                    getSexes(),
                    getTopCauses(),
                ]);

                console.log("STATISTIQUES :", dashboardData);
                console.log("REGIONS :", regionsData);
                console.log("SEXES :", sexesData);
                console.log("CAUSES :", causesData);

                setStats(dashboardData);
                setRegions(regionsData);
                setSexes(sexesData);
                setCauses(causesData);
            } catch (err) {
                console.error("Erreur complète :", err);
                console.error("Réponse serveur :", err.response);
                console.error("Données erreur :", err.response?.data);

                setError("Impossible de charger les statistiques.");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <DashboardLayout>
            <Typography variant="h4" gutterBottom>
                Tableau de bord
            </Typography>

            {loading && <CircularProgress />}

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {stats && (
                <>
                    {/* Cartes statistiques */}
                    <Grid container spacing={3}>
                        <Grid size={4}>
                            <StatCard
                                title="Total des décès"
                                value={stats.total_deces}
                            />
                        </Grid>

                        <Grid size={4}>
                            <StatCard
                                title="Causes enregistrées"
                                value={stats.total_causes}
                            />
                        </Grid>

                        <Grid size={4}>
                            <StatCard
                                title="Lieux enregistrés"
                                value={stats.total_lieux}
                            />
                        </Grid>
                    </Grid>

                    {/* Graphiques */}
                    <Grid
                        container
                        spacing={3}
                        sx={{ mt: 2 }}
                    >
                        <Grid size={6}>
                            <Paper sx={{ p: 2 }}>
                                <BarChart
                                    title="Décès par région"
                                    labels={regions.map(
                                        (item) =>
                                            item.nom ||
                                            item.region ||
                                            item.lieu
                                    )}
                                    data={regions.map(
                                        (item) =>
                                            item.total ||
                                            item.nombre
                                    )}
                                />
                            </Paper>
                        </Grid>

                        <Grid size={6}>
                            <Paper sx={{ p: 2 }}>
                                <PieChart
                                    title="Répartition par sexe"
                                    labels={sexes.map(
                                        (item) =>
                                            item.sexe
                                    )}
                                    data={sexes.map(
                                        (item) =>
                                            item.total
                                    )}
                                />
                            </Paper>
                        </Grid>

                        <Grid size={12}>
                            <Paper sx={{ p: 2 }}>
                                <BarChart
                                    title="Top causes de décès"
                                    labels={causes.map(
                                        (item) =>
                                            item.cause ||
                                            item.nom
                                    )}
                                    data={causes.map(
                                        (item) =>
                                            item.total
                                    )}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            )}
        </DashboardLayout>
    );
}

export default Dashboard;