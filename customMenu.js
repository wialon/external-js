// Asking Wialon to run our function when everything's initialized
loader.push(function () {
	WebCMS.after_init_call(function () {
		// make sure that if an error occurs, it doesn't break other scripts on the page
		try {
			// Your custom menu options
			var options = [
				{
					name:'Personal account',
					href:'https://my.gurtam.com/en/login'
				},
				{
					name:'Shop',
					href:'https://gurtam.com/en/hw-manufacturers'
				}
			];

			var startNode = document.getElementById('sub_dom_f5acebef_2_5');
			// exit early if the node is not found
			if (!startNode) {
				return;
			}
			var listItem = $(startNode).parent();

			options.forEach(function(option) {
				var newMenuItem = listItem.clone();

				newMenuItem.find('span').html(option.name);
				newMenuItem
					.find('a')
					.attr('href', option.href)
					.attr('id', 'sub_dom' + option.name)

				listItem.after(newMenuItem);

				// console.log(option.name, newMenuItem);
			})
		} catch (error) {
			// do nothing or trigger some url that notifies you of problems
			console.log(error)
		}
	});
});
