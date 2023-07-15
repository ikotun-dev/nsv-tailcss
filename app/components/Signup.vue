<template>
    <Page class="page">
      <StackLayout class="form-container mt-32 mx-8">
        <Label text="SignUp" class="text-blue-500 text-3xl font-bold mb-6 ml-4"></Label>
  
        <TextField  hint="Fullname" class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
        <TextField  hint="Password"  class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
        <TextField  hint="Phone"  class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
        <TextField  hint="Occupation"  class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
        <TextField  hint="Location" secure="true" class="border-4 border-blue-800 rounded-lg px-4 py-3 mb-4 outline-none bg-white text-black focus:border-blue-950 focus:border-4"></TextField>
  
        <Button text="Signup"  class="rounded-lg px-4 py-3 bg-blue-500 text-white"></Button>
      </StackLayout>
    </Page>
  </template>
