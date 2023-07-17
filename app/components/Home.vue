<template>
    <Page class="bg-gray-500">
        <ActionBar class="bg-gray-500">
            <Label  class="text-white text-bold"/>
        </ActionBar>

        <StackLayout class="bg-gray-500 flex items-center justify-center" verticalAlignment="center" horizontalAlignment="center">
            <Label text="Cohabitat" class="text-3xl  text-white font-bold" />
            <!-- <Button text="login" class="bg-black" @tap="$navigator.navigate('/login', {clearHistory : True})" /> -->
        </StackLayout>

          </Page>
</template>
<script>
export default{
  mounted(){
    setTimeout(() => {
      this.$navigator.navigate('/login', {clearHistory : true})
    }, 3000)
  }
}

</script>

