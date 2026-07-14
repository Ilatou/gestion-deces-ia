import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    CircularProgress,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import { getDeces, deleteDeces } from "../services/decesService";

function DecesList() {
    const [deces, setDeces] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            const data = await getDeces();
            setDeces(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer ce décès ?")) {
            return;
        }

        await deleteDeces(id);
        loadData();
    };

    const handleEdit = (id) => {
    navigate(`/deces/edit/${id}`);
    };

    return (
        <DashboardLayout>
            <Typography variant="h4" gutterBottom>
                Liste des décès
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : (
                <Paper sx={{ p: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>Prénom</TableCell>
                                <TableCell>Date décès</TableCell>
                                <TableCell>Cause</TableCell>
                                <TableCell>Lieu</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {deces.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        {item.personne_details?.nom}
                                    </TableCell>

                                    <TableCell>
                                        {item.personne_details?.prenom}
                                    </TableCell>

                                    <TableCell>
                                        {item.date_deces}
                                    </TableCell>

                                    <TableCell>
                                        {item.cause_details?.libelle}
                                    </TableCell>

                                    <TableCell>
                                        {item.lieu_details?.ville}
                                    </TableCell>

                                                                    <TableCell>
                                        <Button
                                            color="primary"
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            Modifier
                                        </Button>

                                        <Button
                                            color="error"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Supprimer
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            )}
        </DashboardLayout>
    );
}

export default DecesList;
