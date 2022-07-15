import { createStore } from 'vuex'


const store = createStore({
  strict:true,
  state:{
    tareas:[],
  },
  mutations: {
   addTask(state,tarea){
    state.tareas.push(tarea);
    
   },
   delete(state,id){
    cambiarEstado(state,id,"-1")
    
   },
   hacer(state,id){
    cambiarEstado(state,id,"0")
   },
   progreso(state,id){
    cambiarEstado(state,id,"1")
   },
   finalizadas(state,id){
    cambiarEstado(state,id,"2")
   }
  },
  actions: {
     createTask(context,tarea){
        context.commit("addTask",tarea)
     },
     deleteTask(context,id){
        context.commit("delete",id)
     },
     cambiarHacer(context,id){
      context.commit("hacer",id)
     },
     cambiarProgreso(context,id){
      context.commit("progreso",id)
     },
     cambiarFinalizadas(context,id){
      context.commit("finalizadas",id)
     }
  },
  getters:{
    getTasks(state){
      console.log(state.tareas);
      return state.tareas
    }
  }
})

function cambiarEstado(state,id,estado) {
  for(let i=0;i<state.tareas.length;i++){
    if(state.tareas[i].id==id){
      state.tareas[i].estado=estado
    }}
}


export default store;