<script>
import { store } from './store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'

export default {
    components: {
        AppHeader
    }
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
