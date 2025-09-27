<script>
  import { removeFromTicket } from "$lib/stores";

  let { product } = $props();
  function removeItemFromTicket(e) {
    e.preventDefault();
    e.stopPropagation();
    removeFromTicket(product.id);
  }
</script>

<div class="product-card">
  <div class="product-img">
    <img src="src/lib/assets/products_media/{product.img_list[0]}" alt="{product.img_list[0]}" />
  </div>
  <h3 class="product-title">
    {product.title}
  </h3>
  <div class="product-detail">
    <div class="form-group">
      <textarea
      id="obs-{product.id}"
      placeholder="Notas o requerimientos especiales para este producto."
      ></textarea>
    </div>
  </div>
  <button class="close-button" onclick={removeItemFromTicket}>x</button>
</div>

<style>
  .product-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .product-img {
    grid-column: 2 / 3;
    grid-row: 1 / 5;
  }
  .product-title {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 1;
    padding: 1rem 0;
  }
  .product-img img {
    width: 30%;
    height: 100%;
    position: absolute;
    z-index: 0;
    object-fit: cover;
  }
  .product-detail {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
  }
  .form-group {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
  }

  .form-group textarea {
    width: 90%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 16px;
    resize: none;
  }
  .close-button {
    all: unset;
    position: absolute;
    right: 0.6rem;
    top: 0.2rem;
    z-index: 99;
    padding: 1rem;
    color: black;
    font-weight: bold;
  }
  .close-button:hover {
    color: black;
  }
</style>
