const jokeButton = () => {
  document.querySelector('#jokeBtn').innerHTML = `
  <div class="btn btn1">
    <button id ="the-joke">Get a joke</button>
  </div>
  `;
};

const punchlineButton = () => {
  document.querySelector('#jokeBtn').innerHTML = `
  <div class="btn btn1">
    <button id="the-punchline">Get a punchline</button>
  </div>
  `;
};

const newJokeButton = () => {
  document.querySelector('#jokeBtn').innerHTML = `
  <div class="btn btn1">
    <button id="another-joke">Get another joke</button>
  </div>
  `;
};

export {
  jokeButton, punchlineButton, newJokeButton
};
