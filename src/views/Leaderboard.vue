<template>
    <div id="leaderboard" class="container mx-auto">
        <div class="flex flex-col pt-10 justify-between">
            <h1 class="text-center text-4xl md:text-6xl lg:text-6xl
            fuckthis uppercase font-bold px-2">
                Leaderboard
            </h1>
            <div class="pt-20">
                <h1 class="text-center text-4xl fuckthis uppercase font-bold">
                    Your Score: {{ this.$store.state.highScore }}
                </h1>
            </div>
            <div class="flex flex-row justify-center mt-10">
                <router-link to="/game" class="bg-alphacamp
                py-2 px-4 text-4xl text-white font-medium rounded-lg">
                    Retry
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import store from '../store';
// eslint-disable-next-line import/no-cycle
import router from '../router';

export default {
  name: 'Leaderboard',
};
</script>

<style scoped>
.fuckthis {
    text-align: center;
    color: #FFFFFF;
    color: #6D3B00;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #6D3B00;
    text-shadow: -1px 1px 3px rgba(109, 59, 0, 0.6), -3px 3px 1px rgba(109, 59, 0, 0.3);
}
.bg-alphacamp {
    background-color: #6D3B00;
}
</style>
