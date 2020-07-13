//create massive with icons (name, path, redirectURl)
var icons = [
	{
		name:'twitter',
		iconPath:'http://dinacheley.com/wialon/lessons/images/twitter-clr.svg',
		href:'https://twitter.com/WialonGPS'
	},	
	{
		name:'facebook',
		iconPath:'http://dinacheley.com/wialon/lessons/images/facebook-clr.svg',
		href:'https://web.facebook.com/Gurtam.en'
	},
	{
		name:'insta',
		iconPath:'http://dinacheley.com/wialon/lessons/images/insta-clr.svg',
		href:'https://www.instagram.com/gurtam_team/'
	},
	{
		name:'insta',
		iconPath:'http://dinacheley.com/wialon/lessons/images/apple-clr.svg',
		href:'https://apps.apple.com/ru/app/id960699792'
	}
];

function createDiv(parentNode) {
	var div = document.createElement('div');
    div.innerHTML= createLinkIcon(icons);
    div.style = "border: none;margin:2em auto;display: flex; justify-content: center";
    document.getElementById(parentNode).after(div);

}

function createLinkIcon(massive){
	var str = '';
	for (var i = 0; i < massive.length; i++){
		var src = massive[i].iconPath;
		var link = massive[i].href
		str = str + "<a href='"+link+"' target='_blank'><img src='"+src+"'></a>";
	}
	return(str);
}

createDiv('login_body');