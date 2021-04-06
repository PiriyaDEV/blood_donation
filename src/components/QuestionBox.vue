<template>
  <div id="question-box" class="section">
    <div>
      <h1 v-if="showed == 1 || showed == 2" class="title">
        Have you had any of the following health-related problems in the last 28
        days?
      </h1>

      <h1 v-if="showed == 1" class="descript">
        - A high fever <br />
        - A runny nose or sneezing which is not hay fever related <br />
        - A new dry cough (as meaning new - i.e. you haven’t experienced it
        before) <br />- A sore throat
      </h1>

      <h1 v-if="showed == 2" class="descript">
        - Any new shortness of breath <br />
        - Extreme tiredness <br />
        - Sore/aching muscles and joints <br />
        - A recent loss of taste or loss of sense of smell
      </h1>

      <h1 v-if="showed == 3" class="title">
        If you have experienced any of these symptoms, please do not attend
        session. Please wait for 28 days from the end of your symptoms and then
        make another appointment to donate
      </h1>

      <h1 v-if="showed == 4" class="title">
        Have you or anyone in your household been advised to self-isolate in the
        last 14 days?
      </h1>

      <h1 v-if="showed == 5" class="title">
        If you are/have been in self-isolation or someone in your household is
        in isolation, you must wait until the end of the isolation period before
        coming to donate. Please make sure it is at least 14 days from the first
        day of isolation and you have no symptoms before attending session.
      </h1>

      <h1 v-if="showed == 6" class="title">Please check other criteria</h1>

      <!-- Boy Button -->
      <div v-if="showed == 1" id="button">
        <button id="yes-btn" class="btn" @click="FirstYes()">YES</button>
        <button id="no-btn" class="btn" @click="FirstNo()">NO</button>
      </div>

      <!-- Boy Button 2 -->
      <div v-if="showed == 2" id="button">
        <button id="yes-btn" class="btn" @click="FirstYes()">YES</button>
        <button id="no-btn" class="btn" @click="Second()">NO</button>
      </div>

      <!-- Frame Button -->
      <div v-if="showed == 4" id="button">
        <button id="yes-btn" class="btn" @click="SecondYes()">YES</button>
        <button id="no-btn" class="btn" @click="SecondNo()">NO</button>
      </div>
    </div>
    <img
      v-if="showed == 1 || showed == 2 || showed == 3"
      id="boy"
      src="@/assets/question/boy.png"
    />
    <img
      v-if="showed == 4 || showed == 5"
      id="frame"
      src="@/assets/question/frame.png"
    />
    <img v-if="showed == 6" id="girl" src="@/assets/question/girl.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showed: 1,
    };
  },
  methods: {
    FirstYes() {
      this.showed = 3;
    },
    FirstNo() {
      this.showed = 2;
    },
    Second() {
      this.showed = 4;
    },
    SecondYes() {
      this.showed = 5;
    },
    SecondNo() {
      this.showed = 6;
    },
  },
};
</script>

<style scoped>
#question-box {
  background-color: #534966;
  margin-top: 30px;
  width: 100%;
  padding: 20px 60px 20px 300px;
  margin-bottom: 50px;
  position: relative;
  height: 230px;
}

.title {
  color: #ffffff;
  font-weight: 100;
  font-size: 3em;
  line-height: 1.25em;
  letter-spacing: 1px;
}

.descript {
  color: #ffffff;
  font-weight: 100;
  font-size: 2em;
  line-height: 1.25em;
  padding-left: 30px;
}

.btn {
  color: #ffffff;
  border: none;
  padding: 8px 40px;
  border-radius: 14px;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 100;
}

#no-btn {
  background-color: #f45d73;
  margin-left: 10px;
}

#yes-btn {
  background-color: #a7e583;
  margin-right: 10px;
}

#button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#boy,
#frame,
#girl {
  position: absolute;
  z-index: 3;
  bottom: -14px;
  left: -32px;
}

#boy {
  width: 230px;
}

#frame {
  width: 300px;
}

#girl {
  width: 290px;
}
</style>