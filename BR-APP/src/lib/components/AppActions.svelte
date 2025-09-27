<div class="container">
  <button class="cart">
    <img src="src/lib/assets/mdi-light--cart.svg" alt="cart-icon" />
  </button>
  <button class="cart">
    <img src="src/lib/assets/line-md--file-search.svg" alt="cart-icon" />
  </button>
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
    all: unset;
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
