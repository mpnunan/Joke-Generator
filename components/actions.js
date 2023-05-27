import { jokeRequest } from '../api/promises';

let joke = {};

const jokeParts = (obj) => {
  joke = {
    setup: obj.setup,
    punchline: obj.delivery
  };
  return joke;
};

const jokeOnDom = () => {
  jokeRequest()
    .then((data) => {
      console.warn(data.setup);
      jokeParts(data);
    })
    .then(() => {
      document.querySelector('#jokeTxt').innerHTML = `
  <div id="jokeBody">${joke.setup}</div>
  `;
    });
};

const punchlineOnDom = () => {
  document.querySelector('#jokeTxt').innerHTML = `
  <div id="jokeBody">${joke.setup}</div>
  <div id="punchlineBody">${joke.punchline}</div>
  `;
};

export { jokeOnDom, punchlineOnDom };
