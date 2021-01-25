<template>
  <v-container class="container">
    <h3>Comments</h3>
    <br>
    <div v-for="comment in comments" :key="comment.id">
      <v-card>
        <v-container>
          <p>Email: <b>{{comment.email}}</b></p>
          <p>Comment: {{comment.message}}</p>
        </v-container>
      </v-card>
    </div>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
            :initialValues="initialData"
            :onSubmit="sendComment"
            :validationSchema="CommentSchema"
            v-slot="{ handleSubmit, errors }"
        >
          <v-col cols="12">
            <label for="input__comment" class="col-12">Your comment</label>
            <Field class="col" component="input" name="comment" id="input__comment"/>
            <p v-if="errors.comment" class="alert-error">{{ errors.comment[0] }}</p>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12" xsm="12" align-end>
            <v-btn class="col" @click="handleSubmit" x-large block color="primary">Submit</v-btn>
          </v-col>
        </Vuemik>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";
import * as Yup from "yup";

export default {
  name: "Comment",
  components: {
    Field,
    Vuemik,
  },
  data: () => ({
    comments: [
      {
        id: 1,
        email: "theo@gmail.com",
        message: "Hello"
      },
      {
        id: 2,
        email: "ivan@gmail.com",
        message: "Hola"
      },
      {
        id: 3,
        email: "bryan@gmail.com",
        message: "Bonjour"
      },
      {
        id: 4,
        email: "alois@gmail.com",
        message: "Bijour"
      },
    ],
    CommentSchema: Yup.object().shape({
      message: Yup.string().required("Message is required"),
    }),
    initialData: {
      comment: '',
    },
  }),
}
//Faire connection apollo prisma
</script>

<style scoped>
.container {
  width: 900px;
  max-width: 100%;
}
</style>