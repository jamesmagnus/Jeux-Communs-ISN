(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //On ouvre le menu et on modifie son état (ouvert/fermé)
	var open = false;
	button.addEventListener('click', ouverture, false);

	function ouverture(){
	  if(!open){
	    this.innerHTML = "Jouer"; //en re-cliquant ici, il lancera le jeu
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open; //changement d'état
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
