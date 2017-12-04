function($scope) {
  //pretty print the JSON data object
  $scope.getPrettyData = function () {
    return JSON.stringify($scope.data, null, '\t');
  }

  $scope.refresh = function () {
    //Ask the server script for a new data object
    $scope.server.refresh();
  }

  $scope.update = function () {
    //Send the client script object to the server script
    //The server script will process it as an input object
    $scope.server.update();
  }

  $scope.get = function () {
    //Send any input to the server script
    //The server script will process it as an input object
    $scope.server.get({ collectionName: "presidents" })
      .then(function (response) {
        $scope.data = response.data;
      });
  }
}
