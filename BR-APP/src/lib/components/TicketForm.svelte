<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import TicketCard from "./TicketCard.svelte";
  import { ticket } from "$lib/stores";

  interface Producto {
    id: string;
    nombre: string;
    cantidad: number;
    [key: string]: any;
  }

  $: isTicketEmpty = $ticket.length === 0;

  $: ticketData = JSON.stringify($ticket);

  const handleSubmit: SubmitFunction = ({ form }) => {
    alert("click?");
    const formData = new FormData(form);

    return async ({ update }) => {
      await update({ reset: false, invalidateAll: true });
    };
  };
</script>

<div class="contact-form glass-by-mabby">
  <form method="POST" action="/api" use:enhance={handleSubmit}>
    <input type="text" name="ticketData" id="ticket-data" hidden bind:value={ticketData}>
    <div class="contact-data">
      <h2 class="form-title">Solicitar Cotización</h2>

      <div class="form-group">
        <label for="nombreCliente">Nombre:</label>
        <input type="text" id="nombreCliente" name="nombreCliente" required />
      </div>
      <div class="form-group">
        <label for="emailCliente">Email de Contacto:</label>
        <input type="email" id="emailCliente" name="emailCliente" required />
      </div>
      <!-- Nuevo campo de teléfono -->
      <div class="form-group">
        <label for="telefonoCliente">Teléfono:</label>
        <input
          type="tel"
          id="telefonoCliente"
          name="telefonoCliente"
          required
        />
      </div>
    </div>

    <div class="cart-items">
      {#if $ticket.length > 0}
        {#each $ticket as product}
          <TicketCard {product} />
        {/each}
      {:else}
        <p class="empty-message">
          Agrega el producto que te interese seleccionando en la lista.
        </p>
      {/if}
    </div>

    <button type="submit" class="submit-button" disabled={isTicketEmpty}>
      Generar Cotización
    </button>
  </form>
</div>

<style>
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  form {
    padding: 1rem;
  }
  .contact-form {
    position: sticky;
    top: 1rem;
    border-radius: 16px;
    height: 60vh;
    max-width: 600px;
    width: 100%;
    align-self: center;
    padding: 0 0;
    overflow-y: hidden;
  }
  .contact-form form {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 8px;
  }
  .contact-data {
    height: 18vh;
    display: contents;
    background-color: #888;
  }
  .cart-items {
    height: 28vh;
    overflow: scroll;
  }
  .empty-message {
    text-align: center;
    grid-column: 1 / -1;
    align-self: center;
    color: #888;
    font-style: italic;
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
	.form-group input[type="tel"], /* Se añade el tipo tel */
	.form-group textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .submit-button {
    all: unset;
    padding: 1rem;
    border-radius: 16px;
    width: fit-content;
    text-align: center;
    justify-self: center;
    background-color: var(--glass-primary-color);
    backdrop-filter: blur(16px);
    position: absolute;
    bottom: 1rem;
    z-index: 9999;
    cursor: pointer;
  }
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>
