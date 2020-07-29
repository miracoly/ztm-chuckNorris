const img = document.querySelector('#joke-img');
const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn');

async function updateJoke() {
  try {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const { icon_url, value } = await resp.json();
    joke.innerHTML = value;
    img.setAttribute('src', icon_url);
  } catch (err) {
    console.log('Error fetching URL: ', err)
  }
}

btn.addEventListener('click', event => {
  updateJoke();
})


updateJoke();