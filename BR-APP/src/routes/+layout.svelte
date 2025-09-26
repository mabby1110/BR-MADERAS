<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<AppActions />
<div class="layout-content">
  <div class="space-jam">
    <h1>Axel E. Barba Bautista</h1>
  </div>
  <nav>
    <p>nav</p>
  </nav>
  {@render children?.()}
  <div class="contacto">
    <footer>
      <p>Formulario de cotizacion y carrito</p>
      <p>Contacto</p>
    </footer>
    </div>
</div>

<style>
  .layout-content {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .space-jam {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .space-jam h1 {
    font-weight: lighter;
  }
  nav {
    z-index: 99;
    height: 5rem;
    background-color: rgba(137, 43, 226, 0.242);
    position: sticky;
    top: 0;
  }
  .contacto {
    z-index: 99;
    height: 30vh;
  }

</style>
