<template>
    <div class="flex flex-col justify-between h-screen">
        <div id="box" class="border-t-4 border-b-4 border-orange-900 flex-col h-full
        gap-2 relative justify-between">
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
                    />
            </div>
        </div>
        <div id="controls" class="flex flex-row gap-1 flex-grow items-center container mx-auto">
            <a href="#" class="bg-alphacamp text-white text-xl lg:text-4xl md:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto font-medium flex-shrink"
            @click="startGame">
                Play Now
            </a>
            <p class="bg-alphacamp text-white text-xl md:text-4xl lg:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto flex-shrink">
                Score: {{ score }}
            </p>
            <p class="bg-alphacamp text-white text-xl lg:text-4xl md:text-4xl flex-grow
            text-center h-20 p-3 select-none my-auto flex-shrink">
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
      router.push('leaderboard');
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
      const position = Math.random() * document.querySelector('#box').getBoundingClientRect().right;
      const parent = this;
      const balloonObj = {
        colorId: this.colorIdParse(colorId),
        wordId: this.wordIdParse(wordId),
        balloonId: this.balloonId,
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
        onDragEnd() {
          parent.hitTester(balloonObj, balloon);
        },
      });
      balloon.style.left = `${position}px`;
      balloon.style.top = '70%';
      balloon.timeline = gsap.timeline({
        onComplete: this.hitTester,
        onCompleteParams: [balloonObj, balloon],
      });
      balloon.timeline.to(balloon, {
        y: -460,
        duration: 5,
      });
      // eslint-disable-next-line no-restricted-globals
    },
    hitTester(balloonObj, balloon) {
      console.log('PLAYED');
      if (Draggable.hitTest(balloon, '#redCheck')) {
        console.log('HELLO RED');
        if (balloonObj.wordId == 'RED') {
          console.log('SCORED RED');
          this.score += 1;
        }
        this.activeBalloons.splice(balloonObj.id, 1);
      }
      if (Draggable.hitTest(balloon, '#blueCheck')) {
        if (balloonObj.wordId == 'BLUE') {
          console.log('HELLO BLUE');
          this.score += 1;
        }
        this.activeBalloons.splice(balloonObj.id, 1);
      }
      if (Draggable.hitTest(balloon, '#greenCheck')) {
        console.log('HELLO GREEN');
        if (balloonObj.wordId == 'GREEN') {
          this.score += 1;
        }
        this.activeBalloons.splice(balloonObj.id, 1);
      }
      if (Draggable.hitTest(balloon, '#yellowCheck')) {
        console.log('HELLO YELLOW');
        if (balloonObj.wordId == 'YELLOW') {
          this.score += 1;
        }
        this.activeBalloons.splice(balloonObj.id, 1);
      }
    },
    startGame() {
      this.startTimer();
      this.startMaker();
    },
    startTimer() {
      clearInterval(this.timer.instance);
      this.timer.time = 60;
      this.timer.instance = setInterval(() => {
        this.timer.time -= 1;
        if (this.timer.time <= 0) {
          clearInterval(this.timer.balloonMaker);
          clearInterval(this.timer.instance);
          this.$store.commit('setScore', this.score);
          this.goLeaderboard();
        }
      }, 1000);
    },
    startMaker() {
      clearInterval(this.timer.balloonMaker);
      this.timer.balloonMaker = setInterval(() => {
        this.createBalloon();
      }, 500);
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
        height: 60vh;
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
</style>