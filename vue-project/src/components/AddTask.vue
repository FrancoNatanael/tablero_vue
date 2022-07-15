<template>
    <div class="agregar">
        <form action="" @submit.prevent="agregarTarea">
            <h1>Agregar Tarea</h1>

            <div class="input_label">

            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" placeholder="Titulo de la tarea" v-model="titulo" required></div>
            <div class="input_label">
            <label for="codigo">Codigo</label>
            <input type="number" name="codigo" placeholder="Codigo de la tarea" v-model="codigo" required> </div>
            <div class="input_label">
            <label for="as">Asignado</label>
            <input type="text" name="as" placeholder="Persona asignada" v-model="asignado" required></div>
            <div class="input_label">
            <label for="de">Descripcion</label>
            <input type="text" name="de" placeholder="Descripcion" v-model="descripcion" required></div>
            <div class="input_label">
            <label for="estado">Estado</label>
            <select id="estado" v-model="estado" required>
                <option value="" selected>Indicar estado...</option>
                <option value="0">Por hacer</option>
                <option value="1">En progreso</option>
                <option value="2">Terminada</option>
            </select>
            </div>
            <div class="button">
            <button type="submit">Agregar</button>
            </div>
        </form>
        
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    form h1{
        font-size: 25px;
    }
    .input_label{
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }
    .input_label label{
        width: 40%;
        font-size: 20px;
    }
    .input_label input, select{
        width: 70%;
        padding: 8px;
        font-size: 15px;
        border-radius: 5px;
        border: solid 2px rgb(192, 192, 192);
    }
    .button{
        padding: 5px;
    }
    button{
        width: 30%;
        padding: 8px;
        font-size: 15px;
        border: none;
        background-color: brown;
        color: white;
        border-radius: 3px;
    }
    button:hover{
        cursor: pointer;
        opacity: 0.9;
    }
</style>
<script>
    
    export default{
        name:'AddTask',
        data(){
            return{
                titulo:"",
                codigo:"",
                asignado:"",
                descripcion:"",
                estado:""
            }
        },
        methods:{
            agregarTarea(){

                let tarea = {
                    id:this.codigo,
                    titulo:this.titulo,
                    descripcion:this.descripcion,
                    asignado:this.asignado,
                    estado:this.estado
                }

                this.$store.dispatch("createTask",tarea);
                this.titulo=this.codigo=this.asignado=this.estado=this.descripcion=""
                

            }
        }
    }
</script>


