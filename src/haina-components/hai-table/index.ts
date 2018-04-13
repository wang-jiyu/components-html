import HaiTable from './main.vue'
Object.assign(HaiTable, {
  install(Vue: any){
    Vue.component(HaiTable.name, HaiTable)
  }
})
export default HaiTable
