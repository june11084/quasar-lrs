<template>
  <q-layout view= "hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Location Risk Score
        </q-toolbar-title>
        <q-btn dense flat no-wrap>
          <q-avatar rounded size="30px" icon="person"></q-avatar>
          <q-icon name="arrow_drop_down" size="16px" />

          <q-menu auto-close>
            <q-list dense>
              <q-item class="GL__menu-link-signed-in">
                <q-item-section>
                  <div>Signed in as <strong>Mary</strong></div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Your profile</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Your projects</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Help</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Sign out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      elevated
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-expansion-item label="Methods" default-opened>
          <q-item clickable tag="a" to='/data'>
            <q-item-section avatar>
              <q-icon name="insert_drive_file " />
            </q-item-section>
            <q-item-section>
              <q-item-label>Data</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" to='/models'>
            <q-item-section avatar>
              <q-icon name="insert_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Models</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" to='/score'>
            <q-item-section avatar>
              <q-icon name="score" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Scores</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" to="/logs">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Logs</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
            <q-item-section avatar>
              <q-icon name="map" />
            </q-item-section>
            <q-item-section>
              <q-item-label>MAGGIE</q-item-label>
              <q-item-label caption>quasar.dev</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" target="_blank" href="https://boxworkbench.eastus.cloudapp.azure.com/BoxWorkbench/login">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Prototype</q-item-label>
              <q-item-label caption>The Box</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" to='/defaults'>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Defaults</q-item-label>
              <q-item-label caption>quasar.dev</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    onMainClick () {
      console.log('Clicked on main button')
    },

    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}
</script>

<style lang="stylus">
  .GL
  &__select-GL__menu-link
    .default-type
      visibility hidden
    &:hover
      background #0366d6
      color white
      .q-item__section--side
        color white
      .default-type
        visibility visible
  &__toolbar-link
    a
      color white
      text-decoration none
      &:hover
        opacity 0.7
  &__menu-link:hover
    background #0366d6
    color white
  &__menu-link-signed-in
  &__menu-link-status
    &:hover
      & > div
        background white !important
  &__menu-link-status
    color $blue-grey-6
    &:hover
      color $light-blue-9
  &__toolbar-select.q-field--focused
    width 450px !important
    .q-field__append
      display none
</style>
