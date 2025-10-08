<script lang="ts">
    interface Producto {
        id: string;
        nombre: string;
        cantidad: number;
        precio: number;
    }

    const productosSeleccionados: Producto[] = [
        { id: 'PROD001', nombre: 'Servicio Básico de Hosting', cantidad: 1, precio: 50.00 },
        { id: 'PROD005', nombre: 'Dominio .com (Anual)', cantidad: 1, precio: 15.00 },
        { id: 'PROD010', nombre: 'Mantenimiento Premium', cantidad: 3, precio: 25.00 },
    ];

    const productosJson: string = JSON.stringify(productosSeleccionados);

    const handleSubmit = (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());

        console.log('Datos del Cliente:', data);
        console.log('Productos JSON:', data.productos); 
        console.log('JSON Parseado (Verificación):', JSON.parse(data.productos as string)); 

        alert('Formulario listo. Los datos, incluido el JSON de productos, están en la consola.');
    };
</script>

<form method="POST" on:submit|preventDefault={handleSubmit} class="form-cotizacion">
    <h2>Solicitud de Cotización</h2>

    <div class="form-group">
        <label for="nombre">Nombre Completo</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan Pérez" />
    </div>

    <div class="form-group">
        <label for="correo">Correo Electrónico</label>
        <input type="email" id="correo" name="correo" required placeholder="ejemplo@negocio.com" />
    </div>

    <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" placeholder="Ej: +52 55 1234 5678" />
    </div>

    <input type="hidden" name="productos" value={productosJson} />

    <button type="submit">Enviar Solicitud de Cotización</button>
</form>

<style>
    .form-cotizacion {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-family: sans-serif;
    }
    .form-group {
        margin-bottom: 15px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    button {
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
    }
</style>