<template>

<div v-if="user.id">
  <v-menu location="bottom" >
    <template #activator="{ props }">
      <v-btn class="mr-4"  v-bind="props">
        <v-avatar>
          <v-img
            :src="user.gravatar"
            alt="User Menu"
          ></v-img>
        </v-avatar>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        title="Logout"
        @click="logout"
      >
      </v-list-item>
    </v-list>
  </v-menu>
</div>
<div v-else>
  <v-btn class="mr-4" 
      color="white"
      variant="outlined"
      @click="toggleLoginDialog()">
      Login
  </v-btn>
  <AuthLoginDialog />
</div>

</template>
<script setup>
import {useAuthStore} from '@/stores/auth';
const {user, loggedIn, toggleLoginDialog, logout} = useAuthStore();

</script>