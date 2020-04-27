import { Fetch } from '../utils/fetch';

export class Tournament {
  static async list({ query, limit, offset, sortBy, direction, seasonName, teamId }) {
    const sorting = sortBy && direction ? `&sortBy=${sortBy}&direction=${direction}` : '';
    let queryParams = `limit=${limit}&offset=${offset}${sorting}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }

    if (seasonName) {
      queryParams = `${queryParams}&seasonName=${seasonName}`
    }

    if (teamId) {
      queryParams = `${queryParams}&teamId=${teamId}`
    }

    const res = await Fetch.get(`/tournaments?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async listAll({ query, limit, offset, sortBy, direction, seasonName, teamId }) {
    const sorting = sortBy && direction ? `&sortBy=${sortBy}&direction=${direction}` : '';
    let queryParams = `limit=${limit}&offset=${offset}${sorting}`;

    if (query) {
      queryParams = `${queryParams}&q=${query}`
    }

    if (seasonName) {
      queryParams = `${queryParams}&seasonName=${seasonName}`
    }

    if (teamId) {
      queryParams = `${queryParams}&teamId=${teamId}`
    }

    const res = await Fetch.get(`/all/tournaments?${queryParams}`);

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }
}