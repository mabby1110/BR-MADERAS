<div class="container">
  <a class="cart" href="#start">
    <img src="/line-md--file-search.svg" alt="cart-icon" />
  </a>
  <a class="cart" href="#ticket">
    <img src="/mdi-light--cart.svg" alt="cart-icon" />
  </a>
</div>

<style>
  .container {
    position: fixed;
    z-index: 999;
    right: 8px;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    padding: var(--padding-a);
    gap: 1rem;
  }
  .cart {
    background-color: var(--glass-primary-color);
    border-radius: var(--br-a);
    backdrop-filter: blur(16px);
    overflow: hidden;
    border: none;
    display: flex;
  }
  .cart img{
    width: 4rem;
    padding: 4px;
  }
</style>
