import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
const Footer = ( props ) => {
    const { position } = props;
    const styleFooter = {
        backgroundColor: 'black',
        position:'relative',
        bottom: '0',
        width: '100%',
        height: '120px',
        color: 'white',
        paddingTop:'10px',
        marginTop: '50px'
    }

    return (
        <footer style={styleFooter}>
            <p style={{display: 'flex', justifyContent:'center', paddingTop:'25px'}}> 
                © Prueba técnica Flat 101 - Luis Bustos Lucas - 2022
            </p>
        </footer>
    )
}

export default Footer;