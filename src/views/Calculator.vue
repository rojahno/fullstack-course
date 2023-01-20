<template>
  <div id="calculator">
    <div id="answer-window">{{ display_text }}</div>
    <div id="button-grid">
      <button class="character-button" @click="delete_all_characters()">
        C
      </button>
      <button class="character-button" @click="show_last_answer()">ANS</button>
      <button class="character-button" @click="delete_last_character()">
        DEL
      </button>
      <button class="symbol-button" @click="add_to_answer('+')">+</button>

      <button class="number-button" @click="add_to_answer('1')">1</button>
      <button class="number-button" @click="add_to_answer('2')">2</button>
      <button class="number-button" @click="add_to_answer('3')">3</button>
      <button class="symbol-button" @click="add_to_answer('-')">-</button>

      <button class="number-button" @click="add_to_answer('4')">4</button>
      <button class="number-button" @click="add_to_answer('5')">5</button>
      <button class="number-button" @click="add_to_answer('6')">6</button>
      <button class="symbol-button" @click="add_to_answer('*')">*</button>

      <button class="number-button" @click="add_to_answer('7')">7</button>
      <button class="number-button" @click="add_to_answer('8')">8</button>
      <button class="number-button" @click="add_to_answer('9')">9</button>
      <button class="symbol-button" @click="add_to_answer('/')">/</button>

      <button class="number-button"></button>
      <button class="number-button" @click="add_to_answer('0')">0</button>
      <button class="number-button" @click="add_to_answer('.')">.</button>
      <button class="symbol-button" @click="calculate_answer()">=</button>
    </div>
  </div>

  <div id="log">
    <h2>Log</h2>
    <ul>
      <li v-for="answer in answers" :key="answer">{{ answer }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      display_text: "0",
      answer: "",
      last_answer: "",
      showing_last_answer: false,
      first_number: true,
      answers: [] as string[],
    };
  },
  methods: {
    add_to_answer(value: string) {
      if (this.first_number) {
        this.display_text = "";
        this.first_number = false;
      }
      if (this.showing_last_answer) {
        this.display_text = "";
        this.showing_last_answer = false;
        this.display_text += this.last_answer + value;
        return;
      }
      this.display_text += value;
    },
    calculate_answer() {
      try {
        let answer = eval(this.display_text);
        let logString = this.display_text + " = " + answer;
        this.last_answer = answer;
        this.display_text = answer;
        this.showing_last_answer = true;
        this.answers.push(logString);
      } catch {
        this.display_text = "Error";
      }
    },
    delete_last_character() {
      if (this.display_text.length == 1) {
        this.display_text = "0";
      } else {
        this.display_text = this.display_text.slice(0, -1);
      }
    },
    delete_all_characters() {
      this.display_text = "0";
      this.first_number = true;
    },
    show_last_answer() {
      if (this.last_answer == "") return;

      this.display_text = this.last_answer;
      this.showing_last_answer = true;
    },
  },
};
</script>

<style scoped>
#calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
  width: 330px;
  height: 400px;
  background-color: #3c3c3c;
  padding: 1rem;
}
#answer-window {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 2em;
  border-radius: 1em;
  background-color: #505050;
  color: #fff;
  overflow: hidden;
}
#button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.2rem;
  width: 100%;
  height: 100%;
  background-color: #505050;
  margin: 1em;
}
.symbol-button {
  background-color: #ff9500;
  color: #d4d4d2;
  font-size: 1em;
  font-weight: bold;
  border-radius: 1px;
  border: none;
}
.number-button {
  background-color: #d4d4d2;
  color: #000;
  border-radius: 1px;
  border: none;
}
.character-button {
  background-color: #d4d4d280;
  color: #000;
  border-radius: 1px;
  border: none;
}
#log {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
  width: 330px;
  height: 400px;
  background-color: #3c3c3c;
  overflow: auto;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  color: #fff;
  font-size: 1.5em;
  margin: 0.5em;
}

@media (max-width: 480px) {
  #calculator {
    width: 380px;
    height: 450px;
  }
  #log {
    width: 380px;
    height: 450px;
  }
}
</style>
