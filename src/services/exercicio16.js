//16- FUP que calcule o imposto de renda de um contribuinte. Os dados de entrada são: o CPF(int), o número de dependentes e a renda mensal. Para cada dependente será feito um desconto de 5% do salário mínimo por dependente. Os valores da alíquota para cálculo do imposto são:

//Renda Mensal	                  Alíquota
//Até 2 salários mínimos	         Isento
//2 < salários mínimos <= 3	        5%
//3 < salários mínimos <= 5	        10%
//5 < salários mínimos <= 7	        15%
//Salários mínimos > 7	            20%

let cpf, dependentesNum, rendaMensal, imposto, salarioMin

salarioMin = 1400

if (rendaMensal < salarioMin*2){
  imposto = 0
} else if ( rendaMensal >= salarioMin*2 && rendaMensal <= salarioMin*3){
  imposto = rendaMensal*0.05
} else if ( rendaMensal ){

}