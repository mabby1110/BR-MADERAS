<script>
  const socialLinks = {
    email: "mailto:axel.barbarba@email.com",
    instagram: "https://instagram.com/axelbaautista",
    whatsapp: "https://wa.me/3333016202",
    phone: "tel:3333016202",
  };
</script>

<div class="container glass-by-mabby">
  <p>por Axel E. Barba Bautista</p>
  <div class="links">
    <a href={socialLinks.instagram} class="link">
      <img src="/instagram.png" alt="instagram" />
    </a>
    <a href={socialLinks.whatsapp} class="link">
      <img src="/whatsapp.png" alt="whatsapp" />
    </a>
    <a href={socialLinks.email} class="link">
      <img src="/email.svg" alt="Correo" />
    </a>
    <a href={socialLinks.phone} class="link">
      <img src="/phone.svg" alt="Telefono" />
    </a>
  </div>
</div>

<style>
  .container {
    align-self: center;
    justify-self: center;
    padding: 1rem;
    max-width: fit-content;
    width: 100%;
    border-radius: 16px;
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    white-space: pre;
    height: 6rem;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
  }
</style>
