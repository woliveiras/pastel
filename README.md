#Bem vindo ao Pastel!

O *Pastel* é um pequeno Boilerplate que eu criei para agilizar meus projetos. Deixei aqui um Gruntfile.js configuradinho e as Tasks mais maneiras que achei. No bower.json temos as dependências (Uns plugins legais que tenho utilizado) e eu uso o [Twitter Bootstrap](http://getbootstrap.com/) junto com o Less nos meus projetos, então já está tudo configurado para esse Workflow.

#####Por que Pastel?


> *Você já viu como a galera faz o pastel rapidinho na feira ou em pastelarias? (É muito rápido e fica bom!)*

####Por onde começar?

Instale os Requisitos:
- [NodeJS](http://nodejs.org/)
- [GruntJS](http://gruntjs.com/)
- [Bower](http://bower.io/)

Se você não souber instalar esses programas, não tem problema. Da uma olhada no meu [Blog](http://woliveiras.com.br/tag/pastel/) que eu expliquei tudo lá.

Rode um **npm install** no diretório principal (Onde esse arquivo se encontra), em seguida **bower install**. Serão instalados todos os plugins do Grunt e as dependências que estão no Bower.

Se quiser ver as dependências que foram instaladas rode *bower ls*.

####Comandos do Grunt

- **grunt copy**	 - copia os arquivos de /src para /dist
- **grunt clean**	 - destrói a pasta /dist
- **grunt uglify**	 - minifica .js
- **grunt imagemin** - minifica as imagens
- **grunt less**     - compila os arquivos .less
- **grunt sprite**   - cria um sprite com as imagens que estiverem dentro de src/img/icons/
- **grunt watch**	 - monitora os arquivos .less e compila sempre que são salvos.

####Excluir a pasta node_modules no Windows

Pra quem usa *nix é facinho excluir essa pasta, porém para usuários Windows é mais chato. Portanto deixei um Scriptzinho para facilitar.

Execute o rm_node_modules.bat como administrador
	(Clique com o direito executar como administrador).
	Será necessário executar duas vezes.

>Lembre-se de que o Pastel não é um Framework, mas um boilerplate para auxiliar o Workflow.
Se quiser melhorar as tasks, plugins, configurações, acrescentar algo maneiro, lança ae!
Eu deixei tudo configurado de modo que um iniciante entenda, então é facinho pra qualquer um ajudar. ;D