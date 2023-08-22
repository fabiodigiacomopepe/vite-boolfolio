<script>
import axios from 'axios'

export default {
    name: "AppProjectDetails",
    data() {
        return {
            project: [],
            type: [],
            path_url: "http://127.0.0.1:8000/api/v1"
        }
    },
    mounted() {
        const projectId = this.$route.params.id;
        console.log(projectId);

        axios.get(this.path_url + '/project-detail/' + projectId)
            .then(response => {
                this.project = response.data.project;
                this.type = response.data.project.type;
                console.log(this.project, 'INFO');
            }).catch(error => {
                console.error(error);
            });
    },
}
</script>

<template>
    <div class="container">
        <h1>{{ project.nome }}</h1>
        <div>Framework: {{ project.framework }}</div>
        <div>Versione: {{ project.versione }}</div>
        <div>Deployato: {{ (project.deployato == 1) ? 'Sì' : 'No' }}</div>
        <div>Tipo: {{ type.nome }}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    padding: 20px;
}
</style>
