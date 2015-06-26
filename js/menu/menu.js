(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //On ouvre le menu et on modifie son état (ouvert/fermé)
	var open = false;
	button.addEventListener('click', ouverture, false);

	function ouverture(){
	  if(!open){
	    this.innerHTML = "Jouer"; //en re-cliquant ici, il lancera le jeu
        button.style.backgroundColor = "#B20047";
        button.style.border = "3px solid #8A2E2E";
        button.style.color = "#FFF";
	    classie.add(wrapper, 'opened-nav');
 
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
        button.style.backgroundColor = "#666633";
        button.style.borderColor = "#3D5C00";
        button.style.color = "#99CC00";
	  }
	  open = !open; //changement d'état
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
    button.style.backgroundColor = "#666633";
    button.style.borderColor = "#3D5C00";
    button.style.color = "#99CC00";
	}

})();
