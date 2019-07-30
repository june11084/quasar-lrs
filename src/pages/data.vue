<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col-lg-12">
        <q-uploader
          url="http://localhost:8080/upload"
          label="Upload File"
          multiple
        />
      </div>
      <div class="col-lg-12">
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
 .col-lg-12 + .col-lg-12
  margin-top 2rem
</style>

<script>
export default {
  // name: 'PageName',
}
</script>
