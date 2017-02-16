angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, Login) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ListeCtrl', function($http,$scope,$state) {
   //creation d'un tableau liste des commandes
    $scope.commandes = [];
    // creation d'une requete url vers le serveur
    $scope.url = url;
    $http.get(url + "listecommandes.php")
                // data = données de la reponse
            .success(function (data) {
                $scope.commandes = data;
            })
            .error(function (err) {
                console.log(err);
            });
    $scope.chargerCommande = function (idCom) {
        $state.go("tab.commande1", {
            idCommande: idCom,
        });
    }
})

.controller("CommandeCtrl", function ($http, $scope, $stateParams) {
    $scope.idCommande = $stateParams.idCommande;
   
    $scope.commande1 = [];
    $http.get(url + "detailscom.php?idCommande=" + $scope.idCommande )
            .success(function (data) {
                $scope.commande1 = data;
            })
            .error(function (err) {
                console.log(err);
            });
});
