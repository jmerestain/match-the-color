<template>
    <div id="porn">
            <p id="word" class="absolute text-center font-bold text-lg w-full z-30">
                {{ word }}
            </p>
            <svg id="balloon" :fill="colorParse" width="572" height="725" viewBox="0 0 572 725" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="286" cy="331" rx="286" ry="331"/>
                <ellipse cx="294" cy="682" rx="24" ry="54"/>
                <ellipse cx="244.128" cy="664.344" rx="24" ry="54"
                transform="rotate(37.9386 244.128 664.344)"/>
                <ellipse cx="338.989" cy="666.069" rx="24" ry="54"
                transform="rotate(-25.618 338.989 666.069)"/>
            </svg>
        </div>
</template>

<script>
export default {
  name: 'Balloon',
  data() {
    return {
    };
  },
  props: {
    word: String,
    colorParse: String,
  },
  components: {
  },
  methods: {
  },
};
</script>

<style>
    #balloon {
        z-index: 10;
        width: 84px;
        height: 108px;
    }
    #porn {
        top: 50%;
        left: 50%;
    }
    #word {
        color: rgba(19, 12, 12, 0.4);
        top: 30%;
    }
</style>
