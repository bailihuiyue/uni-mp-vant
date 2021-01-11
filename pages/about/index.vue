<template>
  <view class="content">
    <van-button type="primary" @click="jump">主要按钮</van-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {
    jump() {
      console.log(123)
      uni.redirectTo({
        url: '/pages/index/index'
      });
    }
  },
  computed: {
    i18n() {
      return this.$t('test')
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
