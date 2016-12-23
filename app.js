var app = angular.module('chocopicker', []);

app.controller('WinnerCtrl', ['$timeout', function($timeout){
	
	var vm = this;

	//Private attributes
	vm.index = 0;
	vm.winner = {};
	vm.working = false;
	vm.title = "¡Concurso Navideño! #chococanto";
	vm.contesters = [
		{
			username: 'rihalney',
			video: 'https://www.instagram.com/p/BOD3IMYjzBP'
		},		
		{
			username: 'dendemente',
			video: 'https://www.instagram.com/p/BOFuHHOjq3s'
		},		
		{
			username: 'hjalmar_rodriguez',
			video: 'https://www.instagram.com/p/BOI6EWDjO1x'
		},		
		{
			username: 'choown',
			video: 'https://www.instagram.com/p/BOLNz7aD-J_'
		},
		{
			username: 'pedrojgarciat',
			video: 'https://www.instagram.com/p/BOPXET_jjqn'
		},			
		{
			username: 'chechemaster',
			video: 'https://www.instagram.com/p/BOPuszUjffO'
		},				
		{
			username: 'angeliglopezv',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},				
		{
			username: 'greciakmolina',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},			
		{
			username: 'josecheomendoza',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},				
		{
			username: 'musiufusion',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},				
		{
			username: 'marquinaindira',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},			
		{
			username: 'carlosmeneses1984',
			video: 'https://www.instagram.com/p/BOSjcaODnB4'
		},		
	];


	//Public functions declarations

	vm.choose = choose;
	vm.reset = reset;

	//Private functions

	function choose(){

		console.log('Choosing winner...')
		
		vm.working = true;
		$timeout(pickWinner, 7000);
	}

	function pickWinner()
	{
		vm.index = Math.random() * vm.contesters.length;
		vm.index = Math.round(vm.index);
		vm.winner = vm.contesters[vm.index];
	}


	function reset()
	{
		vm.working = false;
		vm.winner = {};
	}

}]);

