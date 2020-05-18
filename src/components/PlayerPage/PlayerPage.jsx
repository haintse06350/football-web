/* eslint-disable no-mixed-operators */
import React, { Component } from 'react';
import { withStyles, Typography, Tooltip, Badge } from '@material-ui/core';
import { styles } from './PlayerPage.style';
import { Classes } from 'react-jss';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames';
import { teamLogoUrl, nationLogoUrl, tournamentUrl } from '../../constants/imageUrl';

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
      const media = player.socialMedia !== null ? player.socialMedia.split(',') : null;
      return (
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <div className={classes.header}>
              <Typography className={classes.name}>{player.number}&#160;{player.name}</Typography>
              {
                media !== null && <div className={classes.socialMedia}>
                  {map(media, sM => (
                    sM.includes('facebook') && <a href={sM} target="blank"><img src={`${process.env.PUBLIC_URL}/fb.svg`} width={30} alt='' /></a>
                    || sM.includes('instagram') && <a href={sM} target="blank"><img src={`${process.env.PUBLIC_URL}/ig.svg`} width={30} alt='' /></a>
                    || sM.includes('twitter') && <a href={sM} target="blank"><img src={`${process.env.PUBLIC_URL}/tw.svg`} width={30} alt='' /></a>
                  ))}
                </div>
              }
            </div>
            <div className={classes.trophy}>
              {map(JSON.parse(player.listTrophy).slice(0, 5), o => (
                <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={o.amount} color="secondary">
                  <Tooltip title={o.name}>
                    <img src={o.image} alt='' />
                  </Tooltip>
                </Badge>
              ))}
              {JSON.parse(player.listTrophy).length > 5 && <div className={classes.seeMore}>
                <a href={`/all-titles/${player.playerId}`}>>>See more</a>
              </div>}
            </div>
            {player.tournamentName !== null && player.tournamentRegionName !== null &&
              <div className={classes.club}>
                <div className={classes.clubImg}>
                  <img src={teamLogoUrl(player.teamId)} alt='' width={90} />
                </div>
                <div className={classes.clubInfo}>
                  <div className={classnames(classes.teamName, classes.link)}>{player.teamName}</div>
                  <div className={classnames(classes.flex, classes.tournament)}>
                    <img src={tournamentUrl(player.tournamentName.replace(/\s/g, ''))} alt='' width={15} />
                &#160;<Typography className={classnames(classes.bold, classes.link)}>{player.tournamentName}</Typography>
                  </div>
                  <div className={classnames(classes.region, classes.flex)}>
                    Tournament region: <Typography className={classnames(classes.bold, classes.link)}>{player.tournamentRegionName}</Typography>&#160;
                  <img src={nationLogoUrl(player.tournamentRegionName.replace(/\s/g, ''))} width={20} alt='' />
                  </div>
                  <div className={classnames(classes.region, classes.flex)}>
                    Contract until: <Typography className={classes.bold}>{player.endDateContract}</Typography>
                  </div>
                </div>
              </div>}
            {player.value !== '-' && <div className={player.tournamentName !== null && player.tournamentRegionName !== null ? classes.marketValue : classes.noRelative}>
              <div className={classes.value}>
                <Typography>{player.value}</Typography>
              </div>
              <div className={classes.seeDetail}>
                <a href={`/market-values/${player.playerId}`}>>>See detail</a>
              </div>
            </div>}
          </div>
          <div className={classes.flex}>
            <div className={classes.image}>
              <img src={player.image} alt={player.name} />
            </div>
            <div className={classes.info}>
              <div className={classes.data}>
                <div className={classes.flex}>
                  Nationality:
                  <Typography className={classnames(classes.bold, classes.link)}>
                    {player.nationality} &#160;
                    <img src={nationLogoUrl(player.nationality.replace(/\s/g, ''))} width={20} alt='' />
                  </Typography>
                </div>
                <div className={classes.flex}>
                  Position: <Typography className={classes.bold}>{player.position}</Typography>
                </div>
              </div>
              <div className={classes.data}>
                <div className={classes.flex}>
                  Birthday: <Typography className={classes.bold}>{player.birthday}({player.age})</Typography>
                </div>
                <div className={classes.flex}>
                  Foot: <Typography className={classes.bold}>{player.foot}</Typography>
                </div>
              </div>
              <div className={classes.data}>
                <div className={classes.flex}>
                  Height: <Typography className={classes.bold}>{player.height}</Typography>
                </div>
                <div className={classes.flex}>
                  Weight: <Typography className={classes.bold}>{parseInt(player.weight)}</Typography>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    }
  })