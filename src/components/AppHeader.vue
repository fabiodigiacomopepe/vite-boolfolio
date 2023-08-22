<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <div class="container">
        SONO UN HEADER
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
}
</style>
