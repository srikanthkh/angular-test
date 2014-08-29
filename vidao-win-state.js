app.directive("windowed", function(){
	return {
		restrict: "A",
		replace: false,
		transclude: true,
		scope:{ call: "&"},
		template: '<div class="windowed-class">'+
                  '<a ng-show="!isopen" ng-click="call=minimize();isopen=!isopen;"><img src="imgs/icons/min-13.jpg"></a>'+
                  '<a ng-show="isopen" ng-click="call=maximize();isopen=!isopen;"><img src="imgs/icons/min-13.jpg"></a>'+
                  '<a ng-click="call=popout()"> <img src="imgs/icons/expand-06.png"></a>'+
                  '<a ng-click="call=resize()"> <img src="imgs/icons/expand-06.png"></a>'+
                  '<a ng-click="call=close()"><img src="imgs/icons/close-07.png"></a>'+
                  '</div><div ng-transclude></div>',
		link: function (scope,element,attrs){ 
			scope.minimize= function()
			{	
				var x = element.children()[1];
				x.style.display= 'none';
			
			}
			scope.maximize= function()
			{
				var x = element.children()[1];
				x.style.display= 'block';
			}
			scope.popout= function()
			{
				window.open('child.html','width=200,height=400','menubar=no,toolbar=no,location=no,scrollbars=yes');
			}
			scope.resize=function(){

				var x = element.parent().parent().parent()[0];
				console.log("Parents",x);
				
				x.style.width="100%";

				// var z= element.parent().parent().parent().siblings()[0];
				// z.removeAttribute('main');

				// var i= element.parent().parent().parent().parent()[0];
				// i.style.width="100%";

				var y =document.getElementById("sidebar-resizer");
				y.style.display="none";

			
			}
			scope.close= function()
			{
				var x = element.parent()[0];
				console.log(x);
				x.style.display= 'none';
			}
		}
		}

}) 