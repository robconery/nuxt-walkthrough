<template>
  <div>

    <SiteNav />
    <v-layout>
      <v-container style="max-width:1280px" class="py-12 my-12">
        <v-card class="mx-auto pa-4" width="500" >
          <v-card-title class="text-h6 font-weight-regular justify-space-between">
            
            <h2>We'll send a login link...</h2>

          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Email"
              v-model="loginForm.email"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
              This is the email you used for your order
            </span>
          </v-card-text>

          <v-alert
            v-if="loginForm.error"
            class="mx-3"
            density="compact"
            type="warning"
            title="Oops!"
            :text="loginForm.error"
          ></v-alert>

          <v-alert
            v-if="loginForm.success"
            class="mx-3"
            density="compact"
            type="success"
            title="Link Sent!"
            text="Check email for your link. Make sure to check spam."
          ></v-alert>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loginForm.loading"
              append-icon="mdi-email"
              color="primary"
              variant="flat"
              @click="handleLogin()">
              Send Link
            </v-btn>
          </v-card-actions> 
        </v-card>
      </v-container>
    </v-layout>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();

let loginForm = reactive({
  email: "robconery@gmail.com",
  error: false,
  loading: false,
  success: false
});

const handleLogin = async () => {
  try {
    loginForm.loading = true
    const { error } = await supabase.auth.signInWithOtp({ email: loginForm.email })
    if (error) throw error
    loginForm.success = true;
  } catch (error) {
    loginForm.error = (error.error_description || error.message);
  } finally {
    loginForm.loading = false
  }
}

</script>