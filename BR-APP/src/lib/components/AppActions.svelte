<div class="container">
  <button class="cart">
    <img src="src/lib/assets/mdi-light--cart.svg" alt="cart-icon" />
  </button>
</div>

<style>
  .container {
    position: fixed;
    z-index: 9999;
    right: var(--a);
    bottom: var(--a);
    top: 40%;
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
