<template>  
  <div>
    <section class="header navbar-dark bg-dark">
      <div class="container">
        <nav class="navbar">
        <a class="navbar-brand" href="#"><b>My Shop</b></a>

        <button
          type="button"
          class="cartbtn"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
        >
          {{cartSize}}<i class="fas fa-shopping-cart"></i>
        </button>

        <div class="modal fade" id="exampleModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class=" modal-title my-2" id="exampleModalLabel">Cart {{cartSize}}</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Cart/>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                  Close
                </button> -->
                <button type="button" class="btn btn-secondary">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </div>
    </section>
  </div>  
    
</template>    

<script>
import Cart from './Cart.vue'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Navbar',
  components: {
    Cart,
  },
  computed: {
      ...mapState([
          "cart"
      ]),
      ...mapGetters([
          "cartSize",
          "cartTotalAmount"
      ])
  },
}
</script>