<template>
  <div id="page1">
    <div @click="goto">app page1 index</div>
  </div>
</template>
<script>
export default {
  name: "page1Index",
  methods: {
    goto() {
      this.$router.push("/page1-child");
    }
  }
}
</script>

<style lang="scss"></style>
