import { useEffect, useState } from "react";
import {
    Typography,
    Paper,
    TextField,
    MenuItem,
    Button,
    Stack,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";

import {
    createDeces,
    getPersonnes,
    getCauses,
    getLieux,
} from "../services/decesService";

function DecesCreate() {

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
        const load = async () => {
            setPersonnes(await getPersonnes());
            setCauses(await getCauses());
            setLieux(await getLieux());
        };

        load();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await createDeces(form);
            alert("Décès enregistré avec succès.");
        } catch (err) {
            console.error(err);
            alert("Erreur lors de l'enregistrement.");
        }
    };

    return (
        <DashboardLayout>
            <Typography variant="h4" gutterBottom>
                Ajouter un décès
            </Typography>

            <Paper sx={{ p: 3 }}>

                <Stack spacing={2}>

                    <TextField
                        select
                        name="personne"
                        label="Personne"
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
                        name="cause"
                        label="Cause"
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
                        name="lieu"
                        label="Lieu"
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
                        Enregistrer
                    </Button>

                </Stack>

            </Paper>
        </DashboardLayout>
    );
}

export default DecesCreate;
