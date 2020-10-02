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
    axios.get('https://beta.alphacamp-wc-cme.com/api/get_user.php')
      .then((response) => {
        console.log(response);
        this.$store.commit('setUid', response.data.uid);
      });
  },
};
</script>

<style>
  .bg-started {
    background: #24397A;
  }
  #app {
    background-image: url('./assets/svg/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: GothamMedium;
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
  @font-face {
    font-family: GothamMedium;
    src: url('./assets/font/gotham-score.otf');
  }
  @font-face {
    font-family: ChalkitUp;
    src: url('./assets/font/chalkitup-title.ttf');
  }
  .font-gotham {
    font-family: GothamMedium;
  }
  .title {
    font-family: ChalkitUp;
    font-weight: 300;
  }
</style>
