// Crie um objeto que receba ao menos três propriedades sobre você.
let infor = {
    nome: "Leandro",
    idade: 28,
    sobrenome: "Costa"
    
}
console.log(infor)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
infor.bairro = "Bonsucesso"
console.log(infor)

// Remova uma propriedade desse objeto.
delete infor.bairro
console.log(infor)

//Mostre no console todas as propriedades desse objeto.
console.log(infor)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    Nome: "Leandro",
    Idade: 28,
    Telefone: +21214212121,
    Amigos: ["Matheus", "Rômulo", "Adriana", "Caio"]
},
{
    Nome: "Matheus",
    Idade: 26,
    Telefone: +21214212121,
    Amigos: ["Priscila", "Meiry", "Victoria", "Sofia"]
},
{
    Nome: "Victor",
    Idade: 45,
    Telefone: +21214212121,
    Amigos: ["Monique", "Kayke", "Simone", "Amanda"]
},
{
    Nome: "Luis",
    Idade: 30,
    Telefone: +21214212121,
    Amigos: ["Jorge", "Leo", "Day", "Rayane"]
},
{
    Nome: "Ricardo",
    Idade: 18,
    Telefone: +21214212121,
    Amigos: ["Claudio", "Abreu", "Matias", "Danilo"]
}]
console.log(cadastro)