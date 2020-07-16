(function () {
	// make sure that if an error occurs, it doesn't break other scripts on the page
	try	{
		var doc = document;

		// 1. Create <div> element
		var div = doc.createElement('div');
		div.id = "new_banner";

		// Fill it with the content
		div.innerHTML ="<a href='https://gurtam.com/en/wialon' target='_blank'>" +
			"<img src='http://dinacheley.com/wialon/lessons/images/1.jpg' " +
			"class='img-thumbnail' " +
			"style='display: block; margin-left: auto; margin-right: auto' " +
			"alt='My company banner'" +
			"></a>"
		// Define CSS style
		div.style = "" +
			" position: absolute;" +
			" top: 100%;" +
			" text-align: center;" +
			" margin: 100px auto;" +
			" width: 100%";

		// Insert <div> in <div class=login-bg>
		doc
			.getElementsByClassName('login-bg')[0]
			.insertAdjacentElement('beforeend', div);
	} catch (error){
		// do nothing or handle error
		console.log(error)
	}
})()
