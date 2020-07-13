//Custom menu option
	var options = [
	{name:'Personal account',href:'https://my.gurtam.com/en/login'},	
	{name:'Shop',href:'https://gurtam.com/en/hw-manufacturers'}
];
	function createElemLi(elem, options) {
		var clone = elem.parentNode;
		var elem1 = clone.cloneNode(true);
		for (var i = 0; i < options.length; i++){
			//var clone = elem.parentNode;
			//var elem1 = clone.cloneNode(true);
    		elem1.querySelector('span').innerHTML = options[i].name;
    		elem1.querySelector('a').href = options[i].href
    		elem1.querySelector('a').id = 'sub_dom' + options[i].name;
    		elem.after(elem1);
    		console.log(options[i].name);
    		console.log(elem1);
    	}
    
	}

	//createElemLi(document.getElementById('sub_dom_f5acebef_2_5'), options);

document.addEventListener("DOMContentLoaded", createElemLi(document.getElementById('sub_dom_f5acebef_2_5'), options));