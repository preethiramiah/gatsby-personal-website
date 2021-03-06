import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'
import { getPortfolioData } from '../singletons/pagedata'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const portfolioData = getPortfolioData()

const useStyles = makeStyles((theme) => {
  return {
    portfolioBackground: {
      backgroundImage: "url('" + portfolioData.backgroundImage + "')",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    portfolioContent: {
      maxWidth: theme.customCss.applicationMaxWidth,
      width: '100%'
    },
    description: {
      color: '#999999',
      fontSize: '14px',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    intro: {
      color: '#a4a4a4',
      fontSize: '22px',
      fontWeight: 'normal',
      marginBottom: theme.spacing(2),
      textAlign: 'center'
    },
    media: {
      height: 200,
      borderRadius: '4px 4px 0 0'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    cardStyle: {
      paddingTop: theme.spacing(0.5),
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      [theme.breakpoints.down('sm')]: {
        maxWidth: '95vw'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '45vw'
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '23vw'
      }
    }
  }
})

export default function Portfolio () {
  const classes = useStyles()

  return (
    <Box className={classes.portfolioBackground}>
      <Box className={`${classes.flexColumn} ${classes.portfolioContent}`}>
        <Typography variant='h4'>Portfolio</Typography>
        <Typography className={classes.description}>
        Check out some interesting projects I have been a part of.
        </Typography>
        <Typography className={classes.intro} variant='h6'>{portfolioData.quote}</Typography>
        <Box display='flex' flexWrap='wrap'>
          {portfolioData.portfolio.map((project, index) => {
            return (
              <Box key={index.toString()} mr={1} mb={1}>
                <Card className={classes.cardStyle}>
                  <CardActionArea
                    onClick={() =>
                      window.open(project.link, '_blank')}
                  >
                    <CardMedia
                      className={classes.media}
                      image={project.banner}
                      title={project.name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                      >
                        {project.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {project.details.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography
                          className={classes.heading}
                        >
                            More Details
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails
                        className={classes.flexColumn}
                      >
                        <Box
                          color='textSecondary'
                          variant='caption'
                          dangerouslySetInnerHTML={{
                            __html:
                                project.details
                                  .description
                          }}
                        />
                        <Typography variant='h6'>
                            Achievements
                        </Typography>
                        <Box
                          color='textSecondary'
                          variant='caption'
                          dangerouslySetInnerHTML={{
                            __html:
                                project.details
                                  .achievements
                          }}
                        />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </CardActions>
                </Card>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
