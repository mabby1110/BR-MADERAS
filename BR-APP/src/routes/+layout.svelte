<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  let { children } = $props();

  let spaceJamElement: HTMLDivElement;
  let observer: IntersectionObserver;
  let showNav = $state(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      // entry.isIntersecting es true si el elemento está visible (intersectando)
      if (entry.isIntersecting) {
        showNav = true;
        console.log("👋 El elemento hero está visible en la pantalla."); // Aquí puedes poner la lógica para cuando ENTRA en la pantalla
      } else {
        showNav = false;
        console.log("🚀 El elemento hero HA SALIDO de la pantalla."); // Aquí pones la lógica para cuando SALE de la pantalla
      }
    });
  };
  onMount(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    };

    observer = new IntersectionObserver(handleIntersection, options); // Observar el elemento

    if (spaceJamElement) {
      observer.observe(spaceJamElement);
    }
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<div class="bg-img">
  <img src="src/lib/assets/logo-br-maderas.jfif" alt="bg-log" />
</div>
<AppActions />
<div class="layout-content">
  <div class="hero glass-by-mabby">
    <h1>Axel E. Barba Bautista</h1>
    <p>Deslisa para explorar el catalogo</p>
  </div>
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
    background-color: transparent;
  }
  .hero {
    margin-top: 50vh;
    padding: 1rem;
    max-width: 600px;
    width: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 99;
  }
  nav {
    z-index: 99;
    background-color: transparent;
    position: fixed;
    top: 1rem;
    left: 1rem;
    border-radius: 32px;
    display: flex;
    overflow: hidden;
  }
  .nav-logo {
    object-fit: contain;
    height: 8rem;
    background-color: transparent;
  }
  .nav-logo img {
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
  .contacto {
    z-index: 99;
    height: 30vh;
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
