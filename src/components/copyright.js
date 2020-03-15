import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link
                color="inherit"
                href="http://preethiramiah.github.io/"
                target="_blank"
            >
                Preethi Ramiah
            </Link>{" "}
            {new Date().getFullYear()}
            {" | Dark theme inspired from "}
            <Link
                color="inherit"
                href="https://www.styleshout.com/free-templates/kreative/"
                target="_blank"
            >
                Styleshout
            </Link>
        </Typography>
    );
}
