import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    Typography,
    Paper,
    TextField,
    MenuItem,
    Button,
    Stack,
    CircularProgress,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";

import {
    getDecesById,
    updateDeces,
    getPersonnes,
    getCauses,
    getLieux,
} from "../services/decesService";


function DecesEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [personnes, setPersonnes] = useState([]);
    const [causes, setCauses] = useState([]);
    const [lieux, setLieux] = useState([]);

    const [form, setForm] = useState({
        personne: "",
        cause: "",
        lieu: "",
        date_deces: "",
        heure_deces: "",
        type_deces: "NATUREL",
        certificat_medical: false,
    });


    useEffect(() => {

        const loadData = async () => {
            try {

                const [
                    deces,
                    personnesData,
                    causesData,
                    lieuxData,
                ] = await Promise.all([
                    getDecesById(id),
                    getPersonnes(),
                    getCauses(),
                    getLieux(),
                ]);

                setPersonnes(personnesData);
                setCauses(causesData);
                setLieux(lieuxData);

                setForm({
                    personne: deces.personne,
                    cause: deces.cause,
                    lieu: deces.lieu,
                    date_deces: deces.date_deces,
                    heure_deces: deces.heure_deces || "",
                    type_deces: deces.type_deces,
                    certificat_medical:
                        deces.certificat_medical,
                });

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();

    }, [id]);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async () => {

        try {

            await updateDeces(id, form);

            alert("Décès modifié avec succès.");

            navigate("/deces");

        } catch (err) {

            console.error(err);

            alert("Erreur lors de la modification.");
        }
    };


    if (loading) {
        return (
            <DashboardLayout>
                <CircularProgress />
            </DashboardLayout>
        );
    }


    return (
        <DashboardLayout>

            <Typography
                variant="h4"
                gutterBottom
            >
                Modifier un décès
            </Typography>

            <Paper sx={{ p: 3 }}>

                <Stack spacing={2}>

                    <TextField
                        select
                        label="Personne"
                        name="personne"
                        value={form.personne}
                        onChange={handleChange}
                    >
                        {personnes.map((p) => (
                            <MenuItem
                                key={p.id}
                                value={p.id}
                            >
                                {p.nom} {p.prenom}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        select
                        label="Cause"
                        name="cause"
                        value={form.cause}
                        onChange={handleChange}
                    >
                        {causes.map((c) => (
                            <MenuItem
                                key={c.id}
                                value={c.id}
                            >
                                {c.libelle}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        select
                        label="Lieu"
                        name="lieu"
                        value={form.lieu}
                        onChange={handleChange}
                    >
                        {lieux.map((l) => (
                            <MenuItem
                                key={l.id}
                                value={l.id}
                            >
                                {l.ville}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        type="date"
                        name="date_deces"
                        value={form.date_deces}
                        onChange={handleChange}
                    />


                    <TextField
                        type="time"
                        name="heure_deces"
                        value={form.heure_deces}
                        onChange={handleChange}
                    />


                    <TextField
                        select
                        label="Type"
                        name="type_deces"
                        value={form.type_deces}
                        onChange={handleChange}
                    >
                        <MenuItem value="NATUREL">
                            Naturel
                        </MenuItem>

                        <MenuItem value="ACCIDENT">
                            Accident
                        </MenuItem>

                        <MenuItem value="INCONNU">
                            Inconnu
                        </MenuItem>
                    </TextField>


                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Enregistrer les modifications
                    </Button>

                </Stack>

            </Paper>

        </DashboardLayout>
    );
}

export default DecesEdit;