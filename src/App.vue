<template>
<div id="app">
  <hero-banner></hero-banner>
  <video-section></video-section>
  <features-section></features-section>
  <TechnologyFeature/>
  <StayFocuses/>
  <ContactSection/>
  <InformationSection/>
</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import HeroBanner from './components/TheHeroBanner.vue'
import VideoSection from './components/VideoSection'
import FeaturesSection from './components/FeaturesSection.vue'
import TechnologyFeature from './components/1_technology.vue'
import StayFocuses from './components/2_stay-focuses'
import ContactSection from './components/3_contact.vue'
import InformationSection from './components/4_information'


export default {
  components: {

  HeroBanner,
  VideoSection,
  FeaturesSection,
  TechnologyFeature,
  StayFocuses,
  ContactSection,
  InformationSection


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
  padding: 0;
}
  body {
  margin:0;

}

</style>
