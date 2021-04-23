<template>
  <div>
    <!-- This click event is assigned a function that triggers once the user clicks on the button. -->
    <button @click="setJoke">Normal Joke</button>
  </div>
</template>

<script>
export default {
  name: 'normal-joke',
  methods: {
    // This function accesses the dom and displays the joke as a normal joke.
    // Its gets assigned a getter - normal -  from the store which is the joke in it's original state.
    setJoke: function () {
      document.getElementById("mainJoke").innerText = this.$store.getters.normalJoke;
    }
  }
}
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
