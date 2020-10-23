<template>
  <div id="TechnologyFeature">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TechnologyFeature/>
  <StayFocuses/>
  <ContactSection/>
  <InformationSection/>
 
</div>
  
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TechnologyFeature from './components/1_technology.vue'
import StayFocuses from './components/2_stay-focuses'
import ContactSection from './components/3_contact.vue'
import InformationSection from './components/4_information'


export default {
  components: {
  TechnologyFeature,
  StayFocuses,
  ContactSection,
  InformationSection
  }
}

</script>

<style>
#TechnologyFeature {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  margin:0;
}
</style>
