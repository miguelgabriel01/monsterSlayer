new Vue({
  el: '#app',//elemento pai(div)
  data(){//armazenamos os dados da nossa aplicação
    return{
      running:true,//atributo que informa se o jogo esta iniciado
     playerLife:0,//salvamos nesta variavel o valor que corresponde a vida inicial do jogador
     monsterLife:10,//salvamos nesta variavel o valor que corresponde a vida inicial do jogador
    }
  },
  computed:{
   // função que valida se existe um resultado
   //basicamente ela retorna uma condição como verdadeira caso o jogador ou monsro morreu
   hasResult(){
    return this.playerLife == 0 || this.monsterLife == 0;
  }
  },
  methods:{
    startGame(){
      this.running = true
      this.playerLife = 100
      this.monsterLife = 100
    }
  },
  watch:{

  }
})