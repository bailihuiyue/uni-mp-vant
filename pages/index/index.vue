<template>
  <view class="indexpage">
    <uni-tabbar/>
  </view>
</template>

<script>
import common from '@/utils/commonMixin'
import * as api from '@/service/test'

export default {
  mixins: [common],
  data() {
    return {
      title: 'Hello',
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
    },
    onChangeTabbar(val) {
      uni.switchTab({url:'/pages/ITDepartment/index'})
    }
  },
}
</script>

<style lang="scss">
</style>
