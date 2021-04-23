<template>
  <div>
    <!-- This click event is assigned a function that triggers once the user clicks on the button. -->
    <button @click="setLoudJoke">LOUD JOKE</button>
  </div>
</template>

<script>

export default {
  name: 'loud-joke',
  methods: {
    // This function accesses the dom and displays the joke as a loud joke.
    // Its gets assigned a getter - loudJoke -  from the store which is reponsible for modifying the joke with all uppercase letters.
    setLoudJoke: function () {
      document.getElementById("mainJoke").innerText = this.$store.getters.loudJoke;
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
