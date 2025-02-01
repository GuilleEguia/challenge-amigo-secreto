let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (nombre !== "") {
    amigos.push(nombre);
    console.log(amigos);
    limpiarInput();
    mostrarAmigos();
  } else {
    alert("Porfavor, inserte un nombre");
  }
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para sortear");
    return;
  } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = amigoSorteado;
  }
}
