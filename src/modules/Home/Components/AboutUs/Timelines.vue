<template>
  <div id="app">
    <v-app id="inspire"
      >ss
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{ year.title }}
            </h2>
            <div>
              {{ year.description }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Timelines",
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2004",
        title: "Première agence Lygeemo",
        description:
          "Gabe Newell et son équipe ouvrent la 1ère agence LYGEEMO de l’Immobilier à Nation (75012). La réussite est au rendez-vous. Une deuxième agence voit le jour l'année suivante, puis une troisième en 2006.",
      },
      {
        color: "green",
        year: "2006",
        title: "Véritable équipe",
        description: "Lygeemo compte désormais une vingtaine de profesionnel dans 4 agences dans Paris et gère plus de 15 contract par semaine. ",
      },
      {
        color: "purple",
        year: "2009",
        title: "Implantation sur de nouvelles régions",
        description: "A partir de 1996, LYGEEMO s’étend sur de nouveaux territoires de France. Elle ouvre ses premières agences à City 17,  Bourg Palette et en Terre du milieu",
      },
      {
        color: "pink",
        year: "2013",
        title: "30 Agences !",
        description: "LYGEEMO compte à présent 100 agences en activité et cela n'est pas prêt de s'arrêter... Les denières en dates se trouvent à Stormwind, à Hyrule et Tristram", 
      },
      {
        color: "amber",
        year: "2016",
        title: "Inauguration du siège social à Sims City",
        description: "L'assencion fulgurentes de LYGEEMO permet la construction d'un siège social à Sims City.",
      },
      {
        color: "orange",
        year: "2019",
        title: "1500 Contracts établit !",
        description: "C'est incroyable, et c'est grâce à vous !",
      },
    ],
  }),
};
</script>

<style>
</style>