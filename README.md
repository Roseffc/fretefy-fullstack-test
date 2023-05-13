# Rodar projeto 

Para rodar o projeto em localhost, segir os passos abaixo:

## Passo 1 - Front-end
Abrir terminal e digitar os comandos:

1. `cd front-end`
2. `npm install`
3. `ng serve`
## Passo 2 - API mock
Abrir um segundo terminal e digitar o comando:

1. `npx json-server --watch mock-cidades.json`

### Exemplo do Json-server rodando

![Json-server](assets/print-json-server.png)

## Passo 3 
Abrir o browser com esse link http://localhost:4200/regiao

### Referências:

- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- https://www.npmjs.com/package/json-server