<script>
  const currentYear = new Date().getFullYear();
  const developerName = "CURRENT.ME por Bernardo A. Márquez";
  const developerEmail = "rznns.mabby@gmail.com";
  const socialLinks = {
    github: "https://github.com/mabby1110/BR-MADERAS",
    instagram: "https://instagram.com/axelbaautista",
    whatsapp: "https://wa.me/3333016202",
    phone: "tel:3333016202",
  };
</script>

<footer class="app-footer">
  <div class="footer-content">
    <div class="copyright">
      <br />
      &copy; {currentYear} <strong>BR MADERAS</strong>. Todos los derechos
      reservados.
    </div>
    <div class="social-links">
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img src="/src/lib/assets/instagram.png" alt="instagram" />
      </a>
      <a href={socialLinks.whatsapp} class="link">
        <img src="/src/lib/assets/whatsapp.png" alt="whatsapp" />
      </a>
      <a href={`mailto:${developerEmail}`} aria-label="Correo Electrónico">
        <img src="/src/lib/assets/email.svg" alt="Correo" />
      </a>
      <a href={socialLinks.phone} aria-label="Teléfono">
        <img src="/src/lib/assets/phone.svg" alt="Telefono" />
      </a>
    </div>

    <div class="copyright">
      <br />
      <br />
      Diseño y Desarrollado de<br /> <strong>{developerName}</strong>.
      <a href={socialLinks.github} aria-label="GitHub"> [GitHub] </a>
      <br />
    </div>
  </div>
</footer>

<style>
  /* Estilos CSS Minimalistas */

  .app-footer {
    z-index: 9999;
    /* Centra el footer horizontalmente */
    margin: 0 auto;
    /* Estilos de fondo y tipografía */
    color: black;
    padding: 20px 0; /* Espaciado interno superior e inferior */
    text-align: center; /* Centra el contenido */
    border-top: 1px solid #ccc; /* Línea divisoria sutil */
    background-color: white;
    width: 100%;
  }

  .footer-content {
    /* Flexbox para alinear contenido (logos arriba, copyright abajo) */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Espacio entre las secciones */
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Espacio entre los logos */
  }

  .social-links a {
    /* Estilo básico de los enlaces/logos */
    color: black;
    text-decoration: none; /* Quitar el subrayado por defecto */
    font-weight: bold; /* Hacer el texto del logo un poco más visible */
    transition: color 0.3s; /* Efecto hover sutil */
    cursor: pointer;
  }

  .social-links a:hover {
    color: #555; /* Color ligeramente gris al pasar el mouse */
  }

  .copyright {
    font-size: 0.9em; /* Letras un poco más pequeñas para el copyright */
    line-height: 1.5;
  }
</style>
