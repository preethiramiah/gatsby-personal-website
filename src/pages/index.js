import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Link from "../components/Link";
import Copyright from "../components/copyright";
import MenuBar from "../components/menubar";
import Home from "../components/home";
import Resume from "../components/resume";

export default function Index() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box display="flex" flexDirection="column">
                <MenuBar />
                <Box id="home">
                    <Home />
                </Box>
                <Box id="resume">
                    <Resume />
                </Box>
                <Box id="portfolio" height="400px">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Gatsby v4-beta example
                    </Typography>
                    <Link to="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
                <Box id="blog" height="400px">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Gatsby v4-beta example
                    </Typography>
                    <Link to="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
                <Box id="contact" height="400px">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Gatsby v4-beta example
                    </Typography>
                    <Link to="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
                <Copyright />
            </Box>
        </Container>
    );
}
