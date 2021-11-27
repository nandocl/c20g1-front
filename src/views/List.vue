<template>
  <div>
    <b-container class="pt-5 pb-5">
      <div class="mb-5 h2">Lista de proyecto</div>
      <b-row>
        <b-col>
            <b-table striped hover :items="proyectosList" :fields="fields">
                <template #cell(actions)="row">
                    <button class="btn btn-dark me-2" @click="detalles(row)">Ver</button>
                    <button class="btn btn-danger" @click="borrar(row)">Borrar</button>
                </template>
            </b-table>
        </b-col>
      </b-row>
      <b-row>
          <div class="mb-5 h2">Detalles</div>
          <b-col>
              Nombre: {{name}}
          </b-col>
          <b-col>
              Cliente: {{client}}
          </b-col>
          <b-col>
              Fecha: {{fechaEstimada}}
          </b-col>
          <b-col>
              Responsable: {{responsable}}
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <b-table striped hover :items="insumo" :fields="[{key:'insName', label: 'Nombre'}, 'cantidad']" caption-top>
                  <template #table-caption>Insumos</template>
              </b-table>
          </b-col>
           <b-col>
              <b-table striped hover :items="materiaPrima" :fields="[{key:'matPrim', label: 'Nombre'}, 'dims']" caption-top>
                  <template #table-caption>Materiales</template>
              </b-table>
          </b-col>
          <b-col>
              <b-table striped hover :items="herramientas" :fields="[{key:'name', label: 'Nombre'}, 'process']" caption-top>
                  <template #table-caption>Herramientas</template>
              </b-table>
          </b-col>
          <b-col>
              <b-table striped hover :items="procesos" :fields="[{key:'name', label: 'Nombre'}]" caption-top>
                  <template #table-caption>Etapas</template>
              </b-table>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import * as processController from '../controllers/proceso.controller'

export default {
  name: 'List',
  data() {
      return {
        fields: [
            { key: 'name', label: 'Nombre' },
            { key: 'responsable', label: 'Responsable' }, 
            { key: 'fechaEstimada', label: 'Fecha estimada' }, 
            { key: 'actions', label: 'Acciones' }],
        name: "",
        client: "",
        fechaEstimada: "",
        responsable: "",
        proyectosList: [],
        herramientas: [],
        insumo: [],
        materiaPrima: [],
        procesos: [],
      }
  },
  mounted() {
    processController.listProyectos().then(list => {
        this.proyectosList = list
    }).catch(e => {
        alert('Error obteniendo la lista de proyectos')
    });
  },
  methods: {
      async detalles(row){
          this.name = this.proyectosList[row.index].name
          this.client = this.proyectosList[row.index].client
          this.fechaEstimada = this.proyectosList[row.index].fechaEstimada
          this.responsable = this.proyectosList[row.index].responsable
          this.insumo = this.proyectosList[row.index].insumo
          this.materiaPrima = this.proyectosList[row.index].materiaPrima
          this.herramientas = this.proyectosList[row.index].herramientas
          this.procesos = this.proyectosList[row.index].procesos
      },
      async borrar(row){
        const prj = await processController.borrarProyecto(this.proyectosList[row.index].proyectoId);
        if(!prj) {
            for(let i = 0; i < this.proyectosList.length; i++){
                if(this.proyectosList[i].proyectoId == this.proyectosList[row.index].proyectoId){
                    this.proyectosList.splice(i, 1);
                    break;
                }
            }
            alert('Proyecto borrado exitosamente');
        }
        else alert('Proyecto no borrado');
      }
  }
}

</script>