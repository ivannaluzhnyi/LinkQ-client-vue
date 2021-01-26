<template>
  <v-container class="container">
    <h3>Comments</h3>
    <br />
    <div v-if="comments.length === 0">
      <p>No comments</p>
    </div>
    <v-container v-else>
      <v-card v-for="comment in comments" :key="comment.id" elevation="4">
        <div>
          <p>
            <b>{{ comment.email }}</b>
          </p>
          <p>{{ comment.message }}</p>
        </div>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <v-card class="elevation-2">
      <v-container>
        <Vuemik
          :initialValues="initialData"
          :onSubmit="sendComment"
          :validationSchema="CommentSchema"
          v-slot="{ handleSubmit, errors }"
        >
          <v-col cols="12">
            <label for="input__cmessage" class="col-12">Your comment</label>
            <Field class="col" component="input" name="message" />
            <p v-if="errors.message" class="alert-error">
              {{ errors.message[0] }}
            </p>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12" xsm="12" align-end>
            <v-btn
              :disabled="!isAuth"
              class="col"
              @click="handleSubmit"
              x-large
              block
              color="primary"
              >Submit</v-btn
            >
          </v-col>
        </Vuemik>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { Vuemik, Field } from "@/libs/vuemik";
import * as Yup from "yup";
import commentService from "../Services/comment.service";
import { mapGetters } from "vuex";

export default {
  name: "Comment",
  components: {
    Field,
    Vuemik,
  },
  data: () => ({
    comments: [],
    CommentSchema: Yup.object().shape({
      message: Yup.string(),
    }),
    initialData: {
      comment: "",
    },
  }),
  computed: {
    ...mapGetters({
      user: "auth/apollo_getUser",
      isAuth: "auth/isAuthenticatedApollo",
    }),
  },

  created() {
    this.getCommentsByProperty(this.$route.params.idProperty);
  },
  methods: {
    getCommentsByProperty(idProperty) {
      commentService.getComments(idProperty).then((res) => {
        if (res && res.length !== 0) {
          this.$data.comments = res;
        }
      });
    },

    sendComment({ message }) {
      const { email } = this.user;
      const { idProperty } = this.$route.params;

      commentService
        .sendComment({
          message,
          email,
          idProperty: parseInt(idProperty),
          validate: true,
        })
        .then(
          (upcomingComment) =>
            upcomingComment.id && this.addCommentToData(upcomingComment)
        );
    },

    addCommentToData(comment) {
      this.$data.comments = [comment, ...this.$data.comments];
      this.$data.message  = ""
    },
  },
};
//Faire connection apollo prisma
</script>

<style scoped>
.container {
  width: 900px;
  max-width: 100%;
}
</style>
