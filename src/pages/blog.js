import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Blog as BlogComponent } from "../components/blog";
import Link from "../components/link";

export default function Blog() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Preethi Ramiah Gatsby v4-beta example
                </Typography>
                <Link to="/">Go to the main page</Link>
            </Box>
        </Container>
    );
}
