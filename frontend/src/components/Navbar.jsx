import { AppBar, Toolbar,  Typography, Box, Avatar, IconButton,Tooltip, } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: "calc(100% - 240px)",
                ml: "240px",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    Tableau de bord
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography>
                        Administrateur
                    </Typography>

                    <Avatar>
                        A
                    </Avatar>

                    <Tooltip title="Déconnexion">
                        <IconButton color="inherit">
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;