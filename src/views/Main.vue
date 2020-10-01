<template>
    <div class="flex flex-col justify-between h-screen">
        <div id="box" class="border-4 border-orange-900 flex-col h-full
        gap-2 relative justify-between max-w-6xl m-auto">
            <div class="flex flex-row items-start">
                <div id="redCheck" class="h-24 w-full bg-red-500">
                    <p class="text-red-800 text-center
                    my-auto font-medium p-2 select-none">
                        &nbsp;
                    </p>
                </div>
                <div id="blueCheck" class="h-24 w-full bg-blue-600">
                    <p class="text-blue-900 text-center
                    my-auto font-medium p-2 select-none">
                        &nbsp;
                    </p>
                </div>
                <div id="greenCheck" class="h-24 w-full bg-green-500">
                    <p class="text-green-900 text-center
                    my-auto font-medium p-2 select-none">
                        &nbsp;
                    </p>
                </div>
                <div id="yellowCheck" class="h-24 w-full bg-yellow-400">
                    <p class="text-yellow-700 text-center
                    my-auto font-medium p-2 select-none">
                        &nbsp;
                    </p>
                </div>
            </div>
            <div id="balloons" class="p-2 overflow-hidden relative w-full h-full">
                    <Balloon
                        :id="balloon.balloonId"
                        class="floating-balloon"
                        :colorParse="balloon.colorId"
                        v-for="balloon in activeBalloons"
                        :key="balloon.balloonId"
                        :word="balloon.wordId"
                        :colorCode="balloon.textId"
                    />
            </div>
        </div>
        <div id="controls" class="flex flex-row gap-1 flex-grow items-center container mx-auto">
            <a href="#" class="bg-alphacamp text-white text-xl lg:text-4xl md:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto font-medium flex-shrink font-gotham
            font-bold"
            @click="startGame">
                Play Now
            </a>
            <p class="bg-alphacamp text-white text-xl md:text-4xl lg:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto flex-shrink font-gotham
            font-bold">
                Score: {{ score }}
            </p>
            <p class="bg-alphacamp text-white text-xl lg:text-4xl md:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto flex-shrink font-gotham
            font-bold">
                Time: {{ timer.time }}
            </p>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable import/no-cycle */
import axios from 'axios';
import Balloon from '@/components/Balloon.vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import router from '../router';

const wordBlue = 'BLUE';
const wordRed = 'RED';
const wordGreen = 'GREEN';
const wordYellow = 'YELLOW';

const colorBlue = 'fill-current blueCheck flex-none';
const colorRed = 'fill-current redCheck flex-none';
const colorGreen = 'fill-current greenCheck flex-none';
const colorYellow = 'fill-current yellowCheck flex-none';

export default {
  name: 'Main',
  components: {
    Balloon,
  },
  data() {
    return {
      activeBalloons: [],
      board: '',
      balloonId: 0,
      timer: {
        balloonMaker: '',
        instance: '',
        time: 60,
      },
      score: 0,
    };
  },
  methods: {
    goLeaderboard() {
      router.push('score');
    },
    randomId() {
      // eslint-disable-next-line prefer-const
      let ids = [];
      while (ids.length < 1) {
        const r = Math.floor(Math.random() * 4) + 1;
        if (ids.indexOf(r) === -1) ids.push(r);
      }
      return ids[0];
    },
    async createBalloon() {
      const wordId = this.randomId();
      const colorId = this.randomId();
      const boxSize = document.querySelector('#balloons').getBoundingClientRect().right - 100;
      const position = Math.random() * boxSize;
      const parent = this;
      const balloonObj = {
        colorId: this.colorIdParse(colorId),
        wordId: this.wordIdParse(wordId),
        balloonId: this.balloonId,
        textId: colorId,
      };
      await this.activeBalloons.push(balloonObj);
      this.board = await this.$el.querySelectorAll('.floating-balloon');
      this.balloonId += 1;
      const balloon = await document.getElementById(`${balloonObj.balloonId}`);
      await Draggable.create(balloon, {
        type: 'x,y',
        onDrag() {
          parent.hitTester(balloonObj, balloon);
        },
        onRelease() {
          gsap.to(balloon, {
            y: -2000,
            duration: 28,
            onUpdate: this.hitTester,
            onUpdateParams: [balloonObj, balloon],
          });
        },
      });
      balloon.style.left = `${position}px`;
      balloon.style.top = '70%';
      gsap.to(balloon, {
        y: -2000,
        duration: 28,
        onUpdate: this.hitTester,
        onUpdateParams: [balloonObj, balloon],
      });
    },
    hitTester(balloonObj, balloon) {
      console.log('PLAYED');
      if (Draggable.hitTest(balloon, '#redCheck', 5)) {
        console.log('HELLO RED');
        if (balloonObj.wordId == 'RED') {
          console.log('SCORED RED');
          this.score += 100;
        }
        balloon.parentNode.removeChild(balloon);
      }
      if (Draggable.hitTest(balloon, '#blueCheck', 5)) {
        if (balloonObj.wordId == 'BLUE') {
          console.log('HELLO BLUE');
          this.score += 100;
        }
        balloon.parentNode.removeChild(balloon);
      }
      if (Draggable.hitTest(balloon, '#greenCheck', 5)) {
        console.log('HELLO GREEN');
        if (balloonObj.wordId == 'GREEN') {
          this.score += 100;
        }
        balloon.parentNode.removeChild(balloon);
      }
      if (Draggable.hitTest(balloon, '#yellowCheck', 5)) {
        console.log('HELLO YELLOW');
        if (balloonObj.wordId == 'YELLOW') {
          this.score += 100;
        }
        balloon.parentNode.removeChild(balloon);
      }
    },
    startGame() {
      this.startTimer();
      this.startMaker();
    },
    startTimer() {
      clearInterval(this.timer.instance);
      this.timer.time = 60;
      this.timer.instance = setInterval(async () => {
        this.timer.time -= 1;
        if (this.timer.time <= 0) {
          clearInterval(this.timer.balloonMaker);
          clearInterval(this.timer.instance);
          this.sendScore(this.score);
          this.$store.commit('setScore', this.score);
          this.goLeaderboard();
        }
      }, 1000);
    },
    async sendScore(score) {
      axios.post('https://alphacamp-wc-cme.com/api/get_user.php', {
        uid: this.$store.state.userId,
        game_id: 2,
        score,
      }).then((response) => {
        console.log(response);
      });
    },
    startMaker() {
      clearInterval(this.timer.balloonMaker);
      this.timer.balloonMaker = setInterval(() => {
        this.createBalloon();
      }, 800);
    },
    // eslint-disable-next-line consistent-return
    wordIdParse(colorId) {
      console.log(colorId);
      switch (colorId) {
        default:
          return 'RED';
        case 2:
          return 'RED';
        case 1:
          return 'BLUE';
        case 3:
          return 'GREEN';
        case 4:
          return 'YELLOW';
      }
    },
    // eslint-disable-next-line consistent-return
    colorIdParse(colorId) {
      if (colorId === 1) {
        return '#391994';
      } if (colorId === 2) {
        return 'red';
      } if (colorId === 3) {
        return 'green';
      } if (colorId === 4) {
        return 'yellow';
      }
    },
  },
  mounted() {
    gsap.registerPlugin(Draggable);
    this.board = this.$el.querySelectorAll('.floating-balloon');
  },
};
</script>

<style scoped>
    #play {
        height: 3rem;
        width: 3rem;
    }
    #box {
        height: 80vh;
        width: 100vw;
    }
    .floating-balloon {
        position: absolute;
        top: 22rem;
    }
    #balloons {
        height: 70vh;
    }
    .bg-alphacamp {
        background-color: #6D3B00;
    }
    #blueCheck {
        background-color: #391994;
    }
    #redCheck {
        background-color: #FF0000;
    }
    #greenCheck {
        background-color: green;
    }
    #yellowCheck {
        background-color: yellow;
    }
    .blueCheck {
        fill: #391994;
    }
    .redCheck {
        fill: #FF0000;
    }
    .greenCheck {
        fill: green;
    }
    .yellowCheck {
        fill: yellow;
    }
    @font-face {
      font-family: GothamMedium;
      src: url('../assets/font/gotham-score.otf');
    }
    .font-gotham {
      font-family: GothamMedium;
    }
</style>
