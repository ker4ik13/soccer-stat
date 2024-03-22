import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if(!API_KEY) {
  throw new Error('Api key is undefined');
}

const API_URL = 'http://localhost:4321/api'

export class LeagueService {

  static async getLeagues () {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        'X-Auth-Token': API_KEY,
      }
    });
    console.log(response);
    return response;
  }
}