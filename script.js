function toggleForm(div) {
    div.classList.toggle("d-none");
}

// Adiciona evento de clique aos botões para mostrar/ocultar o formulário
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const div = btn.parentElement.nextElementSibling; 
        toggleForm(div);
    });
});
