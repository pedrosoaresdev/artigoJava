function formatarData() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("data-publicacao").textContent = formatarData();
});
