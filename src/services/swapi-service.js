export default class SwapiService {
    _baseUrl = "https://swapi.dev/api";
    
    getError = (url, statusResult) => {
      return `Could not fetch ${url} recieved ${statusResult}`;
    };
  
    async getResource(url) {
      const res = await fetch(`${this._baseUrl}${url}`);
    
      if (!res.ok) {
        throw new Error(this.getError(url, res.status));
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    async getPerson(id) {
      return this.getResource(`/people/${id}`);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res;
    }
  
    async getPlanet(id) {
      const res = await this.getResource(`/planets/${id}`);
      return res;
    }
  
    async getAllStarship() {
      return await this.getResource(`/starships/`);
    }
  
    async getStarship(id) {
      const res = await this.getResource(`/starships/${id}`);
      return res;
    }
  }