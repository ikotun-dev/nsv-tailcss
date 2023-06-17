<template>
    <Page>
        <ActionBar class="bg-blue-500">
            <Label text="Home" class="text-white text-bold"/>
        </ActionBar>

        <GridLayout class="styled-div">
      <Label text="Content goes here" class="text-lg" />
    </GridLayout>

          <StackLayout class="p-10 bg-gray-300">
          <StackLayout class="bg-blue-300 border-2 rounded-lg h-36">
          <Label text="changes"/>
          </StackLayout>
      <Label text="First Name" class="text-sm font-mono" />
      <TextField v-model="firstName" class="input-field" />

      <Label text="Last Name" class="text-lg" />
      <TextField v-model="lastName" class="input-field" />

      <Label text="Username" class="text-lg" />
      <TextField v-model="username" class="input-field" />

      <Label text="Password" class="text-lg" />
      <TextField v-model="password" secure class="input-field" />

      <Label text="Confirm Password" class="text-lg" />
      <TextField v-model="confirmPassword" secure class="input-field" />

      <Button text="Submit" @tap="submitForm" class="btn-primary mt-10" />
    </StackLayout>

          </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
    .styled-div {
  @apply border-2 border-black h-48 bg-gray-200 p-4;
}

</style>
