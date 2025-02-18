let amigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo");
  const nome = inputNome.value.trim();

  if (nome !== "" && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarListaAmigos();
    inputNome.value = "";
  } else if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
  } else {
    alert("Por favor, insira um nome válido.");
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos 2 amigos para sortear.");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let sorteados = [];

  amigos.forEach((amigo) => {
    let amigosDisponiveis = amigos.filter(
      (a) => !sorteados.includes(a) && a !== amigo
    );

    const sorteio =
      amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
    sorteados.push(sorteio);

    const li = document.createElement("li");
    li.textContent = `${amigo} sorteou ${sorteio}`;
    resultado.appendChild(li);
  });
}
