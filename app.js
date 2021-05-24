new Vue({
  el: '#app',//elemento pai(div)
  data(){//armazenamos os dados da nossa aplicação
    return{
      running:false,//atributo que informa se o jogo esta iniciado
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
    //esta função inicia o jogo
    startGame(){
      this.running = true//muda o valor de "jogo iniciado"" para true
      this.playerLife = 100//altera o valor do jogador para 100%
      this.monsterLife = 100//altera o valor do monstro para 100%
    },

    attack(especial){
      //console.log(especial,this.getRandom(5,10));
      this.hurt('playerLife',7,12,false);
      this.hurt('monsterLife',7,12,especial);
    },
     hurt(prop,min,max,especial){
       const plus = especial ? 5 : 0;
       const hurt = this.getRandom(min + plus,max+plus);
       this[prop] = Math.max(this.playerLife - hurt,0);
     },
     healAndHurt(){
      this.heal(10,15);
      this.hurt('playerLife',7,12,false);
     },
     heal(min,max){
       const heal = this.getRandom(min,max);
       this.playerLife = Math.min(this.playerLife + heal,100);
     },
    getRandom(min,max){
      const value = Math.random() * ( max-min ) + min;
      return Math.round(value);
    }
  },
 
  watch:{
   hasResult(value){
     if(value) this.running = false;
   }
  }
})