class Forca {
  
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.resultado = "aguardando chute";
    this.letrasChutadas=[]
    this.vidas = 6
    this.palavra=[]
    for (let i of this.palavraSecreta) {this.palavra.push("_")}
  }

    // array(palavraSecreta.length).fill('_') comentei pq da outra forma fica melhor
    //chutar que recebe o parametro letra, quero armazenar as letras chutadas, sempre q teclar uma letra a função chutar deve ser chamada

  chutar(letra) { 
    if(letra.length === 1 && this.palavraSecreta.includes(letra) == false && this.letrasChutadas.includes(letra) == false){
      this.letrasChutadas.push(letra);
      this.vidas--;
    }
    
    if(letra.length === 1 && this.palavraSecreta.includes(letra) == true && this.letrasChutadas.includes(letra) == false){
      this.letrasChutadas.push(letra);
      for (let i = 0; i < this.palavraSecreta.length; i++) {
        if (this.palavraSecreta[i] == letra){
            this.palavra[i] = letra;
        }
      }
    }
  }
  
  buscarEstado() { 
    if (this.vidas === 0) {
      return (this.resultado = "perdeu"); 
    }
    
    else if (this.palavra.join("") === this.palavraSecreta && this.vidas > 0) {
      return (this.resultado = "ganhou");
    }
    
    let result = this.resultado;
    
    return result; 
  }
  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  
  buscarDadosDoJogo() {
    let letrasChutadas = this.letrasChutadas;
    let vidas = this.vidas;
    let palavra = this.palavra;
    
    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
