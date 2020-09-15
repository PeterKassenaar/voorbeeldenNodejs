<template>
  <div id="app">
    <pk-banner position="top">This is the banner ("This site uses cookies...", etc)</pk-banner>
    <h1>My shared lib</h1>
    <pk-button @submit="onSubmit($event)">Info</pk-button>
    <pk-button type="warning" @submit="onSubmit($event)">Warning</pk-button>
    <pk-button type="error" @submit="onSubmit($event)">Error</pk-button>
  </div>
</template>

<script>

import PkBanner from "@/components/pk-banner";
import PkButton from "@/components/pk-button";
export default {
  name: 'app',
  components: {PkButton, PkBanner},
  methods:{
    onSubmit(type){
      // eslint-disable-next-line no-console
      console.log('Clicked on the button: ', type);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
