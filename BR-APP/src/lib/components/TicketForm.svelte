<script>
  import TicketCard from "./TicketCard.svelte";
  import { ticket } from "$lib/stores";

  function handleSubmit() {
    return true;
  }
</script>

<div class="contact-form glass-by-mabby">
<form on:submit|preventDefault={handleSubmit}>
    <h2 class="form-title">Solicitar Cotización</h2>
    <div class="form-group">
      <label for="nombreCliente">Nombre:</label>
      <input type="text" id="nombreCliente" required />
    </div>
    <div class="form-group">
      <label for="emailCliente">Email de Contacto:</label>
      <input type="email" id="emailCliente" required />
    </div>
    <div class="cart-items">
      {#each $ticket as product}
        <TicketCard {product} />
      {/each}
      {#each $ticket as product}
        <TicketCard {product} />
      {/each}
    </div>
    <button type="submit"> Generar Cotización </button>
  </form>
</div>

<style>
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  .contact-form {
    position: sticky;
    top: 10rem;
    border-radius: 16px;
    max-height: 80vh;
    max-width: 600px;
    width: 100%;
    align-self: center;
    padding: 1rem;
  }
  .contact-form form {
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(2rem, 1fr));
    gap: 1rem;
  }
  .cart-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 10rem;
    gap: 1rem;
    height: 50vh;
    overflow-y: scroll;
  }
  .form-group {
    display: flex;
  }
  .form-group label {
    min-width: 35%;
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

  button {
    all: unset;
    padding: 1rem;
    border-radius: 16px;
    width: fit-content;
    text-align: center;
    justify-self: center;
    background-color: var(--glass-primary-color);
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
