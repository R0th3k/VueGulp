import Vue from 'vue/dist/vue.js'
Vue.config.productionTip = true;


Vue.mixin({
  data: function() {
      return {
          url:'https://hektor.mx/ginger/',
      }
  },
  created: function() {},
  mounted:function(){ },
  methods:{},
})//end mixin

import HolaMundo from './components/HolaMundo.vue';

new Vue({
  el:'#app',
  components:{
    HolaMundo
  },
  data:{
    mensaje: 'Hola Vue!',
  },
  methods:{
    
  },
  mounted(){
   
  },
  created(){
    
  },
  watch:{
    
  }
  
})

import './app.js';
