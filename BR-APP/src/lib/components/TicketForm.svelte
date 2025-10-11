<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import TicketCard from "./TicketCard.svelte";
  import { ticket } from "$lib/stores";
  import { fade } from "svelte/transition";

  let showSuccess = false;

  $: isTicketEmpty = $ticket.length === 0;
  $: ticketData = '';
  $: {ticketData = $ticket}

  const handleSubmit: SubmitFunction = (event) => {
    console.log(ticketData);
    event.formData.append('ticketData', JSON.stringify(ticketData));
    return async ({ update }) => {
      await update({ reset: true, invalidateAll: true });
      showSuccess = true;
      event.formElement.reset();
      ticketData = ''
      ticket.set([]);
      setTimeout(() => {
        showSuccess = false;
      }, 3000);
    };
  };

</script>

<div class="contact-form glass-by-mabby">
  <form method="POST" action="/api" use:enhance={handleSubmit}>

    <div class="contact-data">
      <h2 class="form-title">Solicitar Cotización</h2>
      <div class="form-group">
        <label for="nombreCliente">Nombre:</label>
        <input type="text" id="nombreCliente" name="nombreCliente" />
      </div>
      <div class="form-group">
        <label for="emailCliente">Email de Contacto:</label>
        <input type="email" id="emailCliente" name="emailCliente" />
      </div>
      <div class="form-group">
        <label for="telefonoCliente">Teléfono:</label>
        <input type="tel" id="telefonoCliente" name="telefonoCliente" />
      </div>
    </div>
    <div class="cart-items">
      {#if $ticket.length > 0}
        {#each $ticket as product (product.id)}
          <TicketCard {product} />
        {/each}
      {:else}
        <p class="empty-message">
          Agrega el producto que te interese seleccionando en la lista.
        </p>
      {/if}
    </div>
    {#if showSuccess}
      <div class="success" transition:fade={{ duration: 300 }}>
        ✅ Solicitud enviada
      </div>
    {/if}
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
    top: 0;
    border-radius: 16px;
    height: 60vh;
    max-width: 600px;
    width: 100%;
    align-self: center;
    padding: 0;
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
  }
  .cart-items {
    height: 28vh;
    overflow-y: auto;
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
  .form-group input {
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
    cursor: pointer;
  }
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }
  .success {
    position: absolute;
    bottom: 3.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: #4caf50;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 12px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
</style>
