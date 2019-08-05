<template>
  <q-page padding class='flex-center'>
    <div class='row'>
      <h4>Model Overview</h4>
    </div>
    <div class='row q-pa-md bg-grey-10 text-white'>
      <q-list dark bordered separator style='width: 100%'>
        <q-item>
          <q-item-section wrap>
            <q-item-label header>Model</q-item-label>
            <q-icon name="ion-water" color="white" size="34px" />
            <q-item-label class="q-mt-sm">Location Risk Score</q-item-label>
          </q-item-section>
          <q-item-section wrap>
            <q-item-label header>Status</q-item-label>
            <q-icon name="ion-checkmark-circle" color="green" size="34px" />
            <q-item-label class="text-white-8">
              <span class="text-weight-medium">Completed</span>
              <span class="text-8"> - 100% Data coverage</span>
            </q-item-label>
          </q-item-section>
          <q-item-section >
            <q-item-label header>Info</q-item-label>
            <q-item-label lines="1">
              <span class="text-weight-medium">Location Risk Model</span>
              <span class="text-grey-8"> - H2o</span>
            </q-item-label>
            <q-item-label caption lines="1">
              Get Location risk scores with Batch file or single location
            </q-item-label>
            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
              <span class="cursor-pointer">Open in Azure</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top >
            <q-item-label header>Actions</q-item-label>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" color="white"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="done" color="white" />
              <q-btn size="12px" flat dense round icon="more_vert" color="white"/>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style lang='stylus'>
// $
</style>
