<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ranking',
  mounted() {
    axios.get('https://alphacamp-wc-cme.com/api/get_user.php?uid=1')
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style scoped>

</style>
