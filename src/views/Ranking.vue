<template>
    <div id="leaderboard" class="container mx-auto flex flex-col h-screen">
        <div id="congratulations" class="flex flex-col justify-around border-mechanics
        border-4 my-auto mx-5">
            <div class="bg-mechanics p-10">
                <img src="../assets/img/LEADERBOARD.png"
                class="mx-auto max-w-4xl mt-10 p-4 w-full" />
                <div class="flex flex-col gap-1 w-full font-gotham text-2xl px-10">
                    <div class="w-full flex-grow bg-alphacamp rounded-lg
                    text-white flex flex-row justify-between p-3">
                        <p>1</p>
                        <p>200</p>
                    </div>
                    <div class="w-full flex-grow bg-alphacamp rounded-lg
                    text-white flex flex-row justify-between p-3">
                        <p>2</p>
                        <p>100</p>
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
</style>
