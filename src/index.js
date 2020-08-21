//https://swapi.dev

/* ToDo:
- Axios
- Superagent
- Got
- Request
- Reqwest
- XMLHttpRequest
*/
 

class SwapiService {
  _baseUrl = "https://swapi.dev/api/";
  _peopleUrl = this._baseUrl + "people/";
  
  getError = (url, statusResult) => {
    return `Could not fetch ${url} recieved ${statusResult}`;
  };

  async getResource(url) {
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error(this.getError(url, res.status));
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(this._peopleUrl);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(this._peopleUrl + id);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    console.log(p.name)
  })
});


  swapi.getPerson(1)
  .then((person) => {
    console.log(person.mass);
  });
