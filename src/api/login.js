import request from '@/utils/request'
// 登录
export const loginAPI = data => request({
  url: '/user/login',
  method: 'POST',
  data
})
// 注册
export const registeredAPI = data => request({
  url: '/user/registered',
  method: 'POST',
  data
})
