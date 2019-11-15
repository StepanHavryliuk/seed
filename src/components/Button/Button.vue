<template>
  <div class="leftright button">
    <div class="leftbutton leftarrow fp-controlArrow swiper-button-prev swiper-button-white">
      <div class="leftpageplus1">+</div>
      <div class="leftpageplus2">+</div>
      <div class="leftpageplus3">+</div>
      <div class="leftpageplus4">+</div>
      <div class="leftarrowicon">
        <div class="arrlefttip"></div>
        <div class="arrleftline"></div>
      </div>
    </div>
    <div class="rightbutton rightarrow fp-controlArrow swiper-button-next swiper-button-white">
      <div class="leftpageplus1">+</div>
      <div class="leftpageplus2">+</div>
      <div class="leftpageplus3">+</div>
      <div class="leftpageplus4">+</div>
      <div class="leftarrowicon">
        <div class="arrrighttip"></div>
        <div class="arrleftline"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.leftright.button {
  float: right;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100px;
  z-index: 999999;
  pointer-events: none;
  .leftbutton {
    display: inline-block;
    cursor: pointer;
    height: 57px;
    width: 57px;
    position: relative;
    background-color: transparent;
    border: 1px solid #fafafa;
    padding: 10px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: background-color 0.2s ease-in;
    }
    .leftpageplus1 {
      position: absolute;
      top: -12px;
      left: -6px;
      color: #fff;
    }
    .leftpageplus2 {
      position: absolute;
      top: -12px;
      right: -6px;
      color: #fff;
    }
    .leftpageplus3 {
      position: absolute;
      bottom: -10px;
      left: -6px;
      color: #fff;
    }
    .leftpageplus4 {
      position: absolute;
      bottom: -10px;
      right: -6px;
      color: #fff;
    }
    .leftarrowicon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .arrlefttip {
        transform: rotate(-35deg) translateY(1px);
        transform-origin: bottom left;
        width: 10px;
        border-bottom: 1px solid #fafafa;
      }
      .arrleftline {
        border-bottom: 1px solid #fafafa;
        width: 29px;
      }
    }
  }
  .rightbutton {
    cursor: pointer;
    height: 57px;
    width: 57px;
    position: relative;
    background-color: transparent;
    border: 1px solid #fafafa;
    padding: 10px;
    float: right;
    margin-right: 10px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: background-color 0.2s ease-in;
    }
    .leftpageplus1 {
      position: absolute;
      top: -12px;
      left: -6px;
      color: #fff;
    }
    .leftpageplus2 {
      position: absolute;
      top: -12px;
      right: -6px;
      color: #fff;
    }
    .leftpageplus3 {
      position: absolute;
      bottom: -11px;
      left: -6px;
      color: #fff;
    }
    .leftpageplus4 {
      position: absolute;
      bottom: -11px;
      right: -6px;
      color: #fff;
    }
    .leftarrowicon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .arrrighttip {
        transform: rotate(389deg) translate(17px, -9px);
        transform-origin: bottom right;
        width: 10px;
        border-bottom: 1px solid #fafafa;
      }
      .arrleftline {
        border-bottom: 1px solid #fafafa;
        width: 29px;
      }
    }
  }
}
</style>

