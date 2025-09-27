<script lang="ts">
  import { addUniqueToTicket } from "$lib/stores";
  import { slide } from "svelte/transition";
  let { product } = $props();

  let expanded = $state(false);
  function toggleDetails() {
    expanded = !expanded;
  }
  function handleClick() {
    addUniqueToTicket(product);
  }
</script>

<button class="container glass-by-mabby" onclick={handleClick}>
  <div class="img-container">img</div>
  <h2 class="title">{product.title}</h2>
  {#if expanded}
    <div class="product-details">
      <p in:slide class="meta">Espesor (mm): {product.details.espesorMM}</p>
      <p in:slide class="meta">
        Dimension base: {product.details.dimensionesCM}
      </p>
      <!-- svelte-ignore node_invalid_placement_ssr -->
      <button class="expand" onclick={toggleDetails}>ver menos</button>
    </div>
  {:else}
    <!-- svelte-ignore node_invalid_placement_ssr -->
    <div class="product-description">
      <p in:slide class="description">{product.description}</p>
      <button class="expand" onclick={toggleDetails}>ver mas</button>
    </div>
  {/if}
</button>

<style>
  .container {
    border: none;
    position: relative;
    border-radius: var(--c);
    overflow: hidden;
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 1fr 2fr;
  }
  .img-container {
    background-color: var(--glass-primary-color);
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
    position: absolute;
    bottom: 1rem;
  }
</style>
