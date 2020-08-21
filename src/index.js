//https://swapi.dev

/* ToDo:
- Axios
- Superagent
- Got
- Request
- Reqwest
- XMLHttpRequest
*/
 


const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    console.log(p.name)
  })
});

swapi.getAllPlanets()
  .then((p) => {
    console.log(p);
  });

  swapi.getPlanet(1)
  .then((p) => {
    console.log(p);
  });
