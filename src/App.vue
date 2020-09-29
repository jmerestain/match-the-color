<template>
  <div id="app" class="bg-yellow-500 min-h-screen">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted() {
    axios.get('https://alphacamp-wc-cme.com/api/get_user.php')
      .then((response) => {
        console.log(response);
        this.$store.commit('setUid', response.data.uid);
      });
  },
};
</script>

<style>
  #app {
    background-image: url('./assets/svg/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  #banner {
    background: linear-gradient(90deg, rgba(183, 129, 40, 0) 0%,
    rgba(183, 129, 40, 0.7) 23.45%, rgba(183, 129, 40, 0.9) 48.63%,
    rgba(183, 129, 40, 0.7) 75.29%, rgba(183, 129, 40, 0) 94.79%);
    backdrop-filter: blur(5px);
  }
  .button-color {
    background-color: #6D3B00;
  }
</style>
