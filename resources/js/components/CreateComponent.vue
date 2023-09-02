<template>
<div class="w-25">
    <div class="mb-3">
        <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
    </div>
    <div class="mb-3">
        <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
    </div>
    <div class="mb-3">
        <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
    </div>
    <div class="mb-3">
        <input @click.prevent="addPerson" class="btn btn-primary" value="Add">
    </div>
    <SinglePostComponent :obj="obj"></SinglePostComponent>

</div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";
export default {
    name: "CreateComponent",

    data() {
        return{
            name: null,
            age: null,
            job: null,
            obj: {
                color: 'yellow',
                age: 50,
                obj: false,
            }
        }
    },

    mounted() {
        this.$parent.$refs.index.indexLog();
    },

    methods: {
        addPerson() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
            .then( res => {
                   this.name = null
                   this.age = null
                   this.job = null
                console.log(res);
            })
        }
    },

    components: {
        SinglePostComponent
    }

}

</script>

<style scoped>

</style>
