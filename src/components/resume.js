import React from 'react'
import {
  Box,
  Typography,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Button
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as BrandIcons from '@fortawesome/free-brands-svg-icons'
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
import { getResumeData } from '../singletons/pagedata'

const resumeData = getResumeData()

const useStyles = makeStyles((theme) => {
  return {
    resumeBackground: {
      backgroundImage: "url('" + resumeData.backgroundImage + "')",
      backgroundColor: '#1b1e21',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    },
    resumeContent: {
      maxWidth: theme.customCss.applicationMaxWidth,
      width: '100%'
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      '& .MuiButton-root': {
        marginTop: theme.spacing(2)
      }
    },
    centerAlign: {
      alignItems: 'center'
    },
    skillsList: {
      '& svg': {
        marginRight: theme.spacing(1)
      },
      '& ol .MuiListItem-root': {
        paddingBottom: theme.spacing(0.5),
        paddingTop: theme.spacing(0),
        '& .MuiListItemIcon-root': {
          minWidth: theme.spacing(4)
        }
      }
    }
  }
})

export default function Resume () {
  const classes = useStyles()

  const linkName = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    twitter: TwitterIcon
  }

  return (
    <Box className={classes.resumeBackground}>
      <Box display='flex' className={classes.resumeContent} mb={2}>
        <Box className={`${classes.flexColumn} ${classes.centerAlign}`} width={1 / 3}>
          <Typography variant='h4'>Resume</Typography>
          <Button target='_blank' href={resumeData.resumeLink}>
                        Download Resume
          </Button>
          <Box display='flex' mt={2}>
            {resumeData.socialLinks.map((socialLink) => {
              const IconComponent = linkName[socialLink.name]
              return (
                <Box mr={1} key={socialLink.name}>
                  <Link
                    target='_blank'
                    href={socialLink.url}
                  >
                    <IconComponent color='secondary' />
                  </Link>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box className={classes.flexColumn} width={2 / 3}>
          <Typography align='center' color='textSecondary'>
            {resumeData.summary}
          </Typography>
        </Box>
      </Box>
      <Divider className={classes.resumeContent} />
      <Box display='flex' my={2} className={classes.resumeContent}>
        <Box className={`${classes.flexColumn} ${classes.centerAlign}`} width={1 / 3}>
          <Typography variant='h5'>Key Skills</Typography>
          <List className={classes.skillsList}>
            {resumeData.keySkills.map((skill) => {
              return (
                <ListItem key={skill.label}>
                  <FontAwesomeIcon
                    icon={
                      skill.brand
                        ? BrandIcons[skill.icon]
                        : SolidIcons[skill.icon]
                    }
                  />
                  {skill.label}
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box className={classes.flexColumn} width={2 / 3}>
          <Typography align='center' variant='h5'>Soft Skills</Typography>
          <List className={classes.skillsList}>
            {resumeData.softSkills.map((skill) => {
              return (
                <ListItem key={skill.title.split(' ').join('')}>
                  <Box>
                    <FontAwesomeIcon
                      icon={SolidIcons[skill.icon]}
                    />{' '}
                    {skill.title}
                    <List component='ol' type='1'>
                      {skill.skills.map((skillPoint, index) => {
                        return (
                          <ListItem key={index.toString()}>
                            <ListItemIcon>
                              <FiberManualRecordIcon fontSize='small' />
                            </ListItemIcon>
                            {skillPoint}
                          </ListItem>
                        )
                      })}
                    </List>
                  </Box>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Box>
      <Divider className={classes.resumeContent} />
      <Box my={2} className={`${classes.flexColumn} ${classes.resumeContent}`}>
        <Typography align='center' variant='h5'>Work History</Typography>
        {resumeData.workHistory.map((work, index) => {
          return (
            <Box
              key={index.toString()}
              className={classes.flexColumn}
              mt={2}
            >
              <Typography variant='subtitle1' color='secondary'>{work.title}</Typography>
              <Typography variant='subtitle2'>{work.duration}</Typography>
              <Typography
                variant='body2'
                dangerouslySetInnerHTML={{
                  __html: work.description
                }}
              />
              {/* <Typography variant='body2'>{work.description}</Typography> */}
            </Box>
          )
        })}
      </Box>
      <Divider className={classes.resumeContent} />
      <Box mt={2} className={`${classes.flexColumn} ${classes.resumeContent}`}>
        <Typography align='center' variant='h5'>Education</Typography>
        <Box display='flex' mt={2} justifyContent='space-between'>
          <Typography variant='subtitle2'>{resumeData.education.degree}</Typography>
          <Typography variant='subtitle2'>{resumeData.education.marks}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2'>{resumeData.education.institution}</Typography>
          <Typography variant='subtitle2'>{resumeData.education.year}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
