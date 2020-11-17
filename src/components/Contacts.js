import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Navbar from './Navbar';

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#eeeeee"
        },
        "& label": {
            color: "#eeeeee"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#eeeeee" 
            }
        },
        "&:hover fieldset": {
            borderColor: "#eeeeee"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#eeeeee"
        }
    }
})(TextField);

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "rgba(60, 60, 60, 0.5)",
        height: "100vh"
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#039be5",
        borderColor: "#039be5"
    },
    contact: {
        marginTop: "1rem",
        color: "#039be5",
        borderColor: "#039be5"
    }
}));

const Contacts = () => {

    const classes = useStyles();

    return(
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography 
                        variant="h5" 
                        style={
                            {
                                color: "#039be5", 
                                textAlign:"center", 
                                textTransform:"uppercase"
                            }
                        }
                    >
                        Contacts
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: {color: "white"} }}
                        margin="dense"
                        size="medium"
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: {color: "white"} }}
                        margin="dense"
                        size="medium"
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label="Company"
                        variant="outlined"
                        inputProps={{ style: {color: "white"} }}
                        margin="dense"
                        size="medium"
                    />
                    <br/>
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        Contact Me
                    </Button>
                    <br/>
                    <Grid container direction="row" alignItems="center" justify="center" className={classes.contact}>
                        <Grid item>
                            <EmailIcon style={{marginRight: "5px"}} />
                        </Grid>
                        <Grid item>
                            davidlindnerjr@gmail.com
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justify="center" className={classes.contact}>
                        <Grid item>
                            <PhoneIcon style={{marginRight: "5px"}}/>
                        </Grid>
                        <Grid item>
                            (916) 708-6895
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
}

export default Contacts;