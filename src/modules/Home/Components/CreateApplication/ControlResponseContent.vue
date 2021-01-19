<template>
  <div>
    <div v-if="responseType !=='' ">
      <v-card>
        <v-card-title>
          <span class="headline">Création d'une demande</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div v-if="responseType === 'SUCCESS' ">
              <v-alert
                outlined
                type="success"
                text
              >Votre demande à bien été enregistrée, le propriétaire nous donnera une réponse sous quelques jours.</v-alert>
              <RouterLink
                :to="{name: 'Property', params:{ idProperty: property.id}}"
              >Voir proposition</RouterLink>
            </div>
            <v-alert
              v-else
              text
              prominent
              type="error"
              icon="mdi-cloud-alert"
            >Une erreur s'est produite sur votre demande.</v-alert>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="handleClose()">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: ["responseType", "handleClose", "property"],
};
</script>

<style>
</style>