import React, { useState } from "react";
import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
    Link,
    ListItem,
    Hidden,
    Tab,
    Tabs
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/ViewList";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        background: "linear-gradient(to right,  #663399, #5B72FF)"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));

export default function MenuBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    return (
        <Box>
            <AppBar
                position="fixed"
                elevation={0}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" color="inherit">
                        Preethi Ramiah
                    </Typography>
                    <Hidden mdDown>
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                        >
                            <Tab label="Home" />
                            <Tab label="Resume" />
                            <Tab label="Portfolio" />
                            <Tab label="Blog" />
                            <Tab label="Contact" />
                        </Tabs>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden mdUp>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                        </Link>
                        <Link to="/components">
                            <ListItem button>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText>Components</ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
            </Hidden>
        </Box>
    );
}
