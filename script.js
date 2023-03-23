var numero = 0; // aqui é a declaração de uma variável chama "número" que inicializa com o valor 0.

function aumentarContador(){ // essa função é chamada automaticamente pela dunção setInterval
	var contador = document.getElementById("contador"); // pega o elemento com a id "contador"
	numero = numero + 1; // incrementa 1 unidade na variáveç número
	contador.textContent = numero; // muda o texto do conteúdo do elemento "contador" para o novo valor da variável "número"
}

setInterval(aumentarContador, 1000); // essa função atrela "disparos automáticos" de uma função (primeiro parâmetro) com um tempo (segundo parâmetro) dado em milissegundos
// em outras palavras... nessa caso, a função "aumentarContador" será chamada automaticamente a cada 1 segundo (ou 1000 milissegundos).


function mudarEstado(){ // função de exemplo
	var b1 = document.getElementById("botao1");
	var b2 = document.getElementById("botao2");

	b1.disabled = !b1.disabled; // apenas para mostrar como habilitar o desabilitar um botão.
	b2.disabled = !b2.disabled; // o valor do atributo "disabled" é lógico (true ou false).
	// Pode ser feita uma atribuição "b1.disabled = true" onde o botão 1 estaria desabilitado ou "b1.disabled = false" para habilitar.
	// no caso acima, o botão receberá a negação (!) do valor atual, ou seja, se está como true alterará para false e vice-versa.
	
}