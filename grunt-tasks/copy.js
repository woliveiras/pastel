module.exports = {
	/* Copia os arquivos de src para dist */
	public: {
		cwd: '<%= pastel.paths.dev %>', //Origem
		src: '**',      //O que será copiado
		dest: '<%= pastel.paths.prod %>', //Destino
		expand: true
	}
};
