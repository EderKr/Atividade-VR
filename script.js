const API = "http://localhost:3000/animais"

async function listarAnimais(){

const resposta = await fetch(API)
const dados = await resposta.json()

const lista = document.getElementById("listaAnimais")
lista.innerHTML = ""

dados.forEach(animal => {

const box = document.createElement("a-box")

box.setAttribute("position", `${animal.x} 1 -3`)
box.setAttribute("color", animal.cor)

box.addEventListener("click", () => deletarAnimal(animal.id))

lista.appendChild(box)

})

}

async function criarAnimal(){

const novo = {
nome:"Animal",
cor:"blue",
x:Math.random()*4-2
}

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(novo)
})

listarAnimais()

}

async function deletarAnimal(id){

await fetch(`${API}/${id}`,{
method:"DELETE"
})

listarAnimais()

}

listarAnimais()
