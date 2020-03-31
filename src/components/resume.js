import React from "react";
import {
    Box,
    Typography,
    Link,
    Divider,
    List,
    ListItem
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
    return {
        resumeBackground: {
            backgroundImage: "url('images/resumebg.png')",
            backgroundColor: "#1b1e21",
            display: "flex",
            flexDirection: "column",
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            height: "500px"
        },
        flexColumn: {
            display: "flex",
            flexDirection: "column"
        }
    };
});

export default function Resume() {
    const classes = useStyles();

    return (
        <Box className={classes.resumeBackground}>
            <Box display="flex">
                <Box className={classes.flexColumn}>
                    <Typography variant="h4">Resume</Typography>
                    <Link
                        target="_blank"
                        href="https://drive.google.com/file/d/1fPsqpNLo6Z0VO_AHLmLYmYIR_y0B5YeG/view"
                    >
                        Download Resume
                    </Link>
                </Box>
                <Box className={classes.flexColumn}>
                    <Typography variant="p">
                        Project winning Web Developer with 5 years of experience
                        in converting customer needs into responsive content.
                        Proven track record of saving 15%-20% of project costs
                        through parallel completion of tasks, and creation of
                        customizable tool that automates web designing. Handled
                        3 major projects single-handedly at the same time, and
                        results delivered on time.
                    </Typography>
                    <Box display="flex">
                        <Link
                            target="_blank"
                            href="https://github.com/preethiramiah"
                        >
                            <LinkedInIcon fontSize="large" />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/preethiramiah"
                        >
                            <GitHubIcon fontSize="large" />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://twitter.com/preethiramiah"
                        >
                            <TwitterIcon fontSize="large" />
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box display="flex">
                <Box className={classes.flexColumn}>
                    <Typography variant="h5">Key Skills</Typography>
                    <List>
                        <ListItem>ReactJS</ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
}
