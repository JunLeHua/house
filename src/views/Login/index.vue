<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-arrow
      class="login_title"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="userLogin.username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="userLogin.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          block
          color="#21B97A"
          native-type="submit"
        >登录</van-button>
      </div>
    </van-form>
    <div class="registerA">
      <router-link to="/registe">还没有账号，去注册~</router-link><br>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/login'
export default {
  name: 'Login',
  created () {},
  data () {
    return {
      userLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await loginAPI(this.userLogin)
        this.$store.commit('userToke', res.data.body.token)
        this.$toast.success('登录成功')
      } catch (e) {
        this.$toast.fail('你的账号或者密码异常')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.registerA {
  text-align: center;
  a {
    font-size: 19px;
    color: #666;
  }
}
a {
  background: transparent;
  text-decoration: none;
}
</style>
