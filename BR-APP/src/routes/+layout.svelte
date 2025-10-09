<script lang="ts">
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  import TicketForm from "$lib/components/TicketForm.svelte";
  import PresentationCard from "$lib/components/PresentationCard.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<div class="bg-img">
  <img src="/logo-br-maderas.jfif" alt="bg-log" />
</div>
<AppActions />
<div class="layout-content">
  <nav>
    <PresentationCard />
  </nav>
  {@render children?.()}
  <div class="ticket" id="ticket">
    <TicketForm />
  </div>
  <Footer/>
</div>

<style>
  .layout-content {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    position: relative;
  }
  nav {
    position: sticky;
    margin-top: 50vh;
    top: 1rem;
    z-index: 99;
    padding: 0 8px;
  }
  .ticket {
    z-index: 99;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-bottom: 4rem;
    padding: 0 8px 2rem;
    position: sticky;
    top: 9rem;
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
