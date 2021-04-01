import React, { Component } from 'react';
import { Container, Grid } from "@material-ui/core";

const Footer = ({data}) => {
   const networks = data.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   });
   return (
      <footer>
         <Grid item xs={12} className="social-links">
            {networks}
         </Grid>
         <Grid item xs={12} >&copy; Copyright {new Date().getFullYear()} Mitchell Dang</Grid>
      </footer>
   );
}

export default Footer;
