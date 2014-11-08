#### Descrição dos diretórios

Diretórios

public -> seu projeto deve ser desenvolvido aqui dentro. Essa é a pasta de desenvolvimento.

css -> Coloque seus arquivos de estilo e pastas com arquivos (CSS) aqui.

img -> Coloque as imagens e pastas de imagens do seu projeto aqui.

js -> Coloque seus arquivos .js e pastas com os mesmos aqui.

less -> Coloque os arquivos .less e pastas com arquivos .less aqui.

dist -> Será criado ao executar as tarefas do Grunt e é ele quem deve ser enviado ao servidor de produção

#### Se você nunca mexeu com Git, Grunt, Bower, Bootstrap ou coisa do tipo. leia essa parte primeiro! ####

O arquivo ".gitignore" da raiz serve para ignorar coisas pelo git. 
	O diretório node_modules e alguns arquivos temporários do Windows/*.nix já estão lá! 
	Adicione nele as pastas e/ou arquivos a serem ignorados.

O arquivo Gruntfile.js é a configuração do Grunt.js.

O arquivo package.json é onde estão as dependencias do Grunt ou de outros módulos do Node.js.


#### Requisitos ####

- Se você não possui o Node.js instalado em sua máquina, instale seguindo esse link: http://nodejs.org/

- Após a instalação do Node.js abra o terminal e cambie até a raiz (Onde está o arquivo package.json) e rode o comando: npm install

>Todos os módulos necessários para executar os comandos do Grunt serão instalados automáticamente.

- Para usar o Grunt será necessário a instalação do cliente pela linha de comando (Caso já não possua instalado em sua máquina) através do comando: npm install -g grunt-cli

- Para instalar o Bower use: npm install -g bower

- Para instalar os componentes (Bootstrrap, JQuery, etc, etc) execute: bower install dentro da pasta com o bower.json

> As configurações do Bower estão no arquivo .bowerrc

#### Comandos do Grunt ####

grunt copy		- copia os arquivos de /public para /dist
grunt clean		- destrói a pasta /dist
grunt uglify	- minifica .js
grunt cssmin	- minifica .css
grunt imagemin	- minifica as imagens
grunt watch		- monitora os arquivos .less e compila sempre que são salvos.

#### Excluir a pasta node_modules no Windows ####

Execute o rm_node_modules.bat como administrador (Clique com o direito executar como administrador).