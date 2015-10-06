module.exports = {
	/* Minificar JS */
	options: {
		mangle: {
			except: ['*.min.js']
		}
	},
	my_target: {
		files: [{
			expand: true,   //Adiciona os arquivos dinamicamente
			cwd: '<%= pastel.paths.dev %>js',  //Origem
			src: ['**/*.js', '!*.min.js'], //O que será minificado
			dest: '<%= pastel.paths.prod %>js' //Destino
		}]
	}
};
