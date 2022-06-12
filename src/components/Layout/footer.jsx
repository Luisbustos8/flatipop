import React from 'react';

const Footer = ( ) => {

    const styleFooter = {
        backgroundColor: 'black',
        position: 'relative',
        bottom: '0',
        width: '100%',
        height: '40px',
        color: 'white',
        paddingTop:'10px',
        marginTop: '50px'
    }

    return (
        <footer style={styleFooter}>
            © Prueba técnica Flat 101 - Luis Bustos Lucas - 2022
        </footer>
    )
}

export default Footer;