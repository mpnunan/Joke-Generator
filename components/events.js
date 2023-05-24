import { jokeButton, punchlineButton, newJokeButton } from './buttons';
import { jokeOnDom, punchlineOnDom } from './actions';

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
    <div id="jokeCard">
      <div id="jokeTxt"></div>
      <div id="jokeBtn"></div>
    </div>
  `;
};

const events = () => {
  jokeButton();
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('the-joke')) {
      punchlineButton();
      jokeOnDom();
    }
  });
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('the-punchline')) {
      newJokeButton();
      punchlineOnDom();
    }
  });
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('another-joke')) {
      punchlineButton();
      jokeOnDom();
    }
  });
};

export { htmlStructure, events };
