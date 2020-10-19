<template>
<div id="app">
<hero-banner></hero-banner>
<video-section></video-section>
<features-section></features-section>
</div>

  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <hero-banner></hero-banner> -->
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeroBanner from './components/TheHeroBanner.vue'
import VideoSection from './components/VideoSection'
import FeaturesSection from './components/FeaturesSection.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeroBanner,
    VideoSection,
    FeaturesSection,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700;900&display=swap');
body {
  /* width: 1080px; */
  margin: 0;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  padding: 0;
  /* margin-top: 60px; */
}

</style>
