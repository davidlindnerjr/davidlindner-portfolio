import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "rgba(60, 60, 60, 0.9.5)",
        height: "100vh"
    },
    particlesCanvas: {
        position: "fixed",
        opacity: "0.3",
    }
});

const Home = () => {

    const classes = useStyles();

    return(
        <div>
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 44,
                            density: {
                                enable: true,
                                value_area: 500
                            }
                        },
                        shape: "circle",
                        stroke: {
                            width: 1
                        }
                    },
                    size: {
                        value: 8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                }}
            />
        </div>
    );
}

export default Home;