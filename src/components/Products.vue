<template> 
    <section class="products">
        <div class="container mt-5 py-2">
            <div class="row">
                <div class="col-sm-4" v-for="product in products" :key="product.id">
                    <Single-product :product="product" />
                </div>
            </div>
        </div>
    </section>  
   
</template>   

<script>
    import SingleProduct from "./SingleProduct.vue"
    export default{
        components: {
            SingleProduct
        },
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
        created(){
            this.$store.dispatch("fetchProducts");
        }
    }
</script>