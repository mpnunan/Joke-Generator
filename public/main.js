// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { jokeButton, punchlineButton, newJokeButton } from '../components/buttons';
import { jokeOnDom, punchlineOnDom } from '../components/logic';

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

const init = () => {
  htmlStructure();
  events();

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
