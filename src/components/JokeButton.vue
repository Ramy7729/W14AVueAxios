<!-- Collaborated with Liz for this assignment -->
<template>
  <main class="center"  >
      <div class="mainJokeContainer">
        <h1 id="mainJoke"></h1>
        <div class="headerDeco" ><button @click="getJoke">Get Joke</button></div>
       <div class="imgContainer" ><img src="../assets/chuckNorris.jpg" alt=""></div>
      </div>
  </main>
</template>

<script>

import axios from "axios"

// GETTING OUR MAIN JOKE. THE HOLY GRAIL OF ALL JOKES. THE CHUCK NORRIS JOKE.
// THE API OF JOKES APPROVED BY DA GOD CHUCK NORRIS HIMSELF!

export default {
  name: 'joke-button',
  // This function contains our api get request. We've configured it with the api url and the 'get' method.
  
  methods: {
    getJoke: function () {
      axios.request({
        url: 'https://geek-jokes.sameerkumar.website/api?format=json',
        method: "GET"
      })
      
      // Arrow functions. So clean!!!
      // If the api request is successful our joke will appear.
      .then((res) => {
        console.log('res');
        // We are committing our mutation function from the store.
        // The joke is retrieved and accessed from the api as specified.
        this.$store.commit('updateJoke', res.data.joke);
        // Accessing the dom by using the getElementById method to display the joke on the screen.
        // It is then assigned our joke in the getters section of the store.
        document.getElementById("mainJoke").innerText = this.$store.getters.normalJoke;
        
      })
      // Another arrow function! 
      // Else the api fails and an error message is displayed instead.
      .catch((err) => {
        console.log(err);
       // Accessing the dom by using the getElementById method along with innerText to display the error message.
       document.getElementById("mainJoke").innerText = 'Uh oh!!! Chuck Norris haz the interwebz!!!'
      });
    },
  }
}
</script>

<style scoped>
.mainJokeContainer {
  display: grid;
  place-items: center;
  position: relative;
  line-height: 2.7em;
}

.headerDeco {
  width: 100vw;
  height: 170px;
  display: grid;
  place-items: center;
  background: #f6b165;
  margin-bottom: 27px;
  border-bottom: 7px solid ;
}

h1 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #f6b165;
  opacity: 0.7;
}

button {
  font-family:Arial;
	font-size:2em;
	font-weight:bold;
  color: white;
	background-color: #470000;
	border-radius:5px;
	cursor: url('https://cur.cursors-4u.net/people/peo-6/peo696.cur'), auto !important;
	padding:27px 47px;
  margin-top: 17px;
}
</style>
