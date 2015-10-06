module.exports = {
	development: { //Opções de compilação
		options: {
			compress: true, //Minificar o arquivo
			optimization: 2 //Nível de otimização do arquivo gerado
		},
		files: {
			//Siga o padrão:
			//caminho/arquivo-gerado.min.css : caminho/arquivo.less
			'<%= pastel.paths.dev %>css/style.min.css': ['<%= pastel.paths.dev %>less/default.less']
		}
	},
};
