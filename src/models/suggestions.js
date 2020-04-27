import { Fetch } from '../utils/fetch';

export class Suggestions {
  static async players({ year, player }) {
    const res = await Fetch.post(`/suggestions/players`, { year, player });

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }
}