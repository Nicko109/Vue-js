import { createStore } from 'vuex';

import Person from './modules/person'
import axios from "axios";
import router from "../router";

const store = createStore({
    state() {
        return {
            count: 0,
            person: null,
            people: null
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        setPerson(state, person) {
            state.person = person
        },
        setPeople(state, people) {
            state.people = people
        },


    },
    actions: {
        incrementAsync(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        },
        getPerson({state, commit, dispatch}, id) {
            axios.get(`/api/people/${id}`)
                .then(res => {
                    commit('setPerson', res.data.data)
                })
        },
        getPeople({commit}) {
            axios.get('/api/people')
                .then(res => {
                    commit('setPeople', res.data.data)
                })
        },
        deletePerson({dispatch}, id) {
            axios.delete(`/api/people/${id}`)
                .then( res => {
                    dispatch('getPeople')
                })
        },
        update({}, data) {
            axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age, job: data.job})
                .then( res => {
                    router.push({ name: 'person.show', params: { id: data.id } })
                })
        },
        store({}, data) {
            axios.post('/api/people', {name: data.name, age: data.age, job: data.job})
                .then(res => {
                    router.push( { name: 'person.index'})
                })
        }




    },
    getters: {
        getCount(state) {
            return state.count;
        },
        person: state => {
            return state.person
        },
        people: state => {
            return state.people
        },

    },

    modules: {
        Person
    }
});

export default store;



