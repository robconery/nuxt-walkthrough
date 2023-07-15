<template>
<div>
  <div v-if="user">
    <v-btn 
        color="orange"
        icon="mdi-logout-variant"
        title="Logout"
        @click="logout">
    </v-btn>
    <v-avatar class="mr-4" >
      <v-img
        :src="gravatar"
        alt="User Menu"
      />
    </v-avatar>
  </div>
  <div v-else>
    <v-btn class="mr-4" 
        color="white"
        variant="outlined"
        to="/login">
        Login
    </v-btn>
  </div>
</div>
</template>
<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
import md5 from "blueimp-md5";

const gravatar = computed(() => {
  if(user.value){
    const hash = md5(user.value.email.toLowerCase().trim());
    return `https://secure.gravatar.com/avatar/${hash}?size=150`;
  }
});

const logout = async function(){
  await supabase.auth.signOut();
  location.href="/";
}

</script>