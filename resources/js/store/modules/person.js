import axios from "axios";

const state = {

}
const getters = {

}

const actions = {



}


const mutations = {
    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then( res => {
                dispatch('getPeople')
            })
    }

}
export default {
    state,
    getters,
    mutations,
    actions
};
