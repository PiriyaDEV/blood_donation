<template>
  <div id="footer">
    <div class="gradient-red" id="spacer">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  margin-top: 80px;
}

.gradient-red {
  background: rgb(252, 130, 99);
  background: linear-gradient(
    90deg,
    rgba(252, 130, 99, 1) 0%,
    rgba(253, 85, 86, 1) 100%
  );
}

#spacer{
    padding-bottom: 50px;
}
</style>