import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './GlobalStyles.style';

export const GlobalStyles = withStyles(styles)(
  class extends Component {
    render() {
      return <div />;
    }
  },
);
