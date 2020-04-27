import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './LineChart.style';
import { Line } from 'react-chartjs-2';
import { Team } from '../../models/teams';

export const LineChart = withStyles(styles)(
  class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        teams: { count: null, rows: [] },
        isLoading: false,
        limit: 25,
        page: 0,
        query: null,
        direction: 'asc',
        sortBy: null,
        seasonName: 2018,
        listTournament: [],
        tournamentId: null,
        teamId: 32
      };
      this.fetchTeams();
    }

    fetchTeams = async () => {
      this.setState({ isLoading: true })
      const { limit, query, page, direction, sortBy, seasonName, tournamentId, teamId } = this.state;
      const offset = limit * page;

      try {
        const teams = await Team.getTeamStats({ query, limit, offset, sortBy, direction, seasonName, tournamentId, teamId });
        this.setState({ teams, isLoading: false });
      } catch (e) {
        this.setState({ isLoading: false })
        alert(e);
      }
    };

    render() {
      const { classes } = this.props

      return (
        <div className={classes.chart}>
          <p>{this.state.teams.length}</p>
          <Line
            height={250}
            data={{
              labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
              datasets: [
                {
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  borderWidth: 1,
                  data: [12, 32, 22, 52, 19, 23, 43, 65, 26],
                }
              ]
            }}
            options={{
              height: 250,
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  display: true
                }],
                xAxes: [
                  {
                    display: true
                  }
                ]
              }
            }}
          />
        </div>
      )
    }
  })