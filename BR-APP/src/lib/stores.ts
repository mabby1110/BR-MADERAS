import { get, writable } from "svelte/store";

const products = [
  {
    id: 1,
    img_list: ["caoba_eltza.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Caoba Eltza",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Caoba. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 2,
    img_list: ["caoba.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Caoba",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Caoba. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 3,
    img_list: ["fresno_siza.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Fresno Siza",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Fresno. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 4,
    img_list: ["gris_oxford.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Gris Oxford",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Gris Oxford. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 5,
    img_list: ["marmol.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Mármol",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado tipo Mármol. Ideal para cubiertas y muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 6,
    img_list: ["negro.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Negro",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado color Negro. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 7,
    img_list: ["nogal_calido.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Nogal Cálido",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Nogal. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 8,
    img_list: ["parota.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Parota",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Parota. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
  {
    id: 9,
    img_list: ["roble_arca.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Roble Arca",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Roble. Ideal para muebles de interior.",
    details: {
      espesorMM: 18,
      dimensionesCM: "244 x 122",
    },
  },
];

export const productList = writable(products);

export const ticket = writable([]);

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

/**
 * 3. Verifica si un artículo ya existe en el array de la store `ticket`.
 * La existencia se comprueba por la combinación de `id` y `material`.
 * @param {Object} item El objeto a verificar (debe tener 'id' y 'material').
 * @returns {boolean} True si el artículo ya está en el ticket, false en caso contrario.
 */
export function isProductInTicket(item) {
  // Usamos 'get' para obtener el valor actual de la store sin necesidad de suscribirse/desuscribirse manualmente.
  const currentTicket = get(ticket);

  // Busca si ya existe un elemento con el mismo id Y material.
  const exists = currentTicket.some(
    (t) => t.id === item.id && t.material === item.material
  );

  return exists;
}
