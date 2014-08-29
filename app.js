var app = angular.module('vidao', ['vidao.resizer']);

app.controller('MainCtrl', ['$scope', '$element', function($scope, $element) {
    
    $scope.win_state = "init";
    $scope.toggle=true;
    
    $scope.vidao_call=function(state){
        console.log('called : ', state);
        switch(state){
            case 'toggle':
                var domElt = $element.find('p');
                if(toggle){domElt.hide();}
                else{domElt.show();}
                toggle = !toggle;
                console.log("minimize");            
                break;
            case 'pop': 
                window.open('child.html','width=200,height=300','menubar=no,toolbar=no,location=no,scrollbars=yes');
                console.log("pop");
                break;
            case 'close':
                var domElt = $element.find('p');
                domElt.hide();
                console.log("close");
                break;                                
        }
    }

}]);
