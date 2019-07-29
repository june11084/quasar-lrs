<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <div class="col">
        <q-uploader
          url="http://localhost:8080/upload"
          label="Upload File"
          multiple
          style="max-width: 300px"
        />
      </div>
      <div class="col" >
        <q-btn @click="getScoreApi" color="primary" label="Get Score"/>
      </div>
      <div class="col">
        <q-item-label>{{getScore()}}</q-item-label>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
 .col + .col
  margin-top 5rem
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageScore',
  methods: {
    ...mapGetters('score', [
      'getScore'
    ]),
    ...mapActions('score', [
      'getScoreApi'
    ]),
    getScore: function () {
      console.log('getscore local ran')
      console.log(this.$store.getters['score/getScore'])
      return Number(Object.values(this.$store.state.score))
    }
  }
}
</script>
