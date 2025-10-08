<script>
    // Variables de contacto y atribución
    const currentYear = new Date().getFullYear();
    const developerName = "Bernardo A. Márquez (CURRENT.ME)";
    const developerEmail = "rznns.mabby@gmail.com";
    
    // Links Falsos
    const socialLinks = {
        github: "https://github.com/tu_usuario_falso",
        instagram: "https://instagram.com/tu_usuario_falso",
        whatsapp: "https://wa.me/numero_falso",
        phone: "tel:numero_falso"
    };
</script>

<footer class="app-footer">
    <div class="footer-content">
        <div class="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                [GitHub]
            </a>
            <a href={`mailto:${developerEmail}`} aria-label="Correo Electrónico">
                [Correo]
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                [WhatsApp]
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                [Instagram]
            </a>
            <a href={socialLinks.phone} aria-label="Teléfono">
                [Teléfono]
            </a>
        </div>

        <div class="copyright">
            &copy; {currentYear} **BR MADERAS**. Todos los derechos reservados.
            <br>
            Diseñado y Desarrollado por **{developerName}**.
        </div>
    </div>
</footer>

<style>
    /* Estilos CSS Minimalistas */
    
    .app-footer {
        
        /* Centra el footer horizontalmente */
        margin: 0 auto; 
        
        /* Estilos de fondo y tipografía */
        background-color: white; 
        color: black;
        padding: 20px 0; /* Espaciado interno superior e inferior */
        text-align: center; /* Centra el contenido */
        border-top: 1px solid #ccc; /* Línea divisoria sutil */
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
        gap: 20px; /* Espacio entre los logos */
    }

    .social-links a {
        /* Estilo básico de los enlaces/logos */
        color: black; 
        text-decoration: none; /* Quitar el subrayado por defecto */
        font-weight: bold; /* Hacer el texto del logo un poco más visible */
        transition: color 0.3s; /* Efecto hover sutil */
    }
    
    .social-links a:hover {
        color: #555; /* Color ligeramente gris al pasar el mouse */
    }

    .copyright {
        font-size: 0.9em; /* Letras un poco más pequeñas para el copyright */
        line-height: 1.5;
    }
</style>