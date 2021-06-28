<template>
  <div class="p-fluid full-width">
    <div class="p-field">
      <label for="groupName" class="p-sr-only">Group Name</label>
      <InputText id="groupName" type="text" placeholder="Group Name" />
    </div>
    <div class="p-field">
      <label for="hostName" class="p-sr-only">Host Name</label>
      <InputText id="host Name" type="text" placeholder="Host Name" />
    </div>
    <Button type="button" label="Create Room" />
  </div>
</template>
<script>
export default {
  name: "CreateRoom"
};
</script>
<style scoped>
.full-width {
  width: 100%;
}
</style>