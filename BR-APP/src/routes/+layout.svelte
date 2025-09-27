<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  import TicketForm from "$lib/components/TicketForm.svelte";
  import PresentationCard from "$lib/components/PresentationCard.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<div class="bg-img">
  <img src="src/lib/assets/logo-br-maderas.jfif" alt="bg-log" />
</div>
<AppActions />
<div class="layout-content">
  <PresentationCard />
  {@render children?.()}
  <footer class="ticket" id="ticket">
    <TicketForm />
  </footer>
</div>

<style>
  .layout-content {
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }
  footer {
    z-index: 99;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .bg-img {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }

  .bg-img img {
    width: 100%;
    height: 50vh;
    object-fit: scale-down;
  }
</style>
