<template>
  <view class="indexpage">
    <van-button type="default" @click="jump">{{i18n.test}}</van-button>
    <van-tabbar :active="active" @change="onChangeTabbar" active-color="#C71026" placeholder>
      <van-tabbar-item name="home">
        <image slot="icon" :src="`${baseImg}home.png`" mode="aspectFit" class="iconSize" />
        <image
          slot="icon-active"
          :src="`${baseImg}home-active.png`"
          mode="aspectFit"
          class="iconSize"
        />
        {{i18n.index.indexPage}}
      </van-tabbar-item>
      <van-tabbar-item name="department">
        <image slot="icon" :src="`${baseImg}department.png`" mode="aspectFit" class="iconSize" />
        <image
          slot="icon-active"
          :src="`${baseImg}department-active.png`"
          mode="aspectFit"
          class="iconSize"
        />
        {{i18n.index.department}}
      </van-tabbar-item>
      <van-tabbar-item name="cap">
        <image slot="icon" :src="`${baseImg}cap.png`" style="width: 25px;height: 15px;margin:5px 0" />
        <image
          slot="icon-active"
          :src="`${baseImg}cap-active.png`"
          style="width: 25px;height: 25px;"
        />
        {{i18n.index.grow}}
      </van-tabbar-item>
      <van-tabbar-item name="personalCenter">
        <image slot="icon" :src="`${baseImg}personalCenter.png`" class="iconSize" mode="aspectFit" />
        <image
          slot="icon-active"
          :src="`${baseImg}personalCenter-active.png`"
          class="iconSize"
          mode="aspectFit"
        />
        {{i18n.index.personalCenter}}
      </van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import common from "@/utils/commonMixin";
import * as api from "@/service/test";

export default Vue.extend({
  mixins: [common],
  data() {
    return {
      title: "Hello",
      active: 0,
      baseImg: "/static/tabbar-icon/",
    };
  },
  onLoad() {
    api
      .test()
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  },
  methods: {
    jump() {
      uni.redirectTo({
        url: "/pages/about/index",
      });
    },
    onChangeTabbar(val) {
      uni.switchTab({ url: "/pages/ITDepartment/index" });
    },
  },
});
</script>

<style lang="scss">
.indexpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .iconSize {
    width: 25px;
    height: 25px;
  }
}
</style>
