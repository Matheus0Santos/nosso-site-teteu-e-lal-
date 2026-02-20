// Contador de dias juntos
const dataInicio = new Date("2025-10-12"); // MUDE PRA DATA DE VOCÊS

function atualizarContador() {
    const hoje = new Date();
    const diff = hoje - dataInicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const el = document.getElementById("contador");
    if (el) {
        el.innerText = "Estamos juntos há " + dias + " dias ❤️";
    }
}

atualizarContador();

// História
function addEvento() {
    const titulo = document.getElementById("titulo").value;
    const data = document.getElementById("data").value;
    const descricao = document.getElementById("descricao").value;

    const evento = { titulo, data, descricao };

    let eventos = JSON.parse(localStorage.getItem("historia")) || [];
    eventos.push(evento);
    localStorage.setItem("historia", JSON.stringify(eventos));

    location.reload();
}

function carregarHistoria() {
    let eventos = JSON.parse(localStorage.getItem("historia")) || [];
    const lista = document.getElementById("listaHistoria");
    if (lista) {
        eventos.forEach(e => {
            lista.innerHTML += `<li><strong>${e.data}</strong> - ${e.titulo}<br>${e.descricao}</li>`;
        });
    }
}

carregarHistoria();

// Sonhos
function addSonho() {
    const sonho = document.getElementById("sonhoInput").value;
    let sonhos = JSON.parse(localStorage.getItem("sonhos")) || [];
    sonhos.push(sonho);
    localStorage.setItem("sonhos", JSON.stringify(sonhos));
    location.reload();
}

function carregarSonhos() {
    let sonhos = JSON.parse(localStorage.getItem("sonhos")) || [];
    const lista = document.getElementById("listaSonhos");
    if (lista) {
        sonhos.forEach(s => {
            lista.innerHTML += `<li>💖 ${s}</li>`;
        });
    }
}

carregarSonhos();

// Galeria
function addFoto() {
    const input = document.getElementById("fotoInput");
    const reader = new FileReader();
    reader.onload = function() {
        let fotos = JSON.parse(localStorage.getItem("fotos")) || [];
        fotos.push(reader.result);
        localStorage.setItem("fotos", JSON.stringify(fotos));
        location.reload();
    };
    reader.readAsDataURL(input.files[0]);
}

function carregarFotos() {
    let fotos = JSON.parse(localStorage.getItem("fotos")) || [];
    const galeria = document.getElementById("galeria");
    if (galeria) {
        fotos.forEach(f => {
            galeria.innerHTML += `<img src="${f}">`;
        });
    }
}

carregarFotos();
