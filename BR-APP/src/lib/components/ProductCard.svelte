<script lang="ts">
  import { slide } from "svelte/transition";

  let expanded = false;
  function toggleDetails() {
    expanded = !expanded;
  }
</script>

<div class="container">
  <div class="img-container">img</div>
  <h2 class="title">titulo del producto</h2>
  {#if expanded}
    <div class="product-details" transition:slide>
      <p class="meta">Metadatos del producto</p>
      <button class="expand" onclick={toggleDetails}>ver mas</button>
    </div>
  {:else}
    <div class="product-description" transition:slide>
        <p class="description">Descripcion del producto</p>
        <button class="expand" onclick={toggleDetails}>ver menos</button>
    </div>
  {/if}
</div>

<style>
  .container {
    background-color: var(--glass-foreground-color);
    border-radius: var(--c);
    overflow: hidden;
    height: 60vh;
    display: flex;
    flex-direction: column;
  }
  .img-container {
    background-color: var(--glass-primary-color);
    backdrop-filter: blur(8px);
    min-height: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-details {
    display: flex;
    flex-direction: column;
    
    min-height: 20%;
  }
  .title {
    padding: var(--b);
  }

  .description,
  .meta {
    padding-left: var(--c);
  }
  .description {
    flex-grow: 1;
  }
  .expand {
    all: unset;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
