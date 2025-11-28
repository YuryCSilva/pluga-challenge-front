# Pluga Challenge Front
## Finalidade
O Pluga Challenge Front tem como objetivo demonstrar minha capacidade de criação/refatoração de código de um app em ViteJs para React.

## Preview
Para acessar o aplicativo em produção [clique aqui](https://pluga-challenge-front-taupe.vercel.app/)

## Tecnologias utilizadas
- Next.JS
- React.JS
- Typescript
- Jest
- Tailwind

## Requisitos
- Git
- Node v24 ou superior

## Instalação e Rodando o Projeto
Abaixo vou deixar os 4 passos para rodar o projeto em sua máquina, o 5 passo é opcional. Espero que gostem!

1 - Faça o clone do projeto na sua máquina:
```
git clone https://github.com/YuryCSilva/pluga-challenge-front
```
2 - Entra na pasta 'pluga-challenge-front';

3 - Instale as dependências das bibliotecas do projeto:
```
npm install
```
4 - Start o servidor local:
```
npm run dev
```
5 - (Opcional) Caso queira rodar os testes utilize o comando: 
```
npm run test
```

## Estrutura de pastas
```
scripts -> scripts js utilizado no projeto (criação de components, pre/post validação node)
src/
  app/ -> pasta router next
  components/
    _behavior/ -> componentes com lógica (smart components)
    _layouts/ -> componentes para layouts
    _pages/ -> páginas prontas
    _ui/ -> componentes visuais (dumb components)
  shared/
    hooks -> hooks globais
    services -> services globais (localStorage, Axios Config)
    styles -> estilos globais
    utils/ -> funções globais (cn-tailwind, validators)
```

## Autor
**Yury Silva**  
- [LinkedIn](https://www.linkedin.com/in/yurysilva/)
- [GitHub](https://github.com/YuryCSilva)
