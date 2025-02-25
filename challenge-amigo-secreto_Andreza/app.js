let amigos = [];

adicionarAmigo();

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let listaAtualizada = document.getElementById('listaAmigos');
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.innerHTML = amigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira um nome.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
    return;
}

function compartilharNoWhatsapp() {
    const whatsappMessage = ` ${document.getElementById('resultado').innerText}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

