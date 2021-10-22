### Comandos GIT Branches

- Alterar para uma outra branch
>  $ git checkout 'nome da branch'
- Alterar para uma nova branch (criando a mesma)
>  $ git checkout -b 'nome da branch'
- Empurrar as mudanças em outra branch (basta alterar o nome final)
>  $ git push origin 'nome da branch'
- Checando as branches
> $ git branch
- Renomear uma branch estando na mesma
> $ git branch -m 'novo nome da branch'
- Renomear uma branch estando em outra branch
> $ git branch -m 'nome atual da branch' 'novo nome da branch'
- Deletar uma branch
> $ git branch -d 'nome da branch'

- Stashs
> $ git stash save 'nome'
> $ git stash list
> $ git stash pop [nr_indice]

- Log
> $ git log
> $ git log 'nome pasta'
> $ git log 'nome arquivo'

- Resetar commits
> git reset [hash]
> git reset HEAD~[numero]
> *~Este comando volta ao commit correspondente de acordo com o número enviado*
> git reset --mixed HEAD~[numero]
> *~Retorna os arquivos para a working área ( antes de chamar o 'git add' )*
> git reset --hard HEAD~[numero]
> *~Apaga as modificações*

> git revert [hash]
> git revert HEAD~[numero]
> *~Reverte as alterações em um novo commit que é gerado na hora*