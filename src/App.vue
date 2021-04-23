<!-- Using the components inside our template html. -->
<template>
  <div id="app">
    <joke-button/>
    <div class="jokeGrid" >
      <snake-joke/>
      <loud-joke/>
      <normal-joke/>
    </div>
    <page-footer/>
  </div>
</template>

<script>
import JokeButton from './components/JokeButton.vue'
import SnakeJoke from './components/SnakeJoke.vue'
import LoudJoke from './components/LoudJoke.vue'
import NormalJoke from './components/NormalJoke.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    JokeButton,
    SnakeJoke,
    LoudJoke,
    NormalJoke,
    PageFooter,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
 
}

body {
  background-color: #d58d57;
}

.jokeGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 37px;
}

#app {
  display: grid;
  place-items: center;
}
</style>
