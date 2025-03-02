<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">Rémi Vanel</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            text="Former french organic chemist now a confirmed software
                programmer. Fullstack Java/VueJS dev. Currently in position in
                Softeam Digital."
            variant="outlined"
          >
            <template #title>
              <h2 class="text-h5 font-weight-bold">
                <v-avatar class="ma-3">
                  <v-img src="@/assets/IMG_1495475492553.jpg" /> </v-avatar
                >Confirmed Developper
              </h2>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <content-view :content="contentLanguageAndTechs" />
        </v-col>

        <v-col cols="6">
          <v-card

          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card

          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card

          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
const contentLanguageAndTechs: Content = {
  title: "Langages & technologies",
  lines: [
    {
      id: 1,
      text: "Java 8 to 21, Spring framework (Boot, Data, REST, Security, MVC)",
      icons: [
        "devicon-spring-original-wordmark colored",
        "devicon-java-plain-wordmark colored",
        "devicon-maven-plain-wordmark colored",
      ],
    },
    {
      id: 2,
      text: "JavaScript, TypeScript",
      icons: [
        "devicon-javascript-plain colored",
        "devicon-typescript-plain colored",
      ],
    },
    {
      id: 3,
      text: "Vue.js 2 & 3, ViteJS, Quasar, Vuetify",
      icons: [
        "devicon-vuejs-plain-wordmark colored",
        "devicon-vuetify-plain colored",
        "devicon-vitejs-plain colored",
        "devicon-quasar-plain-wordmark colored",
      ],
    },
  ],
};
</script>
