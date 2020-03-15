import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/copyright";
import MenuBar from "../components/menubar";

export default function Index() {
    return (
        <Container maxWidth="xl">
            <Box display="flex" flexDirection="column">
                <MenuBar />
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Gatsby v4-beta example
                    </Typography>
                    <Link to="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <Copyright />
                </Box>
            </Box>
        </Container>
    );
}
