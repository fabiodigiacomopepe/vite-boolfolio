<script>
export default {
  name: "ProjectCard",
  props: {
    details: Object
  }
}
</script>

<template>
  <div>
    <h1>Progetti</h1>
    <ul>
      <li v-for="project in details" :key="project.id">
        [{{ project.id }}] {{ project.nome }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

div {
  padding: 20px 40px;

  ul {
    list-style-type: none;
    font-size: 20px;
    margin-top: 10px;
  }
}
</style>
