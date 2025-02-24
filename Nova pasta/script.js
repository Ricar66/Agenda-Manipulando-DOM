// let clicar = document.getElementById('click');

// clicar.addEventListener('click', function() {
//   if (this.style.backgroundColor === 'red') {
//     this.addEventListener('change')
//     this.style.backgroundColor = 'blue';
//   } else {
//     this.style.backgroundColor = 'red';
//   }
// });
    


// Obtém referências para os elementos HTML usando seus IDs
let botao = document.getElementById('click'); // Botão de envio
let ul = document.getElementById('ul'); // Lista ordenada (ol)
let nome = document.getElementById('nome'); // Input de nome
let email = document.getElementById('email'); // Input de email
let tel = document.getElementById('numero'); // Input de telefone
let data = document.getElementById('data');// Input de data 
let mensagem = document.getElementById('mensagem'); // Elemento para exibir mensagens de erro
let input = document.getElementById('nome'); // Input de nome (usado para limpar a mensagem de erro)

// Função para verificar se todos os campos estão preenchidos
function todosCamposPreenchidos() {
  // Retorna verdadeiro se todos os campos (nome, email, telefone) não estiverem vazios após remover espaços em branco
  return nome.value.trim() !== '' && email.value.trim() !== '' && tel.value.trim() !== '';
}

// Adiciona um ouvinte de evento 'mouseout' ao botão
botao.addEventListener('mouseout', function() {
  // Quando o mouse sai do botão, remove a cor de fundo (volta ao padrão)
  this.style.backgroundColor = '';
});

// Adiciona um ouvinte de evento 'mouseover' ao botão
botao.addEventListener('mouseover', function() {
  // Quando o mouse passa sobre o botão, muda a cor de fundo para azul
  this.style.backgroundColor = 'blue';
});

// Adiciona um ouvinte de evento 'click' ao botão
botao.addEventListener('click', function(event) { // 'event' é o objeto do evento de clique
  // Impede o comportamento padrão do botão (evita o envio do formulário e recarregamento da página)
  event.preventDefault();

  // Exibe uma mensagem no console para indicar que o botão foi clicado
  console.log('Botão clicado!');

  // Obtém os valores dos inputs e armazena em variáveis
  let ValorNome = nome.value;
  let ValorEmail = email.value;
  let ValorTel = tel.value;
  let ValorData = data.value

  // Exibe os valores dos inputs no console para depuração
  console.log('Valor do input:', ValorNome, ValorEmail, ValorTel, ValorData);

  // Verifica se todos os campos estão preenchidos usando a função 'todosCamposPreenchidos'
  if (todosCamposPreenchidos()) {
    // Cria um novo elemento 'li' (item da lista)
    let novoItem = document.createElement('li');

    // Define o conteúdo HTML do novo item 'li' com os valores dos inputs e quebras de linha (<br>)
    novoItem.innerHTML = `
                <span class="item-nome">Nome: ${ValorNome}</span><br>
                <span class="item-email">Email: ${ValorEmail}</span><br>
                <span class="item-tel">Telefone: ${ValorTel}</span><br>
                <span class="item-data">Data: ${ValorData}</span>
                <button class="excluir-item">Excluir</button>
                <button class ="alterar-item">Alterar</button>
            `;

    // Adiciona o novo item 'li' à lista 'ul'
    ul.appendChild(novoItem);

    // Limpa os valores dos inputs
    nome.value = '';
    email.value = '';
    tel.value = '';
    data.value = '',

    // Exibe o novo item 'li' e a lista 'ul' no console para depuração
    console.log('Item adicionado:', novoItem);
    console.log('Lista atualizada:', ul);

    // Limpa a mensagem de erro (se houver)
    mensagem.textContent = '';


    // Adiciona um ouvinte de evento para o botão de exclusão
    let botaoExcluir = novoItem.querySelector('.excluir-item');
    botaoExcluir.addEventListener('click', function() {
        novoItem.remove(); // Remove o item da lista
        
    });


    let botaoAlterarItem = novoItem.querySelector('.alterar-item');
            botaoAlterarItem.addEventListener('click', function() {
                // Preenche os inputs com os valores do item para edição
                nome.value = novoItem.querySelector('.item-nome').textContent.replace('Nome: ', '');
                email.value = novoItem.querySelector('.item-email').textContent.replace('Email: ', '');
                tel.value = novoItem.querySelector('.item-tel').textContent.replace('Tel: ', '');
                data.value = novoItem.querySelector('.item-data').textContent.replace('Data: ', '');
                // Remove o item da lista
                novoItem.remove();
            });
  } else {
    // Se algum campo estiver vazio, exibe uma mensagem de erro
    mensagem.textContent = 'Digite um valor válido em todos os campos.';
    mensagem.style.color = 'red'; // Define a cor da mensagem como vermelho
  }
});

// Adiciona um ouvinte de evento 'input' ao input de nome
nome.addEventListener('input', function() {
  // Quando o usuário digita no input de nome, limpa a mensagem de erro e remove a cor vermelha
  mensagem.textContent = '';
  mensagem.style.color = '';
});