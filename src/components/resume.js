import React from "react";
import {
    Box,
    Typography,
    Link,
    Divider,
    List,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { getResumeData } from "../singletons/pagedata";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const resumeData = getResumeData();

const useStyles = makeStyles((theme) => {
    return {
        resumeBackground: {
            backgroundImage: "url('" + resumeData.backgroundImage + "')",
            backgroundColor: "#1b1e21",
            display: "flex",
            flexDirection: "column",
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
        },
        flexColumn: {
            display: "flex",
            flexDirection: "column",
        },
        skillsList: {
            "& svg": {
                marginRight: theme.spacing(1),
            },
        },
    };
});

export default function Resume() {
    const classes = useStyles();

    const linkName = {
        linkedin: LinkedInIcon,
        github: GitHubIcon,
        twitter: TwitterIcon,
    };

    return (
        <Box className={classes.resumeBackground}>
            <Box display="flex">
                <Box className={classes.flexColumn}>
                    <Typography variant="h4">Resume</Typography>
                    <Link target="_blank" href={resumeData.resumeLink}>
                        Download Resume
                    </Link>
                </Box>
                <Box className={classes.flexColumn}>
                    <Typography variant="p" color="textSecondary">
                        {resumeData.summary}
                    </Typography>
                    <Box display="flex">
                        {resumeData.socialLinks.map((socialLink) => {
                            const IconComponent = linkName[socialLink.name];
                            return (
                                <Link target="_blank" href={socialLink.url}>
                                    <IconComponent fontSize="large" />
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box display="flex">
                <Box className={classes.flexColumn}>
                    <Typography variant="h5">Key Skills</Typography>
                    <List className={classes.skillsList}>
                        {resumeData.keySkills.map((skill) => {
                            return (
                                <ListItem>
                                    <FontAwesomeIcon
                                        icon={
                                            skill.brand
                                                ? BrandIcons[skill.icon]
                                                : SolidIcons[skill.icon]
                                        }
                                    />
                                    {skill.label}
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
                <Box className={classes.flexColumn}>
                    <Typography variant="h5">Soft Skills</Typography>
                    <List className={classes.skillsList}>
                        {resumeData.softSkills.map((skill) => {
                            return (
                                <ListItem>
                                    <Box>
                                        <FontAwesomeIcon
                                            icon={SolidIcons[skill.icon]}
                                        />{" "}
                                        {skill.title}
                                        <List component="ol" type="1">
                                            {skill.skills.map((skillPoint) => {
                                                return (
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <ArrowForwardIcon fontSize="small" />
                                                        </ListItemIcon>
                                                        {skillPoint}
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Box>
            <Divider />
            <Box className={classes.flexColumn}>
                <Typography variant="h5">Work History</Typography>
                {resumeData.workHistory.map((work) => {
                    return (
                        <Box className={classes.flexColumn} mb={1}>
                            <Typography variant="h6">{work.title}</Typography>
                            <Typography>{work.duration}</Typography>
                            <Typography>{work.description}</Typography>
                        </Box>
                    );
                })}
            </Box>
            <Divider />
            <Box className={classes.flexColumn}>
                <Typography variant="h5">Education</Typography>
                <Box display="flex">
                    <Typography>{resumeData.education.degree}</Typography>
                    <Typography>{resumeData.education.marks}</Typography>
                </Box>
                <Box display="flex">
                    <Typography>{resumeData.education.institution}</Typography>
                    <Typography>{resumeData.education.year}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
