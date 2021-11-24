<template>
  <div>
    <b-navbar type="dark" variant="dark" class="header">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'home' }">Crear proyecto</b-nav-item>
        <b-nav-item :to="{ name: 'encurso' }">En curso</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header{
  padding-left: 15%;
}
</style>