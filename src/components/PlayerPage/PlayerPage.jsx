import React, { Component } from 'react';
import { withStyles, Typography, Tab, Link } from '@material-ui/core';
import { styles } from './PlayerPage.style';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';

export const PlayerPage = withStyles(styles)(
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
      const { classes, player } = this.props;
      return (
        <div className={classes.container}>
          {/* <div className={classes.flex}>
            <div className={classes.image}>
              <img className={classes.borderImg} src={player[0].image} alt={player[0].name} />
              <Typography className={classes.name}>{player[0].name}</Typography>
            </div>
            <div className={classes.info}>
              <div className={classes.career}>
                <div className={classes.nationality}>
                  <Typography>Nationality: {player[0].nationality}</Typography>
                </div>
                <div className={classes.club}>
                  <Typography>Current Club: {player[0].teamName}</Typography>
                </div>
                <div className={classes.position}>
                  <Typography>Position: {player[0].position}</Typography>
                </div>
                <div className={classes.value}>
                  <Typography>Market Value: {player[0].value}</Typography>
                </div>
              </div>
              <div className={classes.detail}>
                <div className={classes.birthday}>
                  <Typography>Birthday: {player[0].birthday}</Typography>
                </div>
                <div className={classes.age}>
                  <Typography>Age: {player[0].age}</Typography>
                </div>
                <div className={classes.height}>
                  <Typography>Height: {player[0].height}</Typography>
                </div>
                <div className={classes.foot}>
                  <Typography>Foot: {player[0].foot}</Typography>
                </div>
              </div>
            </div>
          </div> */}
          <div className={classes.player}>
            <div className={classes.playerDetail}>
              <div className={classes.title}>

              </div>
              <div className={classes.information}>
                
              </div>
            </div>
          </div>
        </div>
      )
    }
  })