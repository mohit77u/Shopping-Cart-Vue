<template>
    <div class=""> 
        <!-- <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert"> 
            Cart is empty! Please add some products. 
        </div> -->
        <table class="table-striped mb-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
              <td scope="row">{{index + 1}}</td>
              <td><img v-bind:src="'/public/images/' + product.image" alt="Product image" /></td>
              <td>{{product.name}}</td>
              <td>$ {{product.price}}</td>
              <td>
                  <button 
                      @click="removeFromCart(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button 
                      @click="addToCart(product.id)" 
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </td>
              <td><button 
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-small">
                  Delete
              </button></td>
              <td>$ {{product.quantity* product.price}}</td>
            </tr>
            
            <tr class="table-footer"> 
                <td colspan="5" class="total">Total:</td> 
                <td>$ {{cartTotalAmount}}</td> 
            </tr>
          </tbody>
        </table>
    </div>    
</template>
 
<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data() {
            return{
            
            };
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
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        }
    } 
</script> 
