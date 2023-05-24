/* eslint-disable import/prefer-default-export */
// const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=twopart';

// const jokeRequest = () => new Promise((resolve, reject) => {
//   fetch(jokeEndpoint, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.warn(data))
//     .catch(reject);
// });

// export { jokeRequest };
const jokeRequest = () => new Promise((resolve, reject) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart', requestOptions)
    .then((response) => response.json())
    .then((result) => resolve(result))
    .catch((error) => reject(error));
});

export { jokeRequest };
