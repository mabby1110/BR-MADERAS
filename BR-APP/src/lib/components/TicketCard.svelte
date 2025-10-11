<script>
  import { removeFromTicket, ticket } from "$lib/stores";
  import { scale } from "svelte/transition";

  let { product } = $props();
  let expand = $state(true);
  function removeItemFromTicket(e) {
    e.preventDefault();
    e.stopPropagation();
    removeFromTicket(product.id);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="product-card" class:expand onclick={() => (expand = !expand)}>
  <div class="product-detail">
    <h3 class="product-title">
      {product.title}
    </h3>
    {#if !expand}
      <div class="form-group">
        <textarea
          id="obs-{product.id}"
          placeholder="Notas o requerimientos especiales para este producto."
          transition:scale
        ></textarea>
      </div>
    {:else}
      <p class="comment">presiona para agregar una nota</p>
    {/if}
  </div>
  <div class="product-img">
    <img
      src="/products_media/{product.img_list[0]}"
      alt={product.img_list[0]}
    />
  </div>
  <button class="close-button" onclick={removeItemFromTicket}>x</button>
</div>

<style>
  .product-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    height: 10rem;
    border: 1px var(--border-color) solid;
    margin-bottom: 8px;
  }
  .product-card {
    transition: height 0.3s ease;
  }
  .product-img {
    width: 30%;
  }
  .product-title {
    z-index: 1;
    padding: 8px 0;
  }
  .product-img img {
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
  }
  .product-detail {
    flex-grow: 1;
    padding: 0 8px 8px;
  }
  .form-group {
    flex-grow: 1;
  }

  .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 16px;
    resize: none;
  }
  .close-button {
    all: unset;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 99;
    width: 1rem;
    text-align: center;
    padding: 4px 8px;
    color: black;
    font-weight: bold;
    background-color: rgba(255, 0, 0, 0.6);
    border-radius: 0 0 0 8px;
  }
  .close-button:hover {
    color: black;
  }
  .product-card.expand {
    height: 4rem;
  }
  .comment {
    font-size: smaller;
    color: var(--text-muted);
  }
</style>
