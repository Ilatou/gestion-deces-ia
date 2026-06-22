import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box, } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const drawerWidth = 240;

function Sidebar() {
    const menuItems = [
        {
            text: "Dashboard",
            icon: <DashboardIcon />,
        },
        {
            text: "Décès",
            icon: <LocalHospitalIcon />,
        },
        {
            text: "Utilisateurs",
            icon: <PersonIcon />,
        },
        {
            text: "Analyses IA",
            icon: <AnalyticsIcon />,
        },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar>
                <Typography variant="h6">
                    Gestion causes Décès
                </Typography>
            </Toolbar>

            <Box sx={{ overflow: "auto" }}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={item.text}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;