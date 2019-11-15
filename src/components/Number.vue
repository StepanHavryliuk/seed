<template>
  <div class="subpagenumber">
    <span class="large">{{`0${now+1}`}}</span> / 06
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["now"]
};
</script>

<style lang="scss"  scoped>
.subpagenumber {
  font-family: "DIN-Regular" !important;
  font-size: 40px;
  letter-spacing: 13px;
  white-space: nowrap;
  color: #fff;
  margin-left: 100px;
  .large {
    font-size: 100px;
  }
}
</style>