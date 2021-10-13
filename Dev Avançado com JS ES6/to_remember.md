### Algumas coisas para se lembrar

- Arrow functions
>  Exs:
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
> x = typeoff x === 'undefined' ? 1 : x;
> **x** vai receber 1 se o tipo anterior de **x** for *undefined*, se não recebe o mesmo valor de **x**