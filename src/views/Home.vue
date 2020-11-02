<template>
<div>
  <AppHeader/>
    <Product/>
    <AppFooter/>
    
</div>
</template>
<script>
import Product from "../components/Product";
import AppHeader from "../components/Layout/AppHeader";
import AppFooter from "../components/Layout/AppFooter";


export default {
    name:"Home",
    components: {
    Product,
    AppHeader,
    AppFooter
  },
}
</script>