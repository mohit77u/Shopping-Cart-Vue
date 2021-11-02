<template>
    <div>
       
       
        <section class="product-template">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="row">
                            <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
                                <div class="carousel-indicators">
                                    <button
                                    type="button"
                                    data-mdb-target="#carouselExampleIndicators"
                                    data-mdb-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    >
                                        <img v-bind:src="$route.params.sideone" alt="Product image" class="d-block w-100" />
                                    </button>
                                    <button
                                    type="button"
                                    data-mdb-target="#carouselExampleIndicators"
                                    data-mdb-slide-to="1"
                                    aria-label="Slide 2"
                                    >
                                        <img v-bind:src="$route.params.sidetwo" alt="Product image" class="d-block w-100" />
                                    </button>
                                    <button
                                    type="button"
                                    data-mdb-target="#carouselExampleIndicators"
                                    data-mdb-slide-to="2"
                                    aria-label="Slide 3"
                                    >
                                        <img v-bind:src="$route.params.sidethree" alt="Product image" class="d-block w-100" />
                                    </button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img v-bind:src="$route.params.sideone" alt="Product image" class="d-block w-100" />

                                    </div>
                                    <div class="carousel-item">
                                        <img v-bind:src="$route.params.sidetwo" alt="Product image" class="d-block w-100" />
                                    </div>
                                    <div class="carousel-item">
                                        <img v-bind:src="$route.params.sidethree" alt="Product image" class="d-block w-100" />
                                    </div>
                                </div>
                                <button
                                    class="carousel-control-prev"
                                    type="button"
                                    data-mdb-target="#carouselExampleIndicators"
                                    data-mdb-slide="prev"
                                >
                                    <i class="fas fa-chevron-left" aria-hidden="true"></i>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button
                                    class="carousel-control-next"
                                    type="button"
                                    data-mdb-target="#carouselExampleIndicators"
                                    data-mdb-slide="next"
                                >
                                   <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        
                    </div>
                    <div class="col-sm-6">
                        <div class="prodcuts-details">
                            <h2>{{productName}}</h2>
                            <p>{{productDesc}}</p>
                            <p class="price">${{productPrice}}</p>
                            <button 
                                class="btn mt-3"
                                :class="inCartQuantity ? 'addtocartbtn' :  'addtocartbtn'"
                                @click="addToCart(productdId)"
                                :disabled="!inCartQuantity">
                                {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>


export default {
    name: 'ProductTemplate',
    props: ["product"],
    data(){
        return{
            productName: this.$route.params.name,
            productPrice: this.$route.params.price,
            productDesc: this.$route.params.desc,
            productdId: this.$route.params.id,
            productdQuantity: this.$route.params.quantity,
        }
    },
    computed: {
        inCartQuantity() {
            return this.$route.params.quantity;
        },
        products(){
            return this.$store.state.products;
        }
    },
    methods: {
        addToCart(id){
            this.$store.dispatch("addToCart", id);
        }
    },
    created(){
        this.$store.dispatch("fetchProducts");
    },
    watch: {
        id(){
            this.fetchProducts();
        }
    }
}
</script>