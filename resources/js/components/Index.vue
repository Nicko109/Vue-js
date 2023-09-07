<template>
    <div id="app">
        <router-link :to="{ name: 'person.index'}" class="m-3">People</router-link>

        <router-link :to="{ name: 'person.create'}">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {}
    },

    mounted() {
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
