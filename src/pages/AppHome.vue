<script>
import { store } from './../store'
import axios from 'axios'
import AppProject from './AppProject.vue'


export default {
    components: {
        AppProject,
    },
    data() {
        return {
            projects: [],
            pages: [],
        }
    },
    methods: {
        loadPage(target) {
            if (target == null) return;
            this.loadProjects(target);
        },
        loadProjects(target) {
            axios.get(target)
                .then(response => {

                    const data = response.data.projects;
                    console.log(data);

                    this.projects = data.data;
                    this.pages = data.links;

                    console.log(this.projects);
                    console.log(this.pages);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.loadProjects('http://127.0.0.1:8000/api/v1/project-index');
    },
}
</script>

<template>
    <AppProject :projects="this.projects" :pages="this.pages" @cambiaPagina="loadPage" />
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
</style>
