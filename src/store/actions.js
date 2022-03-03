import {ADD_COUNTER, ADD_TO_CART} from './mutation-type'
export default{
  addCart(context, payload) {
    // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    return new Promise((resolve, reject) => {
      
      // 1 查看之前数组中是否有该商品 
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      // 2 判断oldProduct
      if (oldProduct) { // 数量+1
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else { //添加新的商品
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}