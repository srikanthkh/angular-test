angular.module('vidao.resizer', []).directive('resizer', function($document) {

	return function($scope, $element, $attrs) {

		$element.on('mousedown', function(event) {
			event.preventDefault();

			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {

			if ($attrs.resizer == 'vertical') {
				var l_off = 260;
				$attrs.resizerMax=Math.min(window.innerWidth-20,event.pageX);
				var x = Math.max(10,($attrs.resizerMax - l_off));
				console.log(x);

				if(x<100){
					angular.element('#content-panel').css('display','none')
				}
				else{
					angular.element('#content-panel').css('display','block')
				}
				if(x>0){
					if ($attrs.resizerMax && x > $attrs.resizerMax) {
						x = parseInt($attrs.resizerMax);
					}

				$element.css({
					left: x + l_off +'px'
				});

				$($attrs.resizerLeft).css({
					width: x + 'px'
				});
				$($attrs.resizerRight).css({
					left: (x + parseInt($attrs.resizerWidth)) + 'px'
				});
				}


			} 
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});