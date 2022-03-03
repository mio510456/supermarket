<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :key="index" 
    @click="itemClick(index)"
    :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
}
</script>

<style>
  .tab-control {
    height: 40px;
    line-height: 40px;
    display: flex;
    text-align: center;
    background-color: #fff;
    font-size: 16px;
    z-index: 10;
  }
  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
    padding: 4px;
  }
</style>