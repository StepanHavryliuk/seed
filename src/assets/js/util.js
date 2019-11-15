//取消swiper滑动事件
import Vue from 'vue'


export  function cancelSwiper() {
  Vue.EventBus.$emit("stopswiper", true);
}