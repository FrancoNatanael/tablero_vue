<script>
  import PrincipalContent from './components/PrincipalContent.vue'
  import Add from './components/AddTask.vue'
  export default{
    name:'App',
    components:{
      Add,
      PrincipalContent
    }
  }
</script>

<template>
<body>
    <div id="contenido">
    <Add id="add"/>
    <PrincipalContent id="cont_principal"/>
    </div>
</body>
  
  
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  
}
body{
  padding: 10px;
  background-image: url('img/back.jpg');
  background-size: cover;

}

#contenido{
  display: flex;
  justify-content: space-around;

}
#add{
  width: 24%;

}
#cont_principal{
  width: 74%;
  margin-bottom: 600px;
}
</style>
