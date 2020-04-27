import { Fetch } from '../utils/fetch';

export class Team {
  static async listAll({ query, limit, offset, sortBy, direction, tournamentId, seasonName }) {
    const sorting = sortBy && direction ? `&sortBy=${sortBy}&direction=${direction}` : '';
    let queryParams = `limit=${limit}&offset=${offset}${sorting}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }

    if (seasonName) {
      queryParams = `${queryParams}&seasonName=${seasonName}`
    }

    if (tournamentId) {
      queryParams = `${queryParams}&tournamentId=${tournamentId}`
    }

    const res = await Fetch.get(`/all/teams?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async fetch({ teamId }) {
    const res = await Fetch.get(`/teams/fetch?teamId=${teamId}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async listTeamMetaData({ limit, offset, query }) {
    let queryParams = `limit=${limit}&offset=${offset}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }
    
    const res = await Fetch.get(`/all/teams/metadata?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async updateTeamMetaData({ body }) {
    const res = await Fetch.put(`/teams/metadata`, body);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async list({ query, limit, offset, sortBy, direction, tournamentId, seasonName }) {
    const sorting = sortBy && direction ? `&sortBy=${sortBy}&direction=${direction}` : '';
    let queryParams = `limit=${limit}&offset=${offset}${sorting}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }

    if (seasonName) {
      queryParams = `${queryParams}&seasonName=${seasonName}`
    }

    if (tournamentId) {
      queryParams = `${queryParams}&tournamentId=${tournamentId}`
    }

    const res = await Fetch.get(`/teams?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamStats({ limit, offset, seasonName, teamId }) {
    const res = await Fetch.get(`/teams/stats?limit=${limit}&offset=${offset}&seasonName=${seasonName}&teamId=${teamId}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async fetchTeamMetadata ({ teamId }) {
    const res = await Fetch.get(`/teams/metadata/${teamId}`)
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }
}