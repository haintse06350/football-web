import React, { Component } from 'react';
import { withStyles, Typography, Tab, Link } from '@material-ui/core';
import { styles } from './NavBar.style';
import classnames from 'classnames';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';

export const NavBar = withStyles(styles)(
  class extends Component {
    static propTypes = {
      classes: PropTypes.shape(Classes).isRequired,
      location: PropTypes.object.isRequired
    };
    constructor(props) {
      super(props);

      this.state = {
      };
    }

    render() {
      const { classes, location } = this.props;

      return (
        <div className={classes.header}>
          <div className={classes.logoBanner}>
            <Typography variant="h2" className={classes.logo}>Football Data</Typography>
          </div>
          <div className={classes.menu}>
            <Link href='/products'
              className={classnames(classes.listItem, {
                active: window.location.pathname === '/products'
              })}
            >
              <Typography variant='h3'>Products</Typography>
            </Link>
            <Link href='/pricings'
              className={classnames(classes.listItem, {
                active: window.location.pathname === '/pricings'
              })}
            >
              <Typography variant='h3'>Pricings</Typography>
            </Link>
            <Link href='/contact'
              className={classnames(classes.listItem, {
                active: window.location.pathname === '/contact'
              })}
            >
              <Typography variant='h3'>Contact</Typography>
            </Link>
          </div>
        </div>
      )
    }
  })