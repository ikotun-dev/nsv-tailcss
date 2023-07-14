<template>
    <Page class="bg-blue-500">
        <ActionBar class="bg-blue-500">
            <Label  class="text-white text-bold"/>
        </ActionBar>

        <GridLayout class="bg-blue-500 flex items-center justify-center" verticalAlignment="center" horizontalAlignment="center">
            <Label text="LivingPro" class="text-3xl  text-white font-bold" />
        </GridLayout>

          </Page>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/signup-login');
    }, 3000); // Switch to signup-login route after 3 seconds (adjust the time as needed)
  }
};
</script>