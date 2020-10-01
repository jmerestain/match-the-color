<template>
  <div id="mechanics-mm" class="flex flex-col container mx-auto justify-center">
        <img src="../assets/img/MECHANICS.png"
        class="mx-auto max-w-md mt-10 p-4 w-full"/>
        <div class="bg-mechanics border-4 border-mechanics
        text-mechanics flex flex-col mt-10 m-10">
            <div class="flex flex-row flex-wrap justify-around items-center">
                <div class="max-w-3xl p-10">
                    <p class="text-2xl font-medium pb-4">
                        A timed challenge where players group balloons by their color names.
                    </p>
                    <ul class="pl-4 space-y-3">
                      <li>
                        <p class="text-xl font-medium">
                            You have 60 seconds to group the balloons according
                            to the <strong>written color</strong> inside the balloon.
                        </p>
                      </li>
                      <li>
                        <p class="text-xl font-medium">
                            Don't be confused! Some colored balloons have
                            the wrong name color written on them.
                        </p>
                      </li>
                      <li>
                        <p class="text-xl font-medium">
                            The more matched balloons, the higher the score. You can do it!
                        </p>
                      </li>
                    </ul>
                </div>
                <img width="358.4px" height="417.2px"
                class="p-4 my-auto mx-auto md:mx-0 lg:mx-0"
                :src="require('@/assets/img/mech-1-ex.png')" />
            </div>
            <router-link to="/game" class="text-white uppercase text-3xl
            bg-started py-2 px-8 mb-2 border-2 rounded-lg
            border-double mx-auto text-center title tracking-wider">
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
.bg-started {
    background: #24397A;
  }
.title {
    font-family: ChalkitUp;
    font-weight: 300;
}
</style>
