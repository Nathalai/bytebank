import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contacorrente2 = new ContaCorrente(2002, cliente2);

contaCorrente1.depositar(100);
const valorSacado = contaCorrente1.sacar(45);
//console.log(contaCorrente1, valorSacado);

//contacorrente2.depositar(200);
//const valorSacado2 = contacorrente2.sacar(20);
//console.log(contacorrente2, valorSacado2);

contaCorrente1.transferir(5, contacorrente2);

console.log(contaCorrente1, "Valor sacado: " + valorSacado);
console.log(contacorrente2);
console.log("Total de contas: " + ContaCorrente.numeroDeContas);


//console.log(cliente1);
//console.log(cliente2);