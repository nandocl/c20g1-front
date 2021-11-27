import Vue from 'vue';

export async function guardarProyecto(data) {
    await Vue.axios.post('/proyecto', data).then(resp => {
        console.log(resp);
    }).catch(e => {
        console.log(e)
    });
};

export async function listProyectos() {
    return await Vue.axios.get('/proyecto', {limit: 5, page: 1}).then(resp => {
        return resp.data.proyectos;
    }).catch(e => {
        return
    });
};

export async function borrarProyecto(id) {
    return Vue.axios.delete(`/proyecto/${id}`).then(resp => {
        return resp.data.error;
    }).catch(e => {
        return true;
    });
};