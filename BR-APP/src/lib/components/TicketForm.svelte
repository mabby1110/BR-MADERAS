<script lang="ts">
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";
    import TicketCard from "./TicketCard.svelte";
    import { ticket } from "$lib/stores";

    // 1. Tipado del store (asumiendo una estructura mínima)
    interface Producto {
        id: string;
        nombre: string;
        cantidad: number;
        [key: string]: any; // Permite otras propiedades en los productos
    }

    /**
     * Función para manejar el envío con SvelteKit enhance.
     * @param {SubmitFunction}
     */
    const handleSubmit: SubmitFunction = ({ action, data, form, submitter }) => {
        // 2. Serializar el contenido del store '$ticket' a JSON
        const ticketData: Producto[] = $ticket;
        const productosJson: string = JSON.stringify(ticketData);

        // 3. Agregar el JSON al objeto FormData antes de enviarlo
        // El nombre del campo será 'productos'
        data.set('productos', productosJson);

        // Opcional: Mostrar los datos antes de enviar
        console.log("Datos del Cliente:", data.get('nombreCliente'), data.get('emailCliente'));
        console.log("Productos JSON a enviar:", data.get('productos'));

        // Retornar true permite que SvelteKit continúe con el envío
        return ({ update }) => {
            // Lógica de feedback aquí (ej: limpiar formulario, mostrar éxito)
            update();
        };
    };
</script>

<div class="contact-form glass-by-mabby">
    <form method="POST" action="?/cotizacion" use:enhance={handleSubmit}>
        <h2 class="form-title">Solicitar Cotización</h2>
        
        <div class="form-group">
            <label for="nombreCliente">Nombre:</label>
            <input type="text" id="nombreCliente" name="nombreCliente" required />
        </div>
        <div class="form-group">
            <label for="emailCliente">Email de Contacto:</label>
            <input type="email" id="emailCliente" name="emailCliente" required />
        </div>
        
        <div class="cart-items">
            {#each $ticket as product}
                <TicketCard {product} />
            {/each}
        </div>
        
        <button type="submit" class="submit-button"> Generar Cotización </button>
    </form>
</div>

<style>
    /* Estilos copiados exactamente del componente original */
    h2 {
        margin-bottom: 1rem;
        text-align: center;
    }
    form {
        padding: 1rem;
    }
    .contact-form {
        position: sticky;
        top: 10rem;
        border-radius: 16px;
        max-height: 80vh;
        max-width: 600px;
        width: 100%;
        align-self: center;
        padding: 1rem 0;
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
        max-height: 50vh;
        overflow-y: scroll;
        padding-bottom: 4rem;
        width: 100%;
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
        z-index: 99;
    }
    .submit-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>