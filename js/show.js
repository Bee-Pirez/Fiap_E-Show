// recupera o elemento tbody da página
const tbody = document.querySelector('tbody');

//cria um array para receber os dados e montar os cards
const card = [];

//validar arquivo
function validateFile() {
  const banner = document.getElementById('banner')
  const allowedTypes = /\.(jpg|jpeg|png)$/i
  const selectedFile = banner.value.toLowerCase()

  if (!allowedTypes.test(selectedFile)) {
    alert("Tipo de arquivo não permitido.")
    banner.value = ''
    return
  } else {
    alert('Upload feito com sucesso')
  }
}

//adiciona um escutador de eventos ao formulário para verificar quando ele será enviado 
document.querySelector('form').addEventListener('submit', function (e) {
  // cancelar o evento 
  e.preventDefault();

  //recuperar os campos
  const campos = [
      document.querySelector('#artista'),
      document.querySelector('#dataShow'),
      document.querySelector('#cidade'),
      document.querySelector('#localShow'),
      document.querySelector('#mediaIngresso'),
      document.querySelector('#banner')
  ];

  // criar uma TR para escrever no tbody
  const tr = document.createElement('tr');

  // forEach para percorrer o Array e para cada ocorrência , criar uma td e vincular à tr
  campos.forEach((campo) => {

      // criar a td 
      const td = document.createElement('td')

      //verificando o tipo de campo por causa do file
      if (campo.type == 'file') {
        //criando a variável para receber o endereço da imagem  
        let src = String(campo.value)
        //arrumando o endereço da imagem
        src = src.replace('C:\\fakepath\\', './images/')
        
         // Criar o elemento <img>
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', src);
        imgElement.setAttribute('width', '200');
        imgElement.setAttribute('height', 'auto');

        // Limpar qualquer conteúdo existente na célula TD
        while (td.firstChild) {
          td.removeChild(td.firstChild);
        }

        // Adicionar o elemento <img> à célula TD
        td.appendChild(imgElement);
        
        //inserindo a imagem no array
        card.push(src);
      } else {
         //inserir o conteúdo dos campos na td
         td.textContent = campo.value;
         card.push(campo.value);
      }

      //vincule a td na tr
      tr.appendChild(td);
  })
  // vincular a tr criada no tbody
  tbody.appendChild(tr);

  //limpar os dados digitados
  this.reset();

  //criando os cards
  let cards = document.querySelector('.cards-shows');
  cards.innerHTML +=`
      <div class="col-md-3 my-3">
          <div class="card">
              <img src="${card[5]}" class="card-img-top" alt="Show">
              <div class="card-body">
                  <h2 class="card-title display-6">${card[0]}</h2>
                  <p class="card-text lead">Data: ${card[1]}</p>                    
                  <a href="#" class="btn" style="background-color: rgb(255, 102, 0)">Comprar Ingresso</a>
              </div>
          </div>
      </div>
  `
  //zerando o array após inserir na página
  card.splice(0);
});