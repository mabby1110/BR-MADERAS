<script lang="ts">
  import {
    addUniqueToTicket,
    isProductInTicket,
    removeFromTicket,
  } from "$lib/stores";
  import { preventDefault } from "svelte/legacy";
  import { slide } from "svelte/transition";
  let { product } = $props();

  let expanded = $state(false);
  let selected = $state(false);
  function toggleDetails(e) {
    e.preventDefault();
    e.stopPropagation();
    expanded = !expanded;
  }
  function handleClick() {
    console.log('selected', isProductInTicket(product));
    if (isProductInTicket(product)) {
      removeFromTicket(product.id);
      selected = false;
    } else {
      addUniqueToTicket(product);
      selected = true;
    }
  }
</script>

<button
  class="container glass-by-mabby  {selected ? 'selected' : ''}"
  onclick={handleClick}
>
  <div class="img-container">
    <img
      src="src/lib/assets/products_media/{product.img_list[0]}"
      alt={product.img_list[0]}
    />
  </div>
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
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 1fr 2fr;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .img-container {
    background-color: var(--glass-primary-color);
    min-height: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: fill;
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
    padding: 0 var(--b);
    text-align: start;
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
  .selected {
    border: 1px solid rgb(0, 0, 0);
  }
</style>
