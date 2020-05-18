import React from 'react';
import { withStyles, Typography, Paper, TextField, MenuItem, CircularProgress, ClickAwayListener } from '@material-ui/core';
import { styles } from './Search.style';
import { PlayerPage } from '../PlayerPage';
import { Player } from '../../models/players';
import { debounce, map, isNull } from 'lodash';
import Downshift from 'downshift';

export const Search = withStyles(styles)(
  class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        query: '',
        suggestions: null,
        isOpen: false,
        isLoading: false,
        selectedItem: null,
        playerId: null,
        player: null
      };
      this.getAutocomplete = debounce(this.getAutocomplete, 500);
    }

    onInputChange = (e) => {
      this.setState({ query: e.target.value, isOpen: true, isLoading: true, suggestions: null, player: null }, () => {
        this.getAutocomplete();
      })
    }

    getAutocomplete = async () => {
      const { query } = this.state;
      try {
        if (query === '') {
          this.setState({ isLoading: false, isOpen: false, player: null })
        } else {
          this.setState({ player: null });
          const players = await Player.autoComplete({ name: query });
          this.setState({ suggestions: players, isLoading: false });
        }
      } catch (e) {
        alert('server error');
      }
    }

    getPlayerDetails = async () => {
      const { playerId } = this.state;
      try {
        const player = await Player.search({ playerId });
        this.setState({ player });
      } catch (e) {
        alert('server error');
      }
    }

    onChangeMenuItem = (option) => {
      this.setState({ query: option.name, isOpen: false, playerId: option.playerId }, () => {
        this.getPlayerDetails();
      });
    };

    onClickAway = () => {
      this.setState({ isOpen: false });
    };

    render() {
      const { classes } = this.props;
      const { query, suggestions, isOpen, selectedItem, isLoading, player } = this.state;
      return (
        <div>
          <div className={classes.searchBox}>
            <ClickAwayListener onClickAway={this.onClickAway}>
              <div className={classes.suggestions}>
                <Downshift id="downshift-simple">
                  {({ getInputProps }) => {
                    return (
                      <div className={classes.container}>
                        <TextField
                          className={classes.input}
                          fullWidth={true}
                          id='player'
                          name='player'
                          InputProps={{
                            disableUnderline: true,
                            classes: {
                              input: classes.inputBase
                            },
                            onChange: this.onInputChange
                          }}
                          onKeyDown={this.onKeyDownPaper}
                          value={query}
                          placeholder="Type a player's name..."
                        />
                        {
                          isOpen && (
                            <div>
                              <Paper
                                onKeyDown={this.onKeyDownPaper}
                                className={classes.paper}
                                square
                              >
                                {map(suggestions, (suggestion, i) => (
                                  <MenuItem
                                    selected={suggestion === selectedItem}
                                    onClick={() =>
                                      this.onChangeMenuItem(suggestion)}
                                  >
                                    <img src={suggestion.image} width={50} alt='' />
                                    {suggestion.name}
                                  </MenuItem>
                                ))}
                                {!isLoading &&
                                  suggestions !== null &&
                                  suggestions.length === 0 && (
                                    <Typography className={classes.loading}>
                                      No results
                                    </Typography>
                                  )}
                                {isLoading && (
                                  <div>
                                    <Typography className={classes.loading}>
                                      <CircularProgress
                                        size={18}
                                        color={'primary'}
                                      />
                                      <Typography style={{ marginLeft: '8px' }}>
                                        loading...
                              </Typography>
                                    </Typography>
                                  </div>
                                )}
                              </Paper>
                            </div>
                          )
                        }
                      </div>
                    )
                  }}
                </Downshift>
              </div>
            </ClickAwayListener>
          </div>
          {!isNull(player) && <PlayerPage player={player} />}
        </div>
      )
    }
  })