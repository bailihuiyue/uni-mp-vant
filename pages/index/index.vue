<template>
  <view class="content">
    <van-button type="default" @click="jump">{{i18n}}</van-button>
  </view>
</template>

<script>
import common from '@/utils/commonMixin'
import * as api from '@/service/test'

export default {
  mixins: [common],
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    api.test()
      .then(res => {
        console.log(res)
      })
      .catch(res => console.log(res))
  },
  methods: {
    jump() {
      uni.redirectTo({
        url: '/pages/about/index'
      });
    }
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
