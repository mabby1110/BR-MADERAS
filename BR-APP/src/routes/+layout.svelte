<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="layout-content">
  <AppActions />
  {@render children?.()}
</div>

<style>
  .layout-content {
    position: relative;
	height: 100vh;
  }
</style>
