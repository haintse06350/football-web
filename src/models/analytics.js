import { Fetch } from '../utils/fetch';

export class Analytics {
  static async team({ tournamentId, year, teamId, replacements }) {
    const res = await Fetch.post(`/analytics/teams`, { tournamentId, year, teamId, replacements });

    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamValueHistory({ tournamentId, teamId }) {
    const res = await Fetch.get(`/analytics/histograms/teams/market?teamId=${teamId}&tournamentId=${tournamentId}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamTranferHistory({ tournamentId, teamId, seasonName }) {
    const res = await Fetch.get(`/analytics/teams/transfer-history?teamId=${teamId}&tournamentId=${tournamentId}&seasonName=${seasonName}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamKPIs({ tournamentId, teamId, seasonName, transfermarktTeamId }) {
    const res = await Fetch.get(`/analytics/teams/kpis?teamId=${teamId}&tournamentId=${tournamentId}&seasonName=${seasonName}&transfermarktTeamId=${transfermarktTeamId}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamRanking({ teamId }) {
    const res = await Fetch.get(`/analytics/histograms/teams/ranking?teamId=${teamId}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getTeamFormation({ teamTranfersmarktId, seasonName }) {
    const res = await Fetch.get(`/analytics/football-fields?teamId=${teamTranfersmarktId}&seasonName=${seasonName}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }

  static async getMatchesHistory({ teamTranfersmarktId, seasonName, limit, offset }) {
    const res = await Fetch.get(`/analytics/matches-history?teamId=${teamTranfersmarktId}&seasonName=${seasonName}&limit=${limit}&offset=${offset}`);
    if (res.status >= 300) {
      throw Error('Bad Request');
    }

    return res.json();
  }
}