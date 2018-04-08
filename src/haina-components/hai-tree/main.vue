<template>
  <li>
    <a>{{tree.label}}</a>
    <ul>
      <hai-tree v-if="tree.children" :tree="item" v-for="item in tree.children" :key="item.label"></hai-tree>
    </ul>
  </li>  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class HaiTree extends Vue {
  @Prop()
  tree: Object
}
</script>