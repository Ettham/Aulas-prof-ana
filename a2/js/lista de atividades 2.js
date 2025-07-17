// lista de atividades

//1) peça ao usuario para digitar sua idade. Se tiver 18 anos ou mais, exiba "maior de idade", se não exiba "menos de idade"

let idade = parseInt(prompt("digite sua idade"))
if(idade >= 18){
    console.log("maior de idade")
}else{
    console.log("menosr de idade")
}

//2) crie im sistema de notas. Se a nota for maior ou igual a 9, mostre "excelente". Se fpr entre 6 a 8, "aprovado". Caso contrario, "reprovar"

let nota = parseInt(9)
if(nota >= 9){
    console.log("exelente")
}else if(nota >= 6 && nota <= 8){
    console.log("aprovado")
}else{
    console.log("reprovado")
}

//3) use switch para imprimir o dia da semana com base no numero de 1 a 7

let dia = 1;
switch(dia){
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda")
        break;
    default:
        console.log("nao existe esse dia de semana")
        break;

}

//4) dado x = 10 e y = 5
// A) mostre a soma
// B) subtração
// C) multiplicação
// D) divisão e resto entre elas

let x = 10
let y = 15
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)



//5) crie um arrey com 4 frutas. Adicione uma nova fruta, remova aultima, e exiba o arrey final com as frutas separadas com virgula

let frutas = ["maça" , "banana" , "uva" , "laranja"]

frutas.push("abacaxi")
frutas.pop()
let separadoPorVirgula = frutas.join(",")
console.log("fruta: ", frutas.join(","))

//6) verifique se duas variavel x = "50" tem o mesmo valor usando == e depois usando ===. Mostre os resultados e explique a diferença

let p = 50;
let t = "50"

if(p ===t)
    console.log("sao identicas")
else console.log('n sao identicas')

if(p ==t)
    console.log("iguais");
else console.log('n sao iguais')

//7) crie uma verificação onde se a pessoa tem mais de 16 anos e se possui titulo de eleitor exiba "tem o direito de votar"

let idadePessoa = 17
let temTitilo = true
if(idadePessoa > 16 && temTitilo){
    console.log("tem o direito de votar");
}else{
    console("nao tem o direito de votar")
}

//8) crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela podera entrar no evento

let ingresso = false 
let lista = true 
if(ingresso || lista)
    console.log("pode entrar no evento");
else
    console.log("nao pode entrar no evento")

//9) em um codigo escreva seu nome completo e mostre:
// A) tamanho do nome 
// B) nome em maisculo
// C) nome em minusculo
// D) verifique se contem a palavra "Soares"
// E) substitua seu primeiro nome por "Desenvolvedor(a)"

let nome = "victor Henrique Bruno Gabriel Ettham"
nome.length
nome.toUpperCase()
nome.toLowerCase()
nome.includes("Soares")
nome.replace("Victor","Desenvolvedor")

//10) crie um sistema simples de login. Usuario so entra se o email nao estiver vazio e a senha tiver pelo menos 6 carateres

let email = "";
let senha = "123456";

if(email && senha.length >=6)
    true;
else
    false;