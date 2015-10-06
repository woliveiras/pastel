module.exports = {
	less: {
		files: ['<%= pastel.paths.dev %>less/**/*.less'], // Arquivos que serão monitorados
		tasks: ['less'], //Task que será executada
		options: {
			nospawn: true
		}
	},
};
