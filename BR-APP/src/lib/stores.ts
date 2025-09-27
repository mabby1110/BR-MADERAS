import { writable } from "svelte/store";

// Una store simple que almacena un número
export const ticket = writable([
  {
    id: 1,
    material: "MDF Melamina",
    title: "Tablón MDF Roble Claro",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Roble Claro. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 2,
    material: "MDF Melamina",
    title: "Tablón MDF Blanco Brillante",
    description:
      "Tablón de MDF con melamina. Acabado Blanco de alto brillo. Superficie resistente a rayones.",
    details: {
      espesorMM: 15,
      dimensionesCM: "280 x 130",
    },
  },
]);
// -----------------------------------------------------------
// FUNCIONES DE MANIPULACIÓN
// -----------------------------------------------------------

/**
 * 1. Agrega un nuevo artículo al array de la store `ticket` solo si no existe.
 * La existencia se comprueba por la combinación de `id` y `material`.
 * @param {Object} item El objeto a intentar agregar al ticket.
 */
export function addUniqueToTicket(item) {
  ticket.update((currentTicket) => {
    // Busca si ya existe un elemento con el mismo id Y material.
    const exists = currentTicket.some(
      (t) => t.id === item.id && t.material === item.material
    );

    // Si no existe, crea un nuevo array con el item añadido.
    if (!exists) {
      return [...currentTicket, item];
    }

    // Si ya existe, retorna el array sin cambios.
    return currentTicket;
  });
}

// -----------------------------------------------------------

/**
 * 2. Elimina un artículo del array de la store `ticket`.
 * @param {number} id El ID del artículo a eliminar.
 * @param {string} material El material del artículo a eliminar.
 */
export function removeFromTicket(id) {
  ticket.update((currentTicket) => {
    // Filtra el array, manteniendo solo los elementos que NO coinciden con el id Y material.
    return currentTicket.filter((t) => !(t.id === id));
  });
}

const products = [
  {
    id: 1,
    material: "MDF Melamina",
    title: "Tablón MDF Roble Claro",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Roble Claro. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 2,
    material: "MDF Melamina",
    title: "Tablón MDF Blanco Brillante",
    description:
      "Tablón de MDF con melamina. Acabado Blanco de alto brillo. Superficie resistente a rayones.",
    details: {
      espesorMM: 15,
      dimensionesCM: "280 x 130",
    },
  },
  {
    id: 3,
    material: "MDF Melamina",
    title: "Tablón MDF Wengué",
    description:
      "Tablón con melamina color Wengué. Textura mate. Usado frecuentemente en cocinas y escritorios.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 4,
    material: "MDF Melamina",
    title: "Tablón MDF Gris Cemento",
    description: "Diseño industrial Gris Cemento. Melamina de baja porosidad.",
    details: {
      espesorMM: 12,
      dimensionesCM: "280 x 130",
    },
  },
];

export const productList = writable(products);
