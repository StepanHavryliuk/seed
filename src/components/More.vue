<template>
  <div class="exploremore button fp-controlArrow ">
    <div class="left" style="pointer-events: none;">
      <div class="en">FIND OUT MORE</div>
      <div class="cn">了解更多</div>
    </div>
    <div class="right">
      <div class="about-rightarrow"></div>
      <div class="about-arrowtipup"></div>
      <div class="about-arrowtipdown"></div>
    </div>
    <!--arrowgrid-->
    <p id="aboutplus1">+</p>
    <p id="aboutplus2">+</p>
    <p id="aboutplus3">+</p>
    <p id="aboutplus4">+</p>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style  lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  outline: none;
}
.exploremore.button {
  background-color: transparent;
  border: 1px solid #fafafa;
  padding: 32px 13px;
  margin-right: 0;
  width: 318px;
  position: absolute;
  color: #fff;
  right: 2vw;
  bottom: 7%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.2s ease-in;
  }
  .left {
    font-size: 18px;
    width: auto;
    white-space: nowrap;
    margin-left: -145px;
  }
  .about-arrowtipup {
    border-bottom: 2px solid #fafafa;
    margin-top: 1px;
    position: absolute;
    width: 12px;
    transform: rotate(32deg);
    transform-origin: bottom right;
    right: 60px;
    bottom: 30px;
  }
  .about-arrowtipdown {
    border-bottom: 1px solid #fafafa;
    margin-top: 9px;
    position: absolute;
    width: 0%;
    right: 9%;
    transform: rotate(-40deg);
    transform-origin: bottom right;
  }
  .about-rightarrow {
    border-bottom: 2px solid #fafafa;
    margin-top: 25px;
    position: absolute;
    width: 70px;
    right: 60px;
    bottom: 30px;
  }
  .right p {
    color: #fff;
  }
  .left .en {
    cursor: pointer;
    letter-spacing: 3px;
    white-space: nowrap;
    padding-bottom: 5px;
    font-family: "DIN-Light";
    font-size: 14px;
  }
  left .cn {
    font-size: 15px;
    width: auto;
    letter-spacing: 3px;
    white-space: nowrap;
    font-family: "NotoSansCJKsc-Light", sans-serif;
  }
  p#aboutplus1 {
    position: absolute;
    top: 33px;
    left: -7px;
    font-size: 18px;
  }
  p#aboutplus2 {
    position: absolute;
    top: 33px;
    right: -7px;
    font-size: 18px;
  }
  p#aboutplus3 {
    position: absolute;
    bottom: 36px;
    left: -7px;
    font-size: 18px;
  }
  p#aboutplus4 {
    position: absolute;
    bottom: 36px;
    right: -7px;
    font-size: 18px;
  }
}
</style>