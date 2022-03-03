<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :itemInfo="item"
      ></cart-list-item>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import CartBottomBar from './CartBottomBar.vue'
  export default {
    components: {
      Scroll,
      CartListItem,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px - 40px);
  }
</style>