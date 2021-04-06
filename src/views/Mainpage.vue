<template>
  <div>
    <Navbar></Navbar>

    <Home></Home>

    <CovidImpact></CovidImpact>

    <Question></Question>

    <Result></Result>

    <Vaccine></Vaccine>

    <Donation></Donation>

    <Pludge></Pludge>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import CovidImpact from "@/components/CovidImpact.vue";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";
import Vaccine from "@/components/Vaccine.vue";
import Donation from "@/components/Donation.vue";
import Pludge from "@/components/Pludge.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Mainpage",
  components: {
    Navbar,
    Home,
    CovidImpact,
    Question,
    Result,
    Vaccine,
    Donation,
    Pludge,
    Footer
  },
};
</script>

<style scoped>
</style>