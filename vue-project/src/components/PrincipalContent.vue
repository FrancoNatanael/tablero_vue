
<script>
import TareasPorHacer from './TareasPorHacer.vue'
import TareasEnProgreso from './TareasEnProgreso.vue'
import TareasListas from './TareasListas.vue'
    export default{
        name:'PrincipalContent',
        components:{
            TareasPorHacer,
            TareasEnProgreso,
            TareasListas
        },
        methods:{

        }

    }
</script>

<template>

    <div class="contenido">
     <TareasPorHacer class="cont"/>
     <TareasEnProgreso class="cont"/>
     <TareasListas class="cont"/>
    </div>

</template>

<style scoped>
*{
    margin: 0;
    
}
.contenido{
    display: flex;
    justify-content: space-around;
    
}
.cont{
    width: 30%;
    background-color: white;
    padding: 0 10px;
    margin-bottom: 50px;
}
</style>
