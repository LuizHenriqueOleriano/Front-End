const bioElement = document.getElementById('bio');
const textoOriginal = bioElement.innerText;
bioElement.innerText = ''; // Começa vazio

let i = 0;
function digitar() {
    if (i < textoOriginal.length) {
        bioElement.innerText += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, 50); // Velocidade da digitação
    } else {
        bioElement.style.borderRight = "none"; // Remove o cursor no fim
    }
}

// Inicia a digitação quando a página carrega
window.onload = digitar;

// Mantém sua função de editar
document.getElementById('editBtn').addEventListener('click', () => {
    const novoNome = prompt("Seu Nome:", document.getElementById('username').innerText);
    if (novoNome) document.getElementById('username').innerText = novoNome;
    alert("Dados sincronizados com o GeoFront.");
});
