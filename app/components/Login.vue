<template>
    <Page class="page">
      <StackLayout class="form-container mt-48 mx-8">
        <Label text="Login" class="text-blue-500 text-3xl font-bold mb-6 ml-4"></Label>
  
        <TextField  hint="Email" class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
        <TextField  hint="Password" secure="true" class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
  
        <Button text="Login"  class="rounded-lg px-4 py-3 bg-blue-500 text-white"></Button>
 
        <GridLayout rows="auto, auto" columns="*, *" class="mt-6 ml-3">
   
          <Label row="0" col="0" text="Don't have an account? "  class="text-blue-700 ml-6"></Label>
          <Label row="0" col="1" text="SignUp" @tap="goSignup" class="text-blue-900 ml-2 font-bold"></Label>
        </GridLayout>
      </StackLayout>
    </Page>
  </template>
<script>
export default{
  methods: {
    goSignup() {
      this.$navigator.navigate('/signup', {clearHistory: true})
    }
  }
}
</script>