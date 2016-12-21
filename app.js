var app = angular.module('chocopicker', []);

app.controller('WinnerCtrl', [function(){
	var vm = this;

	vm.title = "ChocoPicker";
	vm.working = false;

	vm.choose = function(){
		vm.working = true;
		console.log('Choosing winner...')
	}

}]);

