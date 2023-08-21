<script>
import { store } from './store.js'
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'


export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        loadProjects(target) {
            axios.get(target)
                .then(response => {

                    const data = response.data;
                    console.log(data);

                    this.projects = data.projects;

                    console.log(this.projects);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.loadProjects('http://127.0.0.1:8000/api/v1/project-index');
    },
}
</script>

<template>
    <ProjectCard :details="this.projects" />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
