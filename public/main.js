// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { jokeButton, punchlineButton, newJokeButton } from '../components/buttons';

const htmlStructure = () => {
  document.querySelector('#app').innerHTML = `
    <div id="jokeBtn"></div>
  `;
  jokeButton();
};

const events = () => {
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('the-joke')) {
      punchlineButton();
    }
  });
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('the-punchline')) {
      newJokeButton();
    }
  });
  document.querySelector('#jokeBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('another-joke')) {
      jokeButton();
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
