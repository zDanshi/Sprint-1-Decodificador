const myModal = document.getElementById('myModal');
const modalText = document.getElementById('modal-text');

const darkModeIcon = document.getElementById('dark-mode-icon');

let darkMode = false;

darkModeIcon.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  
  if (darkMode) {
    darkModeIcon.src = 'assets/sun-2-svgrepo-com.svg';
  } else {
    darkModeIcon.src = 'assets/dark-mode-svgrepo-com.svg';
  }
});

function Remover(palavra){
   return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z ]/g, ''); 
}

function CriptografarFunction(){
    const originalInput = document.getElementById('original'); 
    const palavraOriginal = Remover(originalInput.value.trim().toLocaleLowerCase()); 
    const resultado = document.getElementById('resultado'); 

    if(palavraOriginal !== ''){
        const palavraCriptografada = Criptografar(palavraOriginal);
        resultado.innerText =`${palavraCriptografada}`;
    }
    else{
        modalText.textContent = 'Digite um texto primeiro';
        showOrHideModal();
    }
}

function DescriptografarFunction(){
    const originalInput = document.getElementById('original'); 
    const palavraCriptografada = Remover(originalInput.value.trim().toLowerCase());
    const resultado = document.getElementById('resultado'); 

    if (palavraCriptografada !== ''){
        const palavraOriginal = Descriptografar(palavraCriptografada);
        resultado.innerText=`${palavraOriginal}`;
    }
    else {
        modalText.textContent = 'Digite um texto primeiro';
        showOrHideModal();
    }
}

function Criptografar(palavra){
    return palavra
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function Descriptografar(palavraCriptografada){
    return palavraCriptografada
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function LixeiraFunction(){
    document.getElementById('original').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('card-message').style.display='none';
    document.getElementById('no-content').style.display='block'; 
}

async function CopiarFunction(){

        if(resultado.innerText ===""){
        modalText.textContent = 'Selecione uma das opções abaixo antes de copiar';
        showOrHideModal();
        }
        else{
        await navigator.clipboard.writeText(resultado.innerText);
        modalText.textContent = 'Copiado para área de transferência!';
        showOrHideModal();
        }
}

function TutorialFunction(){
    modalText.textContent = 'Digite uma palavra no campo acima e veja seu resultado criptografado ou descriptografado, você pode copiar o resultado também!';
    showOrHideModal();
}

function handleInput() {
    var originalInput = document.getElementById("original").value;
    var noContentDiv = document.getElementById("no-content");
    var cardMessageDiv = document.getElementById("card-message");

    if (originalInput.trim() === "") {
      noContentDiv.style.display = "block";
      cardMessageDiv.style.display = "none";
    } else {
      noContentDiv.style.display = "none";
      cardMessageDiv.style.display = "block";
    }
  }
  
  document.getElementById("original").addEventListener("input", handleInput, function() {
  document.getElementById("no-content").style.display = "none";});

  handleInput();

  const closeModalBtn = document.getElementById('close-btn');
  closeModalBtn.addEventListener('click', showOrHideModal);
  
  function showOrHideModal(){
      myModal.classList.toggle('hidden');
  }