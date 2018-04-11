<template>
  <div class="home">
    <h1>{{msg}}</h1>
    <el-table :data="tableData" border 
      @header-click="headerClick"
      @header-contextmenu="headerContextmenu"
      height="320" style="width: 720px"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column v-for="(col, index) in tableHeader" :key="index" 
        :prop="col.prop" :label="col.label" :width="col.width" :column-key="index.toString()"
        :sortable="col.sortable" :sort-method="col.sortMethod"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomePage extends Vue {
  // data
  msg: String = 'Welcome'
  tableHeader: Array<object> = [{
    prop: 'name',
    label: '姓名',
    sortable: true,
    sortMethod: this.handleNameSort,
    width: '120'
  }, {
    prop: 'province',
    label: '省份',
    width: '120'
  }, {
    prop: 'city',
    label: '市区',
    width: '120'
  }, {
    prop: 'address',
    label: '地区',
    width: '150'
  }, {
    prop: 'zip',
    label: '邮编',
    width: '120'
  }]
  tableData: Array<object> = [{
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-08',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }]
  handleNameSort () {
    console.log('handleNameSort')
  }
  headerClick (column:any, event:object) {
    this.columnDrag(parseInt(column.columnKey), true)
  }
  headerContextmenu (column:any, event:object) {
    this.columnDrag(parseInt(column.columnKey), false)
  }
  columnDrag (index: number, left: boolean) {
    let tempData = []
    tempData.push(...this.tableHeader)
    if (left) {
      index-1 >= 0 && (tempData[index-1] = this.tableHeader[index], tempData[index] = this.tableHeader[index-1])
    } else {
      index+1 < this.tableHeader.length && (tempData[index+1] = this.tableHeader[index], tempData[index] = this.tableHeader[index+1])
    }
    this.tableHeader = tempData
  }
}
</script>
