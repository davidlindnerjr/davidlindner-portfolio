import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Button} from '@material-ui/core';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    mainContainer: {
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top:0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid #0277bd",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
            background: "rgba(60, 60, 60, 0.5)"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#0277bd #0277bd transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#0277bd"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #0277bd #0277bd"
            }
        }
    },
    timeLineYear :{
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#039be5",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#0288d1",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "#eeeeee",
        padding: "0",
    },
    button: {
        background: "#0288d1",
        color: "white",

        "&:hover": {
            background: "#01579b"
        },
        justifyContent: "center",
        margin: "20px",
        padding: "10px"
    }
}));

const Resume = () => {

    const classes = useStyles();

    return(
        <Box className={classes.mainContainer}>
        <Box component="header" className={classes.mainContainer}>
            <Navbar/>
                <Typography variant="h4" align="center" className={classes.heading}> 
                    About Me
                </Typography>
                <Box variant="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            AS Computer Science
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            American River College
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            ARC was my first experience with anything that had to do with code and programming.
                            Python was my first programming language; learning the basics of syntax and using functions. In later
                            classes we moved to learning C++. In C++ I learned basic syntax, Object Oriented Programming (OOP), and 
                            Data Structures. I also got a taste of Assemnly Language Programming; along with Discrete Structures, learning
                            more theory and the why behind programming structures.
                        </Typography>
                    </Box>
                     <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                            Full Stack Certification
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                            UC Davis Full Stack Web Development Coding Bootcamp
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                            At this bootcamp I learned to create full stack web applications. Starting from HTML, CSS, and Javascript to
                            more advanced frameworks and backend services like React, Node, Express, and MongoDB. Here I found that I really
                            enjoy front end development and creating appealing and overall good looking UIs.
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" style={{textAlign: "center"}}> 
                    <Button className={classes.button}>
                        <Link 
                            to="/Resume.pdf" 
                            target="_blank" 
                            className="classes.link"
                            style={{textDecoration: "none", color: "white"}}
                        >
                            Download Resume
                        </Link>
                    </Button>
                </Box>
            </Box>
            </Box>
    );
}

export default Resume;

