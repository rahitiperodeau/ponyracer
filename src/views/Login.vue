<template>
  <Field name="loginField" rules="required" v-slot="{ field, meta }">
    <div class="mb-3">
      <label class="form-label" for="login">Login</label>
      <input id="login" class="form-control" v-bind="field" />
      <ErrorMessage name="loginField" class="invalid-feedback" />
    </div>
  </Field>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import '@/forms';
export default defineComponent({
  name: "Login",
});
</script>
