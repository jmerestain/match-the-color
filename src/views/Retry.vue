<template>
    <div class="container mx-auto flex flex-col justify-center align-center h-screen">
        <div class="m-auto">
            <img :src="require('@/assets/img/Group 31.png')" class="w-full mx-auto max-w-lg" />
            <div class="flex flex-row mt-16 justify-center flex-wrap
            gap-2 mx-2">
                <div class="border-mechanics px-1 py-1
                max-w-sm rounded-lg w-48 flex-grow flex">
                    <router-link to="/" class="bg-alphacamp text-white font-gotham
                    text-xl px-3 py-2 rounded-md font-bold w-full text-center flex-grow">
                        Back to Home
                    </router-link>
                </div>
                <div class="border-mechanics px-1 py-1
                max-w-sm rounded-lg w-48 flex-grow flex">
                    <router-link to="/game" class="bg-alphacamp text-white font-gotham
                    text-xl px-3 py-2 rounded-md font-bold w-full text-center flex-grow">
                        Try Again
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Ending',
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
    text-shadow: -1px 1px 3px rgba(109, 59, 0, 0.8), -3px 3px 1px rgba(109, 59, 0, 0.6);
}
.bg-mechanics {
  background: #F4D7A1 90%;
}
.text-mechanics {
  color: #6A3D08;
}
.bg-alphacamp {
  background-color: #24397A;
}
.border-mechanics {
  border: solid #24397A;
}
@font-face {
    font-family: GothamMedium;
    src: url('../assets/font/gotham-score.otf');
  }
  .font-gotham {
    font-family: GothamMedium;
  }
</style>
