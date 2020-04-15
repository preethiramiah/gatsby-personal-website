import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getContactData } from "../singletons/pagedata";
import LocationMap from "./locationmap";

const contactData = getContactData();

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();
    };
    return (
        <Box>
            <Typography variant="h4">Have a question or suggestion?</Typography>
            <Typography>Get in touch with me.</Typography>
            <form onSubmit={sendMessage}>
                <TextField
                    required
                    id="name"
                    variant="outlined"
                    label="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    required
                    id="email"
                    variant="outlined"
                    label="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={invalidEmail}
                    helperText={invalidEmail ? "" : "Enter Valid Email Id"}
                />
                <TextField
                    id="email"
                    variant="outlined"
                    label="Subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                />
                <TextField
                    required
                    id="message"
                    multiline
                    rows={5}
                    variant="outlined"
                    label="Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <Button type="submit" color="primary">
                    Send Message
                </Button>
            </form>
            <Box height={300}>
                <LocationMap />
            </Box>
        </Box>
    );
}
