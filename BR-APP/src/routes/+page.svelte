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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
</style>