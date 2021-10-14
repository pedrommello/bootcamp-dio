### Algumas coisas para se lembrar

- Arrow functions
Exs:
> 1. var sum = (a, b) => a + b

> 2. var sum = (a, b) => {
>       &nbsp;&nbsp;&nbsp;&nbsp; x = 10
>       &nbsp;&nbsp;&nbsp;&nbsp; if (a > b){
>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = 5
>       &nbsp;&nbsp;&nbsp;&nbsp; }else{
>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = 10
>       &nbsp;&nbsp;&nbsp;&nbsp; }
>       &nbsp;&nbsp;&nbsp;&nbsp; return a + b + x + y
>   }

- Variáveis com condição
  **x** vai receber 1 se o tipo anterior de **x** for *undefined*, se não recebe o mesmo valor de **x**
> x = typeoff x === 'undefined' ? 1 : x;

- Rest operator
> 1. Para conseguir pegar multiplos parâmetros em uma função:
> &nbsp;&nbsp;&nbsp;&nbsp; const sum (...args){
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return args.reduce( (antigo,atual) => antigo + atual, 0 )
> &nbsp;&nbsp;&nbsp;&nbsp; } 
>
> 2. Para conseguir pegar multiplos parâmetros em uma arrow function:
> &nbsp;&nbsp;&nbsp;&nbsp; const multiply = (...args) => args.reduce( (antigo,atual) => antigo * atual, 1 )

- Spread operator
  - Mesma sintaxe do Rest Operator
  - Consegue pegar todos os args passados em uma function
  - Pode ser usado tbm em strings, arrays e objetos literais
  *(concatenar arrays, criar novos arrays, criar objetos)*
> &nbsp;&nbsp;&nbsp;&nbsp; const sum (...args){
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return multiply(...args)
> &nbsp;&nbsp;&nbsp;&nbsp; } 

- Destructuring
> 1. var [apple, banana, orange] = ['apple', 'banana', 'orange']
> *Vai destruir o array e colocar cada elemento para cada variável mencionada*
> 2. var pessoa { name: 'Pedro' }
> var { name } = pessoa
> *Vai destruir o objeto e colocar a propriedade na variável mencionada*
