<template>
  <div class="snakeContainer" >
      <!-- This click event is assigned a function that triggers once the user clicks on the button. -->
      <button @click="setSnakeJoke">Snake_Joke</button>
  </div>
</template>

<script>
export default {
  name: "snake-joke",
  
  methods: {
    // This function accesses the dom and displays the joke as a snake joke.
    // Its gets assigned a getter - snakeJoke -  from the store which is reponsible for replacing all spaces in the joke with an underscore.
    setSnakeJoke: function () {
      document.getElementById("mainJoke").innerText = this.$store.getters.snakeJoke;
    }
  }
};
</script>

<style scoped>
button {
  font-family:Arial;
	font-size:2em;
	font-weight:bold;
  color: white;
	background-color: #470000;
	border-radius:5px;
	cursor: url('https://cur.cursors-4u.net/people/peo-6/peo696.cur'), auto !important;
	padding:11px 23px;
}
</style>
