<template>
  <router-view />
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    lbzfChangeModeHandler,
    lbzfIsDarkModeEnabled,
    lbzfSetModeAttributes,
    lbzfSupportsCssVariables
  } from '@lbzui/vue/src/utils/funcs'

  export default Vue.extend({
    name: 'App',

    data: () => ({
      supportsCssVars: lbzfSupportsCssVariables()
    }),

    created(): void {
      if (this.supportsCssVars) {
        this.setTheme()
        lbzfChangeModeHandler(this.setTheme)
      }
    },

    methods: {
      setTheme(): void {
        const isDark: boolean = lbzfIsDarkModeEnabled()

        lbzfSetModeAttributes(isDark, {
          light: '#e10707',
          dark: '#000'
        })
      }
    }
  })
</script>

<style lang="less">
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, 'PingFang SC', 'Microsoft YaHei UI',
      'Microsoft YaHei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
