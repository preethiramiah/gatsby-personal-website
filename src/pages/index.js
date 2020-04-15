import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import Link from "../components/link";
import Copyright from "../components/copyright";
import MenuBar from "../components/menubar";
import Home from "../components/home";
import Resume from "../components/resume";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";
import Contact from "../components/contact";

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
                <Box id="portfolio">
                    <Portfolio />
                </Box>
                <Box id="blog">
                    <Blog />
                </Box>
                <Box id="contact" height="400px">
                    <Contact />
                </Box>
                <Copyright />
            </Box>
        </Container>
    );
}
