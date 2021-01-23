<template>
  <div>
    <h1 class="font-weight-bold text-center display-3 basil--text py-10">
      Notre histoire
    </h1>

    Un agent immobilier (ou courtier immobilier au Québec) est un intermédiaire
    dans les transactions portant sur des biens immobiliers : ventes et
    locations. Cet agent peut être un travailleur indépendant ou une entreprise,
    l'agence immobilière, employant des négociateurs. Il est généralement en
    contact avec ses confrères de la même branche, avec les mairies et
    communautés urbaines, les collectivités, les institutions, les avocats et
    les tribunaux.

    <timelines/>
  </div>
</template>

<script>
import Timelines from "@/modules/Home/Components/AboutUs/Timelines";
export default {
  name: "AboutUs",
   components: { Timelines },
  };
</script>

<style>
</style>