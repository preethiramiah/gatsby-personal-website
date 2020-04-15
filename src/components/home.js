import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { getHomeData } from "../singletons/pagedata";

const homeData = getHomeData();

const useStyles = makeStyles(theme => {
    return {
        homeBackground: {
            backgroundImage: "url('" + homeData.backgroundImage + "')",
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

    function buttonClickHandler(link) {
        console.log(link);
        window.location.href =
            window.location.href.substring(
                0,
                window.location.href.indexOf("/") + 1
            ) +
            "#" +
            link;
    }

    return (
        <Box className={classes.homeBackground}>
            <Carousel className={classes.carousel}>
                {homeData.carouselItems.map(item => {
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
                                {item.text}
                            </Typography>
                            <Box my={5}>
                                <Button
                                    className="CheckButton"
                                    onClick={() =>
                                        buttonClickHandler(item.link)
                                    }
                                >
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
