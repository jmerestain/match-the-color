<template>
    <div id="leaderboard" class="container mx-auto flex flex-col h-screen">
        <div id="congratulations" class="flex flex-col p-10 justify-around bg-mechanics
        border-4 border-mechanics my-auto">
            <h1 class="text-center text-4xl md:text-6xl lg:text-6xl
            fuckthis uppercase font-bold px-2 m-2">
                Congratulations!
            </h1>
            <div class="pt-20">
                <h1 class="text-center text-5xl uppercase font-bold fuckthis">
                    Your rank is:<br>
                </h1>
                <h1 class="text-center text-6xl uppercase font-bold fuckthis">
                    {{ this.$store.state.highScore }}
                </h1>
            </div>
            <div class="flex flex-row justify-center mt-10">
                <router-link to="/ending" class="bg-alphacamp font-gotham text-center
                py-3 px-4 text-3xl text-white font-bold rounded-lg flex-grow max-w-xs
                font-bold">
                    Next
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
@font-face {
    font-family: GothamMedium;
    src: url('../assets/font/gotham-score.otf');
  }
  .font-gotham {
    font-family: GothamMedium;
  }
.fuckthis {
    text-align: center;
    color: #FFFFFF;
    color: #6D3B00;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #6D3B00;
    text-shadow: -1px 1px 3px rgba(109, 59, 0, 0.7), -3px 3px 1px rgba(109, 59, 0, 0.5);
}
.bg-alphacamp {
    background-color: #6D3B00;
}
#congratulations {
    background-image: url('../assets/img/confetti.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.bg-mechanics {
  background: #F4D7A1 90%;
}
.border-mechanics {
  border: solid #6A3D08;
}
</style>
