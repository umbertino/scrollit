function scrollItWrapper(element)
{
  var easing = "easeInOutExpo";
  var offset = -60;

  scrollIt(element, easing, offset, 1500, function() {});
}

function scrollIt(element, easing, offset, time, callback)
{
	$('html, body').animate({ scrollTop: ($(element).offset().top) + offset}, time, easing);
	
	if(callback && (typeof(callback) === "function") )
  	{
    	callback();
  	}
}
