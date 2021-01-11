<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
    uni.login({
      success(res) {
        if (res.code) {
          console.log('登录成功！' + res.code)
          //发起网络请求

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
</style>
