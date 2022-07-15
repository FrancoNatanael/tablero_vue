<script>
    import CardTask from './CardTask.vue'

    export default{
        name:'TareasEnProgreso',
        data(){
            return {
                desplegable:false
            }
        },
        components:{
            CardTask,
          
        },
        computed:{
            getTareas(){

                let tareas = this.$store.getters.getTasks
                return tareas.filter(tarea => tarea.estado == 1);
            },
           
        }
    }
</script>

<template>
    <div>
    <h2>Tareas en progreso</h2>
    <CardTask
        v-for="tarea in getTareas"
        :titulo="tarea.titulo"
        :id="tarea.id"
        :asignado="tarea.asignado"
        :descripcion="tarea.descripcion"
        :estado="tarea.estado"
    /> 
  </div>
</template>

<style scoped>
h2{
    text-align: center;
}
</style>
