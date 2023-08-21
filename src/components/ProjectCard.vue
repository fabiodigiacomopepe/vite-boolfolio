<script>
export default {
    name: "ProjectCard",
    props: {
        projects: Object,
        pages: Object
    }
}
</script>

<template>
    <div class="container">
        <h1>Progetti</h1>
        <ul>
            <li v-for="(project, index) in projects" :key="index">
                [{{ project.id }}] {{ project.nome }}
            </li>
        </ul>

        <div class="link-pagine">
            <div v-for="(page, index) in pages" :key="index" @click="$emit('cambiaPagina', page.url)" v-html="page.label"
                :class="(page.active ? 'attivo' : '') + (page.url == null ? 'nascondi' : '')">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    padding: 20px 40px;

    ul {
        list-style-type: none;
        font-size: 20px;
        margin-top: 10px;
    }

    .link-pagine {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        background-color: rgb(8, 24, 62);
        color: white;
        padding: 10px;
        width: 35%;

        div {
            cursor: pointer;
            padding: 8px;

            &:hover {
                color: black;
                background-color: white;
                padding: px;
            }

        }

        .attivo {
            background-color: white;
            color: black;
        }

        .nascondi {
            display: none;
        }
    }
}
</style>
