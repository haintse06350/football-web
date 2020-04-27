import React from 'react';
import { withStyles, Tabs, Tab } from '@material-ui/core';
import { styles } from './Dashboard.style';

export const Dashboard = withStyles(styles)(
  class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
      };
    }

    render() {
      const { classes } = this.props
      const { value } = this.state;

      return (
        <>
          <div className={classes.tabHeader}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              // variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Summary" {...this.a11yProps(0)} />
              <Tab label="Roster" {...this.a11yProps(1)} />
              <Tab label="Simulator" {...this.a11yProps(2)} />
            </Tabs>
          </div>
        </>
      )
    }
  })