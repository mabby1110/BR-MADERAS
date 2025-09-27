<script lang="ts">
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { productList } from "$lib/stores";

  let products = $state(productList);
</script>

<div class="page-container" id="start">
  {#each $products as product}
    <ProductCard {product}/>
  {/each}
</div>

<style>
  .page-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: transparent;
  }
</style>
