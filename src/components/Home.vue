<template>
    <div>
		<products></products>
        
    </div>
</template>

<script>
   
    import Products from './Products.vue'
    import Cart from './Cart.vue'
    
    export default {
        name: 'Home',
        components:{
            Products,
            Cart,
        },
        
    }
</script>