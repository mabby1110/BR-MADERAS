import { RESEND_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";
import { Resend } from "resend";

// 1. Inicializa el cliente Resend sin pasar el argumento.
// Resend buscará automáticamente la clave en process.env.RESEND_API_KEY.

// Obtiene la clave del entorno para la verificación explícita dentro del handler.
// const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export async function POST({ request, params }) {
  console.log("send email api");
  // 2. Verificar si la clave se cargó correctamente.
  if (!RESEND_API_KEY) {
    return json(
      { message: "Error: La API Key de Resend no está configurada." },
      { status: 500 }
    );
  }

  try {
    const data = await request.formData();

    const nombreCliente = data.get("nombreCliente") as string;
    const emailCliente = data.get("emailCliente") as string;
    const telefonoCliente = data.get("telefonoCliente") as string;
    const productosJson = data.get("ticketData") as string;

    const productos = JSON.parse(productosJson);

    const productosHtml = Array.isArray(productos)
      ? productos
          .map(
            (p) => `
            <tr>
                <td style="border: 1px solid #ccc; padding: 8px;">${p.id}</td>
                <td style="border: 1px solid #ccc; padding: 8px;">${p.title}</td>
                <td style="border: 1px solid #ccc; padding: 8px;">${p.details}</td>
            </tr>
        `
          )
          .join("")
      : "";
    console.log(data);
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["rznns.mabby@gmail.com"],
      subject: `[Cotización Web] Solicitud de ${nombreCliente}`,
      html: `
            <div style="font-family: Arial, sans-serif;">
                <h2>Nueva Solicitud de Cotización</h2>
                <p><strong>Cliente:</strong> ${nombreCliente}</p>
                <p><strong>Email:</strong> <a href="mailto:${emailCliente}">${emailCliente}</a></p>
                <p><strong>Teléfono:</strong> ${telefonoCliente}</p>

                <h3>Detalles de Productos:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">ID</th>
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Producto</th>
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productosHtml}
                    </tbody>
                </table>
            </div>
        `,
    });

    return json(
      { success: true, message: "Cotización enviada con éxito." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return json(
      {
        success: false,
        message: "Error interno del servidor al enviar la solicitud.",
      },
      { status: 500 }
    );
  }
}
