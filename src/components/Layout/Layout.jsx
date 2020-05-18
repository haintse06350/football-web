import React, { Component } from 'react';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';
import { withStyles, Typography, Toolbar, IconButton, AppBar } from '@material-ui/core';
import { styles } from './Layout.style';
import { NavBar } from '../NavBar';

export const Layout = (
  withStyles(styles)(
    class extends Component {
      static propTypes = {
        classes: PropTypes.shape(Classes).isRequired,
      };

      constructor(props) {
        super(props);
        this.state = {
          open: true,
          team: {}
        };
      }
      render() {
        const { classes, children } = this.props;
        return (
          <div className={classes.root}>
            <NavBar />
            <main>
              {children}
            </main>
          </div>
        );
      }
    }
  )
);
