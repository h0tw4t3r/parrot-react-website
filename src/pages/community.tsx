import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import SocialsSection from 'containers/CommunityContainers/SocialsSection'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import Wallpaper from 'assets/wallpaper.png'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  features: {
    marginTop: 88,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  developBlock: {
    marginTop: 154
  }
}))

const Community = () => {
  const classes = useStyles()
  const [cookies] = useCookies()
  return (
    <Grid container className={classes.root} justifyContent="center">
      {cookies.theme === 'dark' && <div className={classes.wallpaper} />}
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography className={classes.headingTitle} variant="h1" align="center">
          Join the Parrot Community
        </Typography>
        <Typography className={classes.headingSubTitle} variant="body1" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <SocialsSection className={classes.features} />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Community