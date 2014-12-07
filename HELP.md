Sumário

1. Descrição dos diretórios
2. Se você nunca mexeu com Git, Grunt, Bower
3. Requisitos
4. Comandos do Grunt
5. Excluir a pasta node_modules no Windows

#### 1. Descrição dos diretórios

back-end -> Todas as funcionalidades de Back End que serão chamadas no Front deverão ser incluídas aqui.
	(Exemplo de Gets que buscam dados e retornam formatados ou funções específicas)

public -> seu projeto deve ser desenvolvido aqui dentro. Essa é a pasta de desenvolvimento.
	|
	+----css -> Coloque seus arquivos de estilo e pastas com arquivos (CSS) aqui.
	|
	+----img -> Coloque as imagens e pastas de imagens do seu projeto aqui.
	|
	+----js -> Coloque seus arquivos .js e pastas com os mesmos aqui.
	|
	+----less -> Coloque os arquivos .less e pastas com arquivos .less aqui.

dist -> Será criado ao executar as tarefas do Grunt e é ele quem deve ser enviado ao servidor de produção.
	Irá receber todos os arquivos minificados e imagens preparadas para produção.

#### 2. Se você nunca mexeu com Git, Grunt, Bower, Bootstrap ou coisa do tipo. leia essa parte primeiro! ####

O arquivo ".gitignore" da raiz serve para ignorar coisas pelo git.
	O diretório node_modules e alguns arquivos temporários do Windows/*.nix já estão lá!
	Adicione nele as pastas e/ou arquivos a serem ignorados para não lotar seu repositório a toa.

O arquivo Gruntfile.js é a configuração do Grunt.js.
	Eu já deixei umas tarefas maneiras nele. ;D

O arquivo package.json é onde estão as dependencias do Grunt ou de outros módulos do Node.js.

#### 3. Requisitos

- Se você não possui o Node.js instalado em sua máquina, instale seguindo esse link: http://nodejs.org/

- Após a instalação do Node.js abra o terminal e cambie até a raiz (Onde está o arquivo package.json)
	e rode o comando: npm install

- Para usar o Grunt será necessário a instalação do cliente pela linha de comando
	(Caso já não possua instalado em sua máquina) através do comando: npm install -g grunt-cli

- Para instalar o Bower use: npm install -g bower
 	Para instalar os componentes (Bootstrrap, JQuery, etc, etc) execute:
 		bower install dentro da pasta com o bower.json

> As configurações do Bower estão no arquivo .bowerrc

#### 4. Comandos do Grunt

grunt copy		- copia os arquivos de /public para /dist
grunt clean		- destrói a pasta /dist
grunt uglify	- minifica .js
grunt cssmin	- minifica .css
grunt imagemin	- minifica as imagens
grunt watch		- monitora os arquivos .less e compila sempre que são salvos.

#### 5. Excluir a pasta node_modules no Windows

Execute o rm_node_modules.bat como administrador
	(Clique com o direito executar como administrador).
	Será necessário executar duas vezes.