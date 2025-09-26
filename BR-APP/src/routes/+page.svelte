<script lang="ts">
  import ProductCard from "$lib/components/ProductCard.svelte";
</script>

<div class="page-container">
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>

<style>
  .page-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
