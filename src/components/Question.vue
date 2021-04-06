<template>
  <div class="section">
    <div class="page-container">
      <div>
        <h1 id="title" class="center">
          We need you to keep donating blood and platelets <br />
          during the pandemic
        </h1>
        <h1 id="descript" class="center">
          To make donating as safe as possible for everyone
        </h1>

        <div class="section">
          <QuestionBox></QuestionBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionBox from "@/components/QuestionBox.vue";
export default {
  components: {
    QuestionBox,
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

#title {
  color: #3d3d3d;
  font-weight: 100;
  font-size: 4em;
  line-height: 1em;
}

#descript {
  color: #666666;
  font-weight: 100;
  font-size: 2.5em;
  line-height: 1em;
}
</style>