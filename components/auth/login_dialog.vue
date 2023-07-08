<template>

<v-dialog
  v-model="dialogs.login"
  persistent
  width="680"
>
<v-card class="mx-auto pa-4" width="500" >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <v-avatar
        color="grey-darken-3"
        size="24"
        v-text="loginForm.step"
        class="mr-3"
      ></v-avatar>
      
      <span>{{ currentTitle }}</span>

    </v-card-title>

    <v-window v-model="loginForm.step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            v-model="loginForm.email"
          ></v-text-field>
          <span class="text-caption text-grey-darken-1">
            This is the email you used for your order
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <h3 class="mb-2">Code Sent!</h3>
          <v-text-field
            label="Code"
            v-model="loginForm.code"
          ></v-text-field>
          <span class="text-caption text-grey-darken-1">
            Please enter the 6-digit code sent to you
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">

          <div class="py-12 text-center">
            <v-icon
              class="mb-6"
              color="success"
              icon="mdi-check-circle-outline"
              size="128"
            ></v-icon>

            <h2 class="">You're in!</h2>
          </div>
        </div>
      </v-window-item>
    </v-window>

    <v-alert
      v-if="loginForm.error"
      class="mx-3"
      density="compact"
      type="warning"
      title="Oops!"
      :text="loginForm.error"
    ></v-alert>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="loginForm.step < 3"
        color="primary"
        variant="flat"
        @click="nextStep()"
      >
        Next
      </v-btn>
    </v-card-actions> 
  </v-card>
</v-dialog>

</template>
<script setup>

import {useAuthStore} from "@/stores/auth.js";
const {currentUser, dialogs, toggleLoginDialog, setLoggedInUser} = useAuthStore();

let loginForm = reactive({
  email: "robconery@gmail.com",
  error: false,
  step: 1,
  code: null
});

const nextStep = async () => {
  let result = {success: false};
  if(loginForm.step === 1){
    result = await sendEmail();
    
    if(result.success) loginForm.step++;
    else loginForm.error = result.message;

  }else if(loginForm.step === 2){
    result = await validateCode();
    if(result.success) {
      loginForm.step++;

       
      setTimeout(async function(){
        setLoggedInUser(result.data);
        toggleLoginDialog();
      }, 2000);
      
    }else{
      loginForm.error = result.message;
    }
  }
}

const currentTitle = computed(() => {
  switch (loginForm.step) {
    case 1: return "We'll send you a link..."
    case 2: return "Enter your code"
    case 3: return "You're in!"
  }
})

let validateCode = async () => {
  const res = await fetch("/api/auth/validate-code", {
    method: "post",
    body: JSON.stringify({
      email: loginForm.email,
      code: loginForm.code
    })
  });
  return res.json();
}

let sendEmail = async () => {
  //check the email?
  const res = await fetch("/api/auth/send-link", {
    method: "post",
    body: JSON.stringify({email: loginForm.email})
  });
  return await res.json();
};
</script>