<template>

<v-dialog
  v-model="dialogs.login"
  persistent
  width="680"
>
<v-card
    class="mx-auto pa-4"
    width="500"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <v-avatar
        color="grey-darken-3"
        size="24"
        v-text="step"
        class="mr-3"
      ></v-avatar>
      
      <span>{{ currentTitle }}</span>

    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            v-model="email"
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
            v-model="code"
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
      v-if="error"
      class="mx-3"
      density="compact"
      type="warning"
      title="Oops!"
      :text="error"
    ></v-alert>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="step < 3"
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
const {dialogs, toggleLoginDialog, setLoggedInUser} = useAuthStore();

let email=ref("robconery@gmail.com");
let error=ref(false);
let step = ref(1);
let code = ref(null);


const nextStep = async () => {
  let result = {success: false};
  if(step.value === 1){
    result = await sendEmail();
    
    if(result.success) step.value++;
    else error.value = result.message;

  }else if(step.value === 2){
    result = await validateCode();
    if(result.success) {
      step.value++;

      //store the token returned
      setLoggedInUser({email: email, token: result.token, gravatar: result.gravatar});

      setTimeout(()=> {
        toggleLoginDialog();
        return;
      },1000);

    }else{
      error.value = result.message;
    }
  }


}

const currentTitle = computed(() => {
  switch (step.value) {
    case 1: return "We'll send you a link..."
    case 2: return "Enter your code"
    default: return "You're in!"
  }
})

let validateCode = async () => {
  const res = await fetch("/api/auth/validate-code", {
    method: "post",
    body: JSON.stringify({
      email: email.value,
      code: code.value
    })
  });
  return res.json();
}

let sendEmail = async () => {
  //check the email?
  const res = await fetch("/api/auth/send-link", {
    method: "post",
    body: JSON.stringify({email: email.value})
  });
  return await res.json();
};
</script>