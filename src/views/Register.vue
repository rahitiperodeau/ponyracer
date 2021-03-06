<template>
  <Alert dismissible
  @dismissed="registrationFailed = false" variant="alert alert-danger" v-if="registrationFailed" >Try again with another login</Alert>
  <form class="m-2" @submit.prevent="register()">
    <div class="mb-3">
      <label
        v-bind:class="{ 'text-danger': errors.login && dirty.login }"
        for="email"
        class="form-label"
        >Email</label
      >
      <input
        v-bind:class="{ 'is-invalid': errors.login && dirty.login }"
        @input="setDirtyProps('login')"
        v-model="userModel.login"
        id="email"
        name="email"
        class="form-control"
      />
      <div v-if="errors.login && dirty.login" class="alert alert-danger">
        The login is required
      </div>
    </div>
    <div class="mb-3">
      <label
        v-bind:class="{ 'text-danger': errors.password && dirty.password }"
        for="passwd"
        class="form-label"
        >Password</label
      >
      <input
        v-bind:class="{ 'is-invalid': errors.password && dirty.password }"
        @input="setDirtyProps('password')"
        v-model="userModel.password"
        id="passwd"
        name="passwd"
        class="form-control"
      />
      <div v-if="errors.password && dirty.password" class="alert alert-danger">
        The password is required
      </div>
    </div>
    <div class="mb-3">
      <label
        v-bind:class="{ 'text-danger': errors.birthYear && dirty.birthYear }"
        for="birthyear"
        class="form-label"
        >Birth year</label
      >
      <input
        v-bind:class="{ 'is-invalid': errors.birthYear && dirty.birthYear }"
        @input="setDirtyProps('birthYear')"
        v-model.number="userModel.birthYear"
        id="birthyear"
        name="birthyear"
        class="form-control"
      />
      <div
        v-if="errors.birthYear && dirty.birthYear"
        class="alert alert-danger"
      >
        The birthYear is required
      </div>
    </div>
    <button
      v-bind:class="{ disabled: Object.keys(errors).length > 0 }"
      class="btn btn-primary m-2"
    >
      Let's go
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import { UserModel } from "@/models/UserModel";
import {useUserService} from "@/composables/UserService.ts";
import {useRouter} from 'vue-router';

export default defineComponent({
  name: "Register",

  setup() {
    const router = useRouter();
    const registrationFailed = ref(false);
    const userModel = reactive({
      login: "",
      password: "",
      birthYear: new Date().getFullYear() - 18,
    });

    function register() {

        useUserService().register(userModel).then(() => {
          router.push('/');
        }).catch(() => {
          registrationFailed.value = true;
        })

    }

    const dirty = reactive<{ [K in keyof UserModel]: boolean }>({
      login: false,
      password: false,
      birthYear: false,
    });

    function setDirtyProps(p: string) {
      if (p == "login") {
        dirty.login = true;
      } else if (p == "password") {
        dirty.password = true;
      } else if (p == "birthYear") {
        dirty.birthYear = true;
      }
    }

    const errors = computed(() => {
      const errors: Partial<Record<keyof UserModel, boolean>> = {};

      if (!userModel.login) {
        errors.login = true;
      }
      if (!userModel.password) {
        errors.password = true;
      }
      if (!userModel.birthYear) {
        errors.birthYear = true;
      }
      return errors;
    });

    return { userModel, register, errors, dirty, setDirtyProps,registrationFailed };
  },
});
</script>
