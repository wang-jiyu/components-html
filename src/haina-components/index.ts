import HaiTree from './hai-tree/index'
let components = [HaiTree]
let install = function (Vue: any, opts: any) {
  components.map(function (component: any) {
    Vue.component(component.name, component)
  })
}
export default install
