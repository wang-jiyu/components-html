<template>
  <div class="hai-table" :class="{'hai-table_moving': dragState.dragging}">
    <el-table :data="data" 
      :border="option.border" 
      :height="option.height" 
      :max-height="option.maxHeight" 
      :size="option.size"
      :stripe="option.stripe"
      :style="{ width: parseInt(option.width)+'px' }"
      :highlight-current-row="option.highlightCurrentRow"
      :row-class-name="option.rowClassName"
      :row-style="option.RowStyle"
      :empty-text="option.emptyText"
      :current-row-key="option.currentRowKey"
      :cell-class-name="option.cellClassName" 
      :cell-style="option.cellStyle" 
      :header-row-class-name="option.headerRowClassName" 
      :header-row-style="option.headerRowStyle"
      :header-cell-style="option.headerCellStyle"

      :header-cell-class-name="headerCellClassName"
    >
      <slot name="fixed"></slot>
      <el-table-column v-for="(col, index) in tableHeader" :key="index"
        :prop="col.prop" 
        :label="col.label" 
        :width="col.width" 
        :min-width="col.minWidth"
        :show-overflow-tooltip="col.showOverflowTooltip"
        :type="col.type"
        :resizable="col.resizable" 
        :align="col.align"
        :header-align="col.headerAlign"
        :column-key="index.toString()"
        :sortable="col.sortable"
        :sort-method="col.sortMethod" 
        :label-class-name="col.labelClassName" 
        :render-header="renderHeader"
      >
      </el-table-column>
    </el-table>
  </div>  
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({})
export default class HaiTable extends Vue {
  @Prop({ 
    default: function() {
      return [];
    },
    type: Array 
  })
  data: Array<object | undefined>

  @Prop({ 
    default: function() {
      return [];
    },
    type: Array 
  })
  header: Array<object | undefined>

  tableHeader: Array<object | undefined> = this.header

  @Prop()
  option: object

  renderHeader(createElement: Function, {column}:any) {
    return createElement(
      'div', {
        'class': ['thead-cell'],
        on: {
          mousedown: ($event: object) => { this.handleMouseDown($event, column) },
          mouseup: ($event: object) => { this.handleMouseUp($event, column) },
          mousemove: ($event: object) => { this.handleMouseMove($event, column) }
        }
      }, [
        createElement('a', column.label),
        createElement('span', {
          'class': ['virtual'],
          'ref':'virtual'
        })
      ])
  }
  dragState:any = {
    start: -1,
    end: -1,
    move: -1,
    dragging: false,
    direction: undefined
  }

  handleMouseDown(e: any, column: any) {
    this.dragState.dragging = true
      this.dragState.start = parseInt(column.columnKey)
      // 给拖动时的虚拟容器添加高度
      let table = document.getElementsByClassName('hai-table')[0]
      let virtual = document.getElementsByClassName('virtual') as any
      for (let item of virtual) {
        item.style.height = table.clientHeight - 1 + 'px'
        item.style.width = item.parentElement.parentElement.clientWidth + 'px'
      }
  }
  
  handleMouseUp (e: any, column: any) {
    this.dragState.end = parseInt(column.columnKey) // 记录起始列
    this.columnDrag(this.dragState)
    // 初始化拖动状态
    this.dragState = {
      start: -1,
      end: -1,
      move: -1,
      dragging: false,
      direction: undefined
    }
  }
  
  // 拖动中
  handleMouseMove (e: any, column: any) {
    if (this.dragState.dragging) {
      let index = parseInt(column.columnKey) // 记录起始列
      if (index - this.dragState.start !== 0) {
        this.dragState.direction = index - this.dragState.start < 0 ? 'left' : 'right' // 判断拖动方向
        this.dragState.move = parseInt(column.columnKey)
      } else {
        this.dragState.direction = undefined
      }
    } else {
      return false
    }
  }
  
  // 拖动易位
  columnDrag ({start, end, direction}:any) {
    let tempData = []
    let left = direction === 'left'
    let min = left ? end : start-1
    let max = left ? start+1 : end
    for(let i=0; i<this.tableHeader.length; i++) {
      if (i == end) {
        tempData.push(this.tableHeader[start])
      } else if (i > min && i < max) {
        tempData.push(this.tableHeader[left ? i-1 : i+1])
      } else {
        tempData.push(this.tableHeader[i])
      }
    }
    this.tableHeader = tempData
  } 

  headerCellClassName ({column, columnIndex}:any) {
    return (columnIndex - 1 === this.dragState.move ? `darg_active_${this.dragState.direction}` : '')
  }

  @Watch('header')
    onTableHeaderChanged(val: Array<object | undefined>, oldVal: Array<object | undefined>) {
    this.tableHeader = val
  }
}
</script>

<style lang="scss">
@import '../../styles/var.scss';
.hai-table {
  .el-table th {
    padding: 0;
    .virtual{
      position: fixed;
      display: block;
      width: 0;
      height: 0;
      margin-left: -10px;
      z-index: 99;
      background: none;
      border: none;
    }
    &.darg_active_left {
      .virtual {
        border-left: 2px dotted #666;
      }
    }
    &.darg_active_right {
      .virtual {
        border-right: 2px dotted #666;
      }
    }
  }
  .thead-cell {
    padding: 0;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: left;
    -ms-flex-align: left;
    align-items: left;
    cursor: pointer;
    overflow: initial;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &.hai-table_moving {
    .el-table th .thead-cell{
      cursor: move !important;
    }
    .el-table__fixed {
      cursor: not-allowed;
    }
  }
}
</style>
