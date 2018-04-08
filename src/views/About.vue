<template>
  <div class="about">
    <h1>{{title}}</h1>
    <ul>
      <hai-tree :tree="item" v-for="item in tree" :key="item.label"></hai-tree>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AboutPage extends Vue{
  title: String = 'About Page'
  tree: Array<object> = [
    {
      label: 'A 1',
      children: [
        {
          label: 'B 1-1',
          children: [
            {label: 'C 1-1-1'}
          ]
        }
      ]
    },
    {
      label: 'A 2',
      children: [
        {
          label: 'B 2-1',
          children: [
            {label: 'C 2-1-1'}
          ]
        }
      ]
    }
  ]
}
</script>
