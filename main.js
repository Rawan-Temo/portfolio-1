var mediaQuery = window.matchMedia('(max-width: 600px)');
		const navBar = document.getElementById("navbar");
		const navBar2 = document.getElementById("navbar2");
		const button = document.getElementById("button");
		const button1 = document.getElementById("button1");

function checkdisplay(){
	let w = window.innerWidth;
  let wOut = window.outerWidth;
if (w<=600) {
  navBar.style.display='none';
  button.className= 'menu';

} 

else if(wOut<=600){
    navBar.style.display='none';

}
else{
    navBar2.style.display='none';
    button1.className= 'menu1';

}


}



getText("text.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
 console.log(y) ;
}







		function openNav(){
			if (navBar.style.display=="flex") {
				navBar.style.display="none";
				navBar.style.animationName = "slideleft";
			}
			else {
				navBar.style.display="flex";


			}

		}
		function openNav1(){
			if (navBar2.style.display=="block") {
				navBar2.style.display="none";
				
			}
			else {
				navBar2.style.display="block";


			}

		}