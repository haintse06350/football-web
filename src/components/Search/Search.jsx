import React from 'react';
import { withStyles, Typography, Paper, TextField, MenuItem, CircularProgress, ClickAwayListener } from '@material-ui/core';
import { styles } from './Search.style';
import classnames from 'classnames';
import { Player } from '../../models/players';
import { debounce, map } from 'lodash';
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
        selectedItem: null
      };
      this.getAutocomplete = debounce(this.getAutocomplete, 500);
    }

    onInputChange = (e) => {
      this.setState({ query: e.target.value, isOpen: true, isLoading: true }, () => {
        this.getAutocomplete();
      })
    }

    getAutocomplete = async () => {
      const { query } = this.state;
      try {
        const players = await Player.autoComplete({ name: query });
        this.setState({ suggestions: players, isLoading: false });
      } catch (e) {
        // alert('server error');
      }
    }

    onChangeMenuItem = (option) => {
      this.setState({ query: option.name, isOpen: false }, () => {
        // this.props.onChangeSearchField(this.state.query);
      });
    };

    onClickAway = () => {
      this.setState({ isOpen: false });
    };

    render() {
      const { classes } = this.props;
      const { query, suggestions, isOpen, selectedItem, isLoading } = this.state;
      return (
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
                                  <img src={suggestion.image} width={50} />
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
      )
    }
  })