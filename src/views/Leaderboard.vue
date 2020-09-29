<template>
    <div id="leaderboard" class="container mx-auto flex flex-col h-screen">
        <div id="congratulations" class="flex flex-col justify-around border-mechanics
        border-4 my-auto mx-5">
            <div class="bg-mechanics p-10">
                <img src="../assets/img/CONGRATULATIONS.png"
                class="mx-auto max-w-4xl mt-10 p-4 w-full"/>
                <div class="pt-20">
                    <img src="../assets/img/Your rank is.png"
                    class="mx-auto max-w-xs mt-10 p-4 w-full"/>
                    <div class="flex flex-row text-center text-6xl uppercase max-w-md
                    font-black text-white justify-around items-baseline banner mx-auto">
                        <p>1</p>
                        <p>{{ this.$store.state.highScore }} <small>pts</small></p>
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-10">
                    <router-link to="/leaderboard" class="bg-alphacamp font-gotham text-center
                    py-3 px-4 text-3xl text-white font-bold rounded-lg flex-grow max-w-xs
                    font-bold">
                        Next
                    </router-link>
                </div>
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
  name: 'Score',
};
</script>

<style scoped>
@font-face {
    font-family: GothamMedium;
    src: url('../assets/font/gotham-score.otf');
}
.font-gotham {
    font-family: GothamMedium;
}
.bg-alphacamp {
    background-color: #6D3B00;
}
.text-alphacamp {
    color: #6D3B00;
}
#congratulations {
    background-image: url('../assets/img/confetti.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.bg-mechanics {
    background: rgb(244,215,161,0.65);
}
.border-mechanics {
    border: solid #6A3D08;
}
.banner {
    background: linear-gradient(90deg, rgba(183, 129, 40, 0) 0%,
    rgba(183, 129, 40, 0.7) 23.45%, rgba(183, 129, 40, 0.9) 48.63%,
    rgba(183, 129, 40, 0.7) 75.29%, rgba(183, 129, 40, 0) 94.79%);
    backdrop-filter: blur(5px);
}
</style>
