import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// https://medium.com/datadriveninvestor/embedded-medium-as-a-blog-on-your-react-website-f01be289e151

const useStyles = makeStyles((theme) => {
  return {
    blogBackground: {
      backgroundColor: '#0f9095',
      color: '#7fe6ed',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column'
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
        maxWidth: '32vw'
      }
    }
  }
})

export default function Blog () {
  const classes = useStyles()
  const mediumURL =
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@preethiramiah'

  const [blogArticles, setBlogArticles] = useState([])
  const [authorDetails, setAuthorDetails] = useState({
    avatar: '',
    profileLink: '',
    description: ''
  })

  useEffect(() => {
    fetchMediumArticles()
  }, [])

  const fetchMediumArticles = () => {
    typeof window !== 'undefined' && window.fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        setAuthorDetails({
          avatar: data.feed.image,
          profileLink: data.feed.link,
          description: data.feed.description
        })
        setBlogArticles(data.items)
      })
  }

  return (
    <Box className={classes.blogBackground}>
      <Typography variant='h4'>My Musings</Typography>
      <Typography>{authorDetails.description}</Typography>
      {blogArticles.map((article) => {
        const shortDescription =
                    article.description.substr(
                      article.description.indexOf('<p>') + 3,
                      400
                    ) + '...'
        return (
          <Card key={article.guid} className={classes.cardStyle}>
            <CardActionArea
              onClick={() => window.open(article.link, '_blank')}
            >
              <CardMedia
                className={classes.media}
                image={article.thumbnail}
                title={article.title}
              />
              <CardContent>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  dangerouslySetInnerHTML={{
                    __html: shortDescription
                  }}
                />
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </Box>
  )
}
