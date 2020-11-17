import React from 'react';
import Typed from 'react-typed';
import {Typography, Avatar, Grid, Box} from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/Untitled-Artwork.png';

//Styling
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#0277bd"
    },
    subtitle: {
        color: "#039be5",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {

    const classes = useStyles();

    return(
        <>
            <Box className={classes.typedContainer}>
                <Grid container justify="center">
                    <Avatar className={classes.avatar} src={avatar} alt="David Lindner"/>
                </Grid>
                <Typography className={classes.title} variant="h4">
                    <Typed strings={["David Lindner"]} typeSpeed={40}/>
                </Typography>
                <br/>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed 
                        strings={["Full Stack Web Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </Typography>
            </Box>
        </>
    );
}

export default Header;