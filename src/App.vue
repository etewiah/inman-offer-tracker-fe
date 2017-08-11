<template>
  <span>
    <div class="row red darken-4 center" style="padding: 20px 0px">
      <img v-if="$route.path === '/login'" id="hacker-connect" src="https://inmannews-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/logo_light11.png" height="80px">
      <h2 class="white-text no-margin">OFFER TRACKER</h2>
      <router-link to="/">
        <i id="logout" v-if="$route.path === '/agent'" v-on:click="logout()" class="material-icons white-text xx-large pointer" style="position: absolute;right: 30px;top: 30px;">exit_to_app</i>
      </router-link>
      <router-link to="/agent">
        <i id="back" v-if="$route.path.startsWith('/offer')" v-on:click="back()" class="material-icons white-text xx-large pointer" style="position: absolute;left: 30px;top: 30px;">arrow_back</i>
      </router-link>
    </div>
    <router-view></router-view>
  </span>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },

      back() {
        this.$store.dispatch('agent')
      }
    }
  }
</script>



