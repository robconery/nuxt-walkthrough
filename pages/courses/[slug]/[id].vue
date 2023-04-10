<template>

  <v-app-bar 
    id="top-nav"
    title="Lorem Ipsum"
    flat
    color="blue-grey-darken-4"
  ></v-app-bar>
  <v-container class="h-screen">
    
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row>
      <v-col>
        <v-img src="https://via.placeholder.com/1280x720" alt="" class="mx-auto" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <h2>Lorem Ipsum Dolor</h2>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis illum qui quo culpa excepturi quam cupiditate velit aut doloribus repellendus quibusdam voluptate ea eligendi sed in sint, porro ullam quasi!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const route = useRoute();
let slug = route.params.slug;
let id = route.params.id;
</script>