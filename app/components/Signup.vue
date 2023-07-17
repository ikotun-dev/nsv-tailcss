<template>
    <Page class="bg-green-500">
      <StackLayout class="p-8">
        <Label text="SignUp" class="text-white text-3xl font-bold mb-6"></Label>
  
        <TextField hint="Name" class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black"></TextField>
        <TextField hint="Email" class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black"></TextField>
        <TextField hint="Phone" class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black"></TextField>
        <TextField hint="Occupation" class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black"></TextField>
  
        <TextField
          hint="Location"
          class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black"
          readonly
          @tap="showLocationDropdown"
          :text="selectedLocation.name"
        ></TextField>
  
        <ListPicker v-if="showDropdown" v-model="selectedLocation" :items="locationOptions" class="border-2 border-white rounded-lg px-4 py-3 mb-4 bg-white text-black">
          <template #item="props">
            <Label :text="props.item.name" />
          </template>
        </ListPicker>
  
        <Button text="Signup" class="rounded-lg px-4 py-3 bg-white text-green-500"></Button>
      </StackLayout>
    </Page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        locationOptions: [
          { id: 1, name: 'Abuja' },
          { id: 2, name: 'Lagos' },
          { id: 3, name: 'Ibadan' },
          { id: 4, name: 'Ogun' },
        ],
        selectedLocation: { id: null, name: '' },
        showDropdown: false,
      };
    },
    methods: {
      showLocationDropdown() {
        this.showDropdown = !this.showDropdown;
      },
    },
  };
  </script>
  