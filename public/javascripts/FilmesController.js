function FilmesController($http, $scope) {
	$http.get('/lista').success(function(retorno) {
		$scope.filme = retorno;
	});
}