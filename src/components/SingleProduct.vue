<template>
        
    <div class="card text-center">
        <router-link :to="{ name:'ProductTemplate', params: { name: product.name, id: product.id, price: product.price, image: product.image, desc: product.desc, quantity: product.quantity, sideone: product.sideone, sidetwo: product.sidetwo, sidethree: product.sidethree } }">
            <div class="text-center">
                <img v-bind:src="'/public/images/' + product.image" alt="Product image" /> 
            </div>
            <div class="card-body"> 
                <h5 class="card-title">{{product.name}}</h5> 
                <p class="card-text"><b>${{product.price}}</b></p> 
            </div>
        </router-link> 
        <div class="products-bottom-content text-center">
            <p>{{product.desc}}</p>
            <button 
                class="btn mt-3"
                :class="inCartQuantity ? 'addtocartbtn' :  'addtocartbtn'"
                @click="addToCart(product.id)"
                :disabled="!inCartQuantity">
                {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
            </button>
        </div>
    </div>
    
</template>

<script>
    export default{
        props: ["product"],
        data(){
            return{
                allProduct: {
                    name: product.name,
                    id: product.id,
                    price: product.price,
                    image: product.image,
                    desc: product.desc,
                    quantity: product.quantity,
                    sideone: product.sideone,
                    sidetwo: product.sidetwo, 
                    sidethree: product.sidethree 
                },
            }
        },
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            },
            products(){
                return this.$store.state.products;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            }
        }

    }
</script>