import Vue from 'vue';

export async function guardarProyecto(data) {
    await Vue.axios.post('/proyecto', data).then(resp => {
        console.log(resp);
    }).catch(e => {
        console.log(e)
    });
};