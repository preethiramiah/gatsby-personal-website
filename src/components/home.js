import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
    return {
        homeBackground: {
            backgroundImage: "url('images/intro-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            display: "flex",
            justifyContent: "center",
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        },
        carousel: {
            width: "100%"
        },
        carouselTextMobile: {
            maxWidth: "90vw"
        },
        carouselText: {
            maxWidth: "60vw"
        }
    };
});

export default function Home() {
    const classes = useStyles();
    const isSmallDevice = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const carouselItems = [
        {
            buttonLabel: "More About Me",
            description:
                "Focus on your business full-time. Trust me with your website building burden."
        },
        {
            buttonLabel: "My Works",
            description:
                "Building a website is similar to crafting a piece of art. Take a look at some of my works"
        },
        {
            buttonLabel: "Contact",
            description:
                "Get in touch to create a stunning website at an unbelievable price."
        }
    ];
    return (
        <Box className={classes.homeBackground}>
            <Carousel className={classes.carousel}>
                {carouselItems.map(item => {
                    return (
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Typography
                                align="center"
                                variant={isSmallDevice ? "h5" : "h2"}
                                className={
                                    isSmallDevice
                                        ? classes.carouselTextMobile
                                        : classes.carouselText
                                }
                            >
                                {item.description}
                            </Typography>
                            <Box my={5}>
                                <Button className="CheckButton">
                                    {item.buttonLabel}
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
            </Carousel>
        </Box>
    );
}
