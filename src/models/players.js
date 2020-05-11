import { Fetch } from '../utils/fetch';
import { isNumber } from 'lodash';

export class Player {
  static async fetch(query, offset, limit, sortBy, direction, position, teamId, seasonId) {
    const sorting = sortBy && direction ? `&sortBy=${sortBy}&direction=${direction}` : '';
    let queryParams = `limit=${limit}&offset=${offset}${sorting}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }
    if (teamId && seasonId) {
      if (!position) {
        queryParams = `${queryParams}&teamId=${teamId}&seasonId=${seasonId}`
      } else {
        queryParams = `${queryParams}&teamId=${teamId}&seasonId=${seasonId}&position=${position}`
      }
    }

    const res = await Fetch.get(`/players?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }


  static async list({ query, offset, limit, sortBy, direction, positions, teamId, seasonName, tournamentId, positionDetail }) {
    let queryParams = ``;

    if (isNumber(limit)) {
      queryParams = `${queryParams}&limit=${limit}`
    } else {
      queryParams = `${queryParams}&limit=${25}`
    }

    if (isNumber(offset)) {
      queryParams = `${queryParams}&offset=${offset}`
    } else {
      queryParams = `${queryParams}&offset=${0}`
    }

    if (sortBy && direction) {
      queryParams = `${queryParams}&sortBy=${sortBy}&direction=${direction}`
    }

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }

    if (teamId) {
      queryParams = `${queryParams}&teamId=${teamId}`
    }

    if (tournamentId) {
      queryParams = `${queryParams}&tournamentId=${tournamentId}`
    }

    if (seasonName) {
      queryParams = `${queryParams}&seasonName=${seasonName}`
    }

    if (positions && positions.length) {
      queryParams = `${queryParams}&positions=${positions.join(',')}`
    }

    if (positionDetail) {
      queryParams = `${queryParams}&positionDetail=${positionDetail.toLowerCase()}`
    }

    const res = await Fetch.get(`/players?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getSuggestPlayers({ playerId, seasonName }) {
    const res = await Fetch.post('/suggest/players', { playerId, seasonName });
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async search({ playerId, seasonName }) {
    const res = await Fetch.get(`/search?playerId=${playerId}&seasonName=${seasonName}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async autoComplete({ name }) {
    console.log(name)
    const res = await Fetch.get(`/autocomplete?q=${name}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }
}