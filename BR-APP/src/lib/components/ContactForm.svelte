<script>
  import TicketCard from "./TicketCard.svelte";

 // Asegúrate de que la ruta sea correcta

  // Datos de los productos de ejemplo.
  // En una aplicación real, 'productos' probablemente vendría de props o de una API.
  const prod = [
    {
      id: 1,
      nombre: "Laptop Pro",
      precioUnitario: 1200.5,
      stock: 15,
      descripcion: "Laptop de alto rendimiento para profesionales.",
    },
    {
      id: 2,
      nombre: "Monitor 4K",
      precioUnitario: 450.0,
      stock: 30,
      descripcion: "Monitor de 27 pulgadas con resolución 4K.",
    },
    {
      id: 3,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
    {
      id: 4,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
    {
      id: 5,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
    {
      id: 6,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
    {
      id: 7,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
    {
      id: 8,
      nombre: "Mouse Ergonómico",
      precioUnitario: 25.99,
      stock: 100,
      descripcion: "Mouse inalámbrico con diseño ergonómico.",
    },
  ];

  // Estado reactivo para almacenar la cantidad y las observaciones de cada producto.
  // Inicializamos las cantidades a 0 y las observaciones vacías.
  let cotizacion = prod.map((producto) => ({
    id: producto.id,
    cantidad: 0,
    observaciones: "",
  }));

  // Variable reactiva para el nombre del cliente (Input Faltante)
  let nombreCliente = "";
  // Variable reactiva para el email del cliente (Input Faltante)
  let emailCliente = "";

  // Función reactiva ($:) para calcular el costo total de la cotización.
  // Se recalcula automáticamente cada vez que 'cotizacion' cambia.
  $: totalCotizacion = cotizacion.reduce((total, item) => {
    const producto = prod.find((p) => p.id === item.id);
    if (producto) {
      return total + item.cantidad * producto.precioUnitario;
    }
    return total;
  }, 0);

  // Manejador del evento 'actualizar' emitido desde ProductoCard
  function handleActualizar(event) {
    // Forzar la reactividad en el array 'cotizacion'
    cotizacion = cotizacion;
  }

  // Manejador del envío del formulario
  function handleSubmit() {
    // Filtrar productos con cantidad > 0 para la cotización final
    const productosCotizados = cotizacion
      .filter((item) => item.cantidad > 0)
      .map((item) => {
        const producto = prod.find((p) => p.id === item.id);
        return {
          ...producto,
          cantidad: item.cantidad,
          observaciones: item.observaciones,
          subtotal: item.cantidad * producto.precioUnitario,
        };
      });

    const resultadoFinal = {
      nombreCliente,
      emailCliente,
      productos: productosCotizados,
      total: totalCotizacion,
    };

    console.log("Cotización Enviada:", resultadoFinal);

    // Aquí iría la lógica para enviar los datos a un servidor o mostrarlos al usuario.
    alert(
      `Cotización para ${nombreCliente} enviada. Total: $${totalCotizacion.toFixed(2)}`
    );
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="contact-form glass-by-mabby">
    <h2 class="form-title">Solicitar Cotización</h2>
    <div class="form-group">
      <label for="nombreCliente">Nombre:</label>
      <input
        type="text"
        id="nombreCliente"
        bind:value={nombreCliente}
        required
      />
    </div>
    <div class="form-group">
      <label for="emailCliente">Email de Contacto:</label>
      <input
        type="email"
        id="emailCliente"
        bind:value={emailCliente}
        required
      />
    </div>
  </div>

  <div class="cart-items-container glass-by-mabby">
    <h2>Productos a Cotizar</h2>
    <div class="cart-items">
      {#each prod as producto, index (producto.id)}
        <TicketCard
          {producto}
          bind:itemCotizacion={cotizacion[index]}
          on:actualizar={handleActualizar}
        />
      {/each}
    </div>
  </div>

  <button
    type="submit"
    disabled={totalCotizacion === 0 || !nombreCliente || !emailCliente}
  >
    Generar Cotización
  </button>
</form>

<style>
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
  .contact-form {
    border-radius: 16px;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 99;
    max-width: 600px;
    width: 100%;
    align-self: center;
  }
  .cart-items-container {
    flex-grow: 1;
    padding: 1rem;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .cart-items {
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 10rem;
    gap: 1rem;
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

  .cart-items-container h2 {
    position: sticky;
    top: 0;
  }
  .subtotal {
    font-weight: bold;
    text-align: right;
    color: #007bff;
  }
  .total-summary {
    padding: 10px;
    border: 2px solid #28a745;
    border-radius: 4px;
    margin: 20px 0;
    text-align: right;
    background-color: #e2ffe8;
  }
  .total-summary h3 {
    margin: 0;
    color: #28a745;
  }
  button {
    all: unset;
    position: sticky;
    bottom: 0;
    padding: 1rem;
    border-radius: 16px;
    text-align: center;
    align-self: center;
    background-color: var(--success-color);
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>