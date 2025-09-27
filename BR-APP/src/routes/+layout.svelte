<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppActions from "../lib/components/AppActions.svelte";
  import "$lib/global.css";
  import ContactForm from "$lib/components/ContactForm.svelte";
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
  <PresentationCard/>
  {@render children?.()}
  <footer>
    <div class="ticket">
      <ContactForm />
    </div>
  </footer>
</div>

<style>
  .layout-content {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }
  nav {
    z-index: 99;
    background-color: transparent;
    position: fixed;
    padding-top: 6rem;
    top: 1rem;
    left: 1rem;
    border-radius: 32px;
    display: flex;
    overflow: hidden;
  }
  .nav-logo {
    object-fit: contain;
    height: 8rem;
  }
  .nav-logo img {
    height: 100%;
    width: 100%;
  }
  footer {
    z-index: 99;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .ticket {
    overflow: hidden;
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 10rem;
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
