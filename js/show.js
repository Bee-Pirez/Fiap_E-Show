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