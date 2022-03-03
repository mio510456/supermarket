<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div class="center">购物车({{length}})</div>
      </template>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import NavBar  from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  import CartList from './childComps/CartList.vue'
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  /* .cart {
    height: 100vh;
  } */

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 10;
  }
</style>
