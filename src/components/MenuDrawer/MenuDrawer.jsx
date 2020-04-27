import React, { Component } from 'react';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';
import { withStyles, Drawer, Typography, IconButton } from '@material-ui/core';
import { styles } from './MenuDrawer.style';
import classnames from 'classnames';
import IconDashboard from './assets/2094991-soccer/svg/023-score-board.svg';

import { Link, withRouter } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// https://www.flaticon.com/packs/success-65
// https://www.flaticon.com/packs/web-design-ui/3
// Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
export const MenuDrawer = withRouter(
  withStyles(styles)(
    class extends Component {
      static propTypes = {
        classes: PropTypes.shape(Classes).isRequired,
        location: PropTypes.object.isRequired
      };

      constructor(props) {
        super(props);

        this.state = {
          open: false
        };
      }

      render() {
        const { classes, location, open } = this.props;

        return (
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.props.onDrawerClose}>
                <ChevronLeftIcon className={classes.chevronIcon} />
              </IconButton>
            </div>
            <div className={classes.innerDrawer}>
              <Link
                to="/"
                className={classnames(classes.listItem, {
                  active: location.pathname === '/'
                })}
              >
                <div className={classes.listItemIcon}>
                  <img src={IconDashboard} height={30} alt="icon" />
                </div>
                <Typography>Dashboard</Typography>
              </Link>
            </div>
            <div className={classes.grow} />
            <div>
              <div className={classes.listItem} onClick={this.onLogout}>
                <Typography>Settings</Typography>
              </div>
            </div>
          </Drawer>
        );
      }
    }
  )
);
