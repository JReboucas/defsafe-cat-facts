THE DEFSAFE CAT PAGE

Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico para a posição de Desenvolvedor Frontend VueJS/Nuxt. O objetivo principal era criar uma página web que exibisse curiosidades sobre gatos, utilizando várias tecnologias modernas, incluindo Nuxt, Vue, Pinia, Axios, Jest, Tailwind CSS e Vue Router.

Tecnologias Utilizadas

Nuxt 3: Framework de desenvolvimento baseado em Vue.js que facilita a criação de aplicações Vue com SSR (Server-Side Rendering) e SSG (Static Site Generation).

Vue 3: Biblioteca JavaScript para construção de interfaces de usuário.

Pinia: Biblioteca de gerenciamento de estado para Vue.js, que serve como substituto do Vuex.

Axios: Cliente HTTP baseado em Promises para fazer requisições a APIs.

Jest: Framework de teste para JavaScript, utilizado para testes unitários.

Tailwind CSS: Framework de CSS utilitário para estilização rápida e eficiente.

Vue Router: Biblioteca oficial de roteamento para Vue.js.

Estrutura do Projeto

index.vue

O arquivo index.vue é a página principal do projeto e tem a responsabilidade de exibir as curiosidades sobre gatos. Ele é dividido em duas partes principais:

Cabeçalho: Contém o título principal da página.

Corpo: Dividido em duas seções:

Esquerda: Exibe o fato do gato e um botão para atualizar o fato.

Direita: Contém o componente CatFact, que exibe imagens de gatos.

Funcionamento

Consumo da API: A função fetchNewCatFact é chamada ao clicar no botão "Novo Fato". Essa função faz uma chamada à API para obter uma nova curiosidade sobre gatos e atualiza o estado do fato no store.

Transição de Fade: Implementamos uma transição de fade in/out para o fato do gato utilizando a diretiva transition do Vue.

CatFact.vue

O componente CatFact é responsável por exibir três imagens de gatos, dispostas de forma visualmente atraente. Este componente é utilizado na seção direita do index.vue.

Estrutura: Exibe uma imagem maior à esquerda e duas imagens menores empilhadas verticalmente à direita.

CatFactStore.js

O arquivo CatFactStore.js utiliza Pinia para o gerenciamento de estado. Ele é responsável por armazenar e atualizar os fatos sobre gatos.

Funcionalidades

Estado Inicial: Contém um estado inicial com um fato vazio e um cache de fatos.

Ações:

fetchCatFact: Faz uma chamada à API para obter novos fatos sobre gatos. Os fatos são armazenados no cache para evitar múltiplas requisições desnecessárias.

Instruções para Executar o Projeto
Para rodar o projeto localmente, siga os passos abaixo:

Instalar Dependências:
npm install

e pra rodar: 
npm run dev

Conclusão
Este projeto cumpre todos os requisitos do teste técnico, incluindo a responsividade, consumo de API, gerenciamento de estado com Pinia, testes unitários com Jest, e transições visuais com Tailwind CSS.

finalizado em 35 minutos.
