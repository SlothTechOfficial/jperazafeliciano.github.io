<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'
export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

body {
  margin: 0;
  padding: 0;
  background-color: $body-bg-color;
}

#app {
  font-family: 'Roboto', sans-serif;
}

.card {
  max-width: 800px;
  margin: 0 auto;
  margin-top: -150px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 500px;
  padding-top: 30px;

  .card-content {
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
  }

  .card-footer {
    width: 100%;
    background-color: $primary-color;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
  }

  .column {
    padding-left: 15px;
    padding-right: 15px;
    width: 50%;
    position: relative;
  }
}
</style>