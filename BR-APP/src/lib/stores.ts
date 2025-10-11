import { browser } from "$app/environment";
import { get, writable } from "svelte/store";

const products = [
  {
    id: 1,
    obs: "",
    img_list: ["caoba_eltza.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Caoba Eltza",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Caoba. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 2,
    obs: "",
    img_list: ["caoba.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Caoba",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Caoba. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 3,
    obs: "",
    img_list: ["fresno_siza.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Fresno Siza",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Fresno. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 4,
    obs: "",
    img_list: ["gris_oxford.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Gris Oxford",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Gris Oxford. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 5,
    obs: "",
    img_list: ["marmol.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Mármol",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado tipo Mármol. Ideal para cubiertas y muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 6,
    obs: "",
    img_list: ["negro.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Negro",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado color Negro. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 7,
    obs: "",
    img_list: ["nogal_calido.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Nogal Cálido",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Nogal. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 8,
    obs: "",
    img_list: ["parota.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Parota",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Parota. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
  {
    id: 9,
    obs: "",
    img_list: ["roble_arca.jpg"],
    material: "MDF Melamina",
    title: "Tablón MDF Roble Arca",
    description:
      "Tablón de MDF con recubrimiento de melamina. Acabado Roble. Ideal para muebles de interior.",
    details: { espesorMM: 18, dimensionesCM: "244 x 122" },
  },
];

export const productList = writable(products);

export function clearTicketAndCookies() {
  if (!browser) return;

  // Limpiar el store del ticket
  ticket.set([]);

  // Eliminar la cookie del ticket
  document.cookie = "ticket=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Si tienes más cookies que quieras eliminar, puedes agregarlas aquí
  // Por ejemplo:
  // document.cookie = "otraCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name: string) {
  if (!browser) return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 7) {
  if (!browser) return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

const storedTicket = browser ? getCookie("ticket") : null;
export const ticket = writable(storedTicket ? JSON.parse(storedTicket) : []);

if (browser) {
  ticket.subscribe((value) => {
    setCookie("ticket", JSON.stringify(value));
  });
}

export function addUniqueToTicket(item) {
  ticket.update((current) => {
    const exists = current.some(
      (t) => t.id === item.id && t.material === item.material
    );
    return exists ? current : [...current, item];
  });
}

export function removeFromTicket(id) {
  ticket.update((current) => current.filter((t) => t.id !== id));
}

export function isProductInTicket(item) {
  const current = get(ticket);
  return current.some((t) => t.id === item.id && t.material === item.material);
}
