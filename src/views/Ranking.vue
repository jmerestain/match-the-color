<template>
    <div id="leaderboard" class="container mx-auto flex flex-col h-screen">
        <img src="../assets/img/LEADERBOARD.png"
        class="mx-auto max-w-3xl mt-10 p-4 w-full" />
        <div id="congratulations" class="flex flex-col justify-around border-mechanics
        border-4 my-auto mx-5">
            <div class="bg-mechanics p-5 pt-16">
                <div class="flex flex-col gap-1 w-full font-gotham text-2xl px-10 select-none">
                    <div v-if="!loading" class="flex flex-col
                    w-full font-gotham text-2xl px-10 select-none">
                        <div v-for="entry in scoreArr" class="w-full flex-grow banner rounded-lg
                        text-white flex flex-row justify-between p-3 max-w-lg mx-auto font-black
                        lg:text-4xl font-black px-10 gap-2" :key="entry.id">
                            <p class="text-center">{{ entry.rank }}</p>
                            <p class="text-right">{{ entry.score }}</p>
                        </div>
                    </div>
                    <div v-else class="flex flex-col
                    w-full font-gotham text-2xl px-10 select-none">
                        <p class="text-center">Loading!</p>
                    </div>
                    <p class="text-lg font-bold
                    text-alphacamp text-center pt-3">
                        Your Score
                    </p>
                    <div class="w-full flex-grow banner rounded-lg
                    text-white flex flex-row justify-between p-3 max-w-lg mx-auto font-black
                    lg:text-4xl font-black px-10 gap-2">
                        <p class="text-center">{{ this.$store.state.rank }}</p>
                        <p class="text-right">{{ this.$store.state.highScore }}</p>
                    </div>
                    <p class="text-lg font-bold font-gotham text-alphacamp text-center pt-3">
                        Note: The <span class="text-first26">First 26</span> gets an Alpha Token
                    </p>
                </div>
                <div class="flex flex-row justify-center mt-10">
                    <router-link to="/ending" class="bg-started text-center
                    py-3 px-4 text-3xl text-white font-bold rounded-lg flex-grow max-w-xs
                    font-bold select-none title uppercase">
                        Next
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ranking',
  data() {
    return {
      loading: true,
      scoreArr: [],
    };
  },
  methods: {
    getLeaderboard() {
      axios.get('https://alphacamp-wc-cme.com/leaderboard.php?game_id=2').then(
        (response) => {
          this.scoreArr = response.data;
          this.loading = false;
        },
      );
    },
  },
  mounted() {
    this.getLeaderboard();
  },
};
</script>

<style scoped>
.bg-started {
    background: #24397A;
}
.text-first26 {
  color: #24397A;
}
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
@font-face {
    font-family: ChalkitUp;
    src: url('../assets/font/chalkitup-title.ttf');
}
.font-gotham {
    font-family: GothamMedium;
}
.title {
    font-family: ChalkitUp;
    font-weight: 300;
}
</style>
