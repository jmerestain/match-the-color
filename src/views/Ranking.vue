<template>
    <div id="leaderboard" class="container mx-auto flex flex-col h-screen">
        <img src="../assets/img/LEADERBOARD.png"
        class="mx-auto max-w-3xl mt-10 p-4 w-full" />
        <div id="congratulations" class="flex flex-col justify-around border-mechanics
        border-4 my-auto mx-5">
            <div class="bg-mechanics p-5 pt-10">
                <div class="flex flex-col gap-1 w-full font-gotham text-2xl px-10">
                    <div class="w-full flex-grow banner rounded-lg
                    text-white flex flex-row justify-between p-3 max-w-lg mx-auto font-black
                    lg:text-4xl font-black px-10 gap-2">
                        <p class="text-center">1</p>
                        <p class="text-right">200</p>
                    </div>
                    <div class="w-full flex-grow banner rounded-lg text-center align-middle
                    text-white flex flex-row justify-between p-3 max-w-lg mx-auto font-black
                    lg:text-4xl font-black px-10 gap-2">
                        <p class="text-left">2</p>
                        <p class="text-right">100</p>
                    </div>
                    <div class="w-full flex-grow banner rounded-lg align-middle
                    text-white flex flex-row justify-between p-3 max-w-lg mx-auto font-black
                    lg:text-4xl font-black px-10 gap-2">
                        <p class="text-left">3</p>
                        <p class="text-right">50</p>
                    </div>
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
    </div>
</template>

<script>
export default {
  name: 'Ranking',
  data() {
    return {
      userId: '',
    };
  },
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
