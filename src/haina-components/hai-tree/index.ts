import HaiTree from './main.vue'
Object.assign(HaiTree, {
  install(Vue: any){
    Vue.component(HaiTree.name, HaiTree)
  }
})
export default HaiTree
