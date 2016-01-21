exports.index = function(req, res) {
	res.render('index');
}

exports.lista = function(req, res) {
	res.json({
		titulo: 'Gangues de Nova Iorque',
		diretor: 'Martin Scorsese',
		ano: 2002
	});
}