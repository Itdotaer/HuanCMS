(function(){
    'use strict';

    angular
        .module('app')
        .controller('ClassesCtrl', ClassesCtrl);
    ClassesCtrl.$inject = ['$scope', '$modal', 'classService', 'logger', 'DEBUG'];

    function ClassesCtrl($scope, $modal, classService, logger, DEBUG){
		$scope.remove = function(scope) {
			scope.remove();
		};

		$scope.toggle = function(scope) {
			scope.toggle();
		};

		$scope.moveLastToTheBeginning = function() {
			var a = $scope.data.pop();
			$scope.data.splice(0, 0, a);
		};

		$scope.newSubItem = function(scope) {
			var nodeData = scope.$modelValue;
			nodeData.nodes.push({
				id: nodeData.id * 10 + nodeData.nodes.length,
				title: nodeData.title + '.' + (nodeData.nodes.length + 1),
				nodes: []
			});
		};

		var getRootNodesScope = function() {
			return angular.element(document.getElementById('tree-root')).scope();
		};

		$scope.collapseAll = function() {
			var scope = getRootNodesScope();
			scope.collapseAll();
		};

		$scope.expandAll = function() {
			var scope = getRootNodesScope();
			scope.expandAll();
		};

		$scope.init = function(){
			$scope.data = [{
				'id': 1,
				'title': 'node1',
				'nodes': [{
					'id': 11,
					'title': 'node1.1',
					'nodes': [{
						'id': 111,
						'title': 'node1.1.1',
						'nodes': []
					}]
				}, {
					'id': 12,
					'title': 'node1.2',
					'nodes': []
				}]
			}, {
				'id': 2,
				'title': 'node2',
				'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
				'nodes': [{
					'id': 21,
					'title': 'node2.1',
					'nodes': []
				}, {
					'id': 22,
					'title': 'node2.2',
					'nodes': []
				}]
			}, {
				'id': 3,
				'title': 'node3',
				'nodes': [{
					'id': 31,
					'title': 'node3.1',
					'nodes': []
				}]
			}];

			classService.get()
				.then(function(res){
					console.log('res', res);
				})
				.catch(function(error){
					logger.logError(error);
				})
		}

		$scope.init();
  }
})();
