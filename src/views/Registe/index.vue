<template>
<div>
     <van-nav-bar
      title="注册"
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
        >注册</van-button>
      </div>
    </van-form>
</div>
</template>

<script>
import { registeredAPI } from '@/api/login'
export default {
  name: 'registe',
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
        await registeredAPI(this.userLogin)
        // console.log(res)
        this.$router.push('/login')
        this.$toast.success('注册成功')
      } catch (e) {
        console.log(e)
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

</style>
