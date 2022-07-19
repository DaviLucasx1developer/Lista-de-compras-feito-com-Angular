var app =  angular.module('myShoppingList', []);
app.controller('myCtrl', function($scope){
    $scope.products = [ ]
    $scope.addItem = function(){
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
          } else {
            $scope.errortext = "O item selecionado já está na sua lista de compras";
            alert($scope.errortext)
          }
    };

    $scope.removeItem = function(x){
        $scope.products.splice(x,1);
    }
})