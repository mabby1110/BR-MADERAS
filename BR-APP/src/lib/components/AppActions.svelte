<div class="container">
  <button class="cart">
    <img src="src/lib/assets/mdi-light--cart.svg" alt="cart-icon" />
  </button>
</div>

<style>
  .container {
    position: fixed;
    z-index: 999;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    padding: var(--padding-a);
  }
  .cart {
    all: unset;
    background-color: var(--glass-primary-color);
    border-radius: var(--br-a);
    overflow: hidden;
    border: none;
    display: flex;
  }
  .cart img{
    width: 4rem;
    padding: 4px;
  }
</style>
