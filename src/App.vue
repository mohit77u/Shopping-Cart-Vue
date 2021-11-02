<template> 
    <div id="app">
		<toast :show="toast.show" :text="toast.text" @hide-toast="hideToast"></toast>
        <navbar></navbar>
		<router-view></router-view>
  	 </div>  
</template>

<script>

    import Navbar from './components/Navbar.vue'
    import Toast from './components/Toast.vue'
    
  	  export default {
		name: 'app',
			components:{
				Toast,Navbar
			},
			computed: {
				toast() {
					return this.$store.getters.toast;
				}
			},
			methods: {
				hideToast() {
					this.$store.commit("hideToast");
				}
			}
	}   
</script>
