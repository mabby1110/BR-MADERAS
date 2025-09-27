<script>
  import { createEventDispatcher } from 'svelte';

  export let producto; // El objeto del producto (id, nombre, precioUnitario, stock, descripcion)
  export let itemCotizacion; // El objeto reactivo de la cotización para este producto (id, cantidad, observaciones)

  const dispatch = createEventDispatcher();

  // Función para forzar la reactividad en el array `cotizacion` de la página padre
  function actualizarCotizacion() {
    dispatch('actualizar', itemCotizacion);
  }
</script>

<div class="product-card">
  <div class="product-img">
    <img src="src/lib/assets/caoba.jpg" alt="" />
  </div>
  <h3 class="product-title">
    {producto.nombre}
  </h3>
  <div class="product-detail">
    <div class="form-group">
      <label for="cantidad-{producto.id}">Cantidad Requerida:</label>
      <input
        type="number"
        id="cantidad-{producto.id}"
        min="0"
        max={producto.stock}
        bind:value={itemCotizacion.cantidad}
        on:change={actualizarCotizacion}
        required
      />
    </div>

    <div class="form-group">
      <label for="obs-{producto.id}">Observaciones:</label>
      <textarea
        id="obs-{producto.id}"
        bind:value={itemCotizacion.observaciones}
        on:change={actualizarCotizacion}
        placeholder="Notas o requerimientos especiales para este producto."
      ></textarea>
    </div>
  </div>
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
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    z-index: 1;
    padding: 1rem;
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
  }
  .form-group label {
    width: 100%;
  }
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="number"],
  .form-group textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>