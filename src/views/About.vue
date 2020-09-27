<template>
  <div id="mechanics-mm" class="flex flex-col container mx-auto justify-center">
        <h1 class="text-center text-6xl fuckthis uppercase font-bold">
          Mechanics
        </h1>
        <div class="bg-mechanics text-orange-900
        border-2 border-mechanics text-mechanics flex flex-col mt-10">
            <div class="flex flex-row flex-wrap justify-between">
                <div class="max-w-3xl p-4 my-auto">
                    <p class="text-2xl font-medium pb-4">
                        A timed challenge where players group ballons by colors.
                    </p>
                    <ul class="pl-4 space-y-4">
                      <li>
                        <p class="text-xl font-medium">
                            In 60 seconds, group the balloons according to the written
                            color on the balloon.
                        </p>
                      </li>
                      <li>
                        <p class="text-xl font-medium">
                            Watch out, some balloons have the wrong color name written on them.
                            Don’t get confused!
                        </p>
                      </li>
                      <li>
                        <p class="text-xl font-medium">
                            The more balloons cleared, the higher the score. You can do it!
                        </p>
                      </li>
                    </ul>
                </div>
                <img width="358.4px" height="417.2px"
                class="p-4 my-auto"
                :src="require('@/assets/img/mech-1-ex.png')" />
            </div>
            <router-link to="/game" class="w-full text-white uppercase text-3xl
            bg-alphacamp p-2 border-2 border-double mx-auto text-center
            container uppercase font-medium">
                Ready
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Mechanics',
};
</script>

<style scoped>
.bg-mechanics {
  background: #F4D7A1 90%;
}
.text-mechanics {
  color: #6A3D08;
}
.bg-alphacamp {
  background-color: #6D3B00;
}
.border-mechanics {
  border: solid #6A3D08;
}
.fuckthis {
    text-align: center;
    color: #FFFFFF;
    color: #6D3B00;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #6D3B00;
    text-shadow: -1px 1px 3px rgba(109, 59, 0, 0.6), -3px 3px 1px rgba(109, 59, 0, 0.3);
}
</style>
