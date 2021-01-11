const BASE_URL = 'http://localhost:8082/'; //开发时使用本地接口，在上线时只需要修改此处接口为线上地址即可

export default (options) => {
  //传入的options是一个json对象
  const header = {};
  header['token'] = uni.getStorageSync('token') || ''; // 让每个请求携带自定义 token 请根据实际情况自行修改
  header['username'] = uni.getStorageSync('userinfo')?.username || ''; // 让每个请求携带自定义 token 请根据实际情况自行修改
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.methods || 'GET',
      data: options.data || {},
      header,
      dataType: options.dataType || 'json',
      success: (res) => {
        if (res.data.status === 200) {
          return resolve(res.data.data);
        } else {
          uni.showToast({
            title: res.data.enMsg,
          });
          return reject(false);
        }
      },
      fail: (error) => {
        const msg = error.message;
        const result = error.response;
        if (result) {
          const { data } = result;
          uni.showToast({
            title: data.msg || `${data.status}: ${data.enMsg}`,
          });
        } else if (msg) {
          if (msg === 'Network Error') {
            uni.showToast({
              title: 'Network Error',
            });
          } else {
            uni.showToast({
              title: msg,
            });
          }
        } else {
          uni.showToast({
            title: '未知错误,请重试!',
          });
        }
        return reject(error);
      },
    });
  });
};
