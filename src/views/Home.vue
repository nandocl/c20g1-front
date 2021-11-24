<template>
  <div>
    <b-container class="pt-5 pb-5">
      <div class="mb-5 h2">Creacion de proyecto</div>
      <b-row>
        <b-col cols="3">
          <b-input-group-text class="m-2" label="Enter your name">
            <b-form-input placeholder="Nombre del proyecto" v-model="textData.prjName"></b-form-input>
          </b-input-group-text>
          <b-input-group-text class="m-2">
            <b-form-input placeholder="Responsable" v-model="textData.resp"></b-form-input>
          </b-input-group-text>
          <b-input-group-text class="m-2">
            <b-form-input placeholder="Cliente" v-model="textData.client"></b-form-input>
          </b-input-group-text>
          <b-input-group-text class="m-2">
            <b-form-input placeholder="Fecha estimada (aaaa/mm/dd)" v-model="textData.date"></b-form-input>
          </b-input-group-text>
        </b-col>
        <b-col cols="3">
          <label>Procesos</label>
          <div v-if="procesos.length == 0">No hay procesos</div>
          <b-table striped hover :items="procesos"></b-table>
          <b-row>
            <b-col><b-form-input v-model="procesoName" placeholder="Proceso"></b-form-input></b-col>
            <b-col><b-button @click="addProceso">Agregar</b-button></b-col>
          </b-row>
        </b-col>
        <b-col>
          <label>Herramientas</label>
          <div v-if="herramientas.length == 0">No hay herramientas</div>
          <b-table striped hover :items="herramientas"></b-table>
          <b-row>
            <b-col><b-form-input v-model="herramienta.name" placeholder="Herramienta"></b-form-input></b-col>
            <b-col><b-form-input v-model="herramienta.process" placeholder="Proceso"></b-form-input></b-col>
            <b-col><b-button @click="addHerramienta">Agregar</b-button></b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <label>Insumos</label>
          <div v-if="insumos.length == 0">No hay insumos</div>
          <b-table striped hover :items="insumos"></b-table>
          <b-row>
            <b-col><b-form-input v-model="insumo.insName" placeholder="Insumo"></b-form-input></b-col>
            <b-col><b-form-input v-model="insumo.cantidad" placeholder="Cantidad"></b-form-input></b-col>
            <b-col><b-button @click="addInsumo">Agregar</b-button></b-col>
          </b-row>
        </b-col>
        <b-col>
          <label>Materias primas</label>
          <div v-if="primas.length == 0">No hay materias primas</div>
          <b-table striped hover :items="primas"></b-table>
          <b-row>
            <b-col><b-form-input v-model="prima.matPrim" placeholder="Proceso"></b-form-input></b-col>
            <b-col><b-form-input v-model="prima.dims" placeholder="Dimension"></b-form-input></b-col>
            <b-col><b-button @click="addPrima">Agregar</b-button></b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <b-form-textarea
            id="textarea"
            v-model="anotacion"
            placeholder="Anotaciones"
            rows="3"
            max-rows="6">
          </b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="mt-5">
          <b-row align-v="center">
            <b-col><b-button variant="primary" @click="crearPj">Crear proyecto</b-button></b-col>
          </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import * as processController from '../controllers/proceso.controller'

export default {
  name: 'Home',
  components: {
    
  },
    data() {
      return {
        textData: {
          prjName: "",
          resp: "",
          client: "",
          date: ""
        },
        procesoName: "",
        herramienta: {name: "", process: ""},
        insumo: {cantidad: 0, insName: ""},
        prima: {matPrim: "", dims: ""},
        procesos: [],
        herramientas: [],
        insumos: [],
        primas: [],
        anotacion: "",
      }
    },
    methods: {
      addProceso(){
        this.procesos.push(this.procesoName)
        this.procesoName = ''
      },
      addHerramienta(){
        this.herramientas.push({name: this.herramienta.name, process: this.herramienta.process})
        this.herramienta.name = ''
        this.herramienta.process = ''
      },
      addInsumo(){
        this.insumos.push({insName: this.insumo.insName, cantidad: parseInt(this.insumo.cantidad)})
        this.insumo.insName = ''
        this.insumo.cantidad = ''
      },
      addPrima(){
        this.primas.push({matPrim: this.prima.matPrim, dims: this.prima.dims})
        this.prima.matPrim = ''
        this.prima.dims = ''
      },
      crearPj(){
        const project = {name: this.textData.prjName, responsable: this.textData.resp, client: this.textData.client, fechaEstimada: this.textData.date, procesos: this.procesos, herramientas: this.herramientas, insumo: this.insumos, materiaPrima: this.primas, anotaciones: this.anotacion, archivos: [{ docName: 'Doc v 1', docUrl: 'http//...' }]}

        console.log(project)

        processController.guardarProyecto(project).then(res => {
          const proyectoResp = res;
        }).catch(err => {
          console.log(err)
        })
      },
    }
}
</script>