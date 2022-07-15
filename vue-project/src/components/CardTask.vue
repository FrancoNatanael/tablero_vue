<script>
    export default{
        name:'Card',
        props:['id','titulo','descripcion','asignado','estado'],
        methods:{
            eliminarTarea(){
                this.$store.dispatch("deleteTask",this.id)
            },
            moverHacer(){
                this.$store.dispatch("cambiarHacer",this.id)
            },
            moverProgreso(){
                this.$store.dispatch("cambiarProgreso",this.id)
            },
            moverFinalizadas(){
                this.$store.dispatch("cambiarFinalizadas",this.id)
            }
        }
    }
</script>

<template>
    <article class="tarea">
        <h3>{{titulo}}</h3>
        <div class="info">
            <p>Codigo de tarea : {{id}} | <br/><br/>Persona asignada : {{asignado}}</p>
            <p class="descripcion">{{descripcion}}</p>
        </div>

        <div>
        <button @click="eliminarTarea" class="eliminar">x</button>

        
        <button v-if="estado!=0 && estado!=-1" @click="moverHacer" class="mover por-hacer">Tarea por hacer</button>
        <button v-if="estado!=1 && estado!=-1" @click="moverProgreso" class="mover progreso" >Tarea en progreso</button>
        <button v-if="estado!=2 && estado!=-1" @click="moverFinalizadas" class="mover finalizada">Tarea finalizada</button>
        </div>

    </article>
</template>

<style scoped>
.tarea{
    border: solid 3px rgb(69, 68, 68);
    border-radius: 5px;
    padding: 3px;
    margin-bottom: 10px;
}
.tarea h3{
    font-weight: normal;
    font-size: 20px;
    border-bottom: solid 1px black;
}
.descripcion{
    background-color: #e8dac4;
    padding: 3px;
    border-radius: 3px;
}
.eliminar{
    border: none;
    padding: 8px;
    font-size: 15px;
    text-align: center;
    width: 10%;
    color: white;
    background-color:#ef3e1c;
    margin-right: 6px;
    margin-bottom: 10px;
    transition: all 0.5s;
}
.eliminar:hover{
    cursor: pointer;
    opacity: 0.9;
}

.mover{
    border: none;
    padding: 8px;
    font-size: 14px;
    text-align: center;
    width: 42%;
    margin-right: 5px;
    color: white;
    transition: all 0.5s;
}
.mover:hover{
    cursor: pointer;
    opacity: 0.9;
}
.finalizada{
    background-color: #047b6c;
}
.progreso{
    background-color: #341c86;
}
.por-hacer{
    background-color: #fe976f;
}
</style>
