import HaiTree from './hai-tree/index'
import HaiTable from './hai-table/index'
let components = [HaiTree, HaiTable]
let install = function (Vue: any, opts: any) {
  components.map(function (component: any) {
    Vue.component(component.name, component)
  })
}
export default install
