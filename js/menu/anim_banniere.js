window.onload = function Anim_index(){
    var compteur = 0;
    
    //(max - min) + min  --> [min;max]
    
    
    
    function Atarget(){
        
        var top = Math.random() * (500 - 20) + 20;
        var distance = Math.random() * (500 - 20) + 20;
        
        //viseur 1
        top = Math.random() * (150 - 0) + 0;
        distance = Math.random() * (1000 - 0) + 0;
        document.getElementById("viseur1").style.left = distance + 'px';
        document.getElementById("viseur1").style.top = top + 'px';
        
        //viseur2
        top = Math.random() * (150 - 0) + 0;
        distance = Math.random() * (1000 - 0) + 0;
        document.getElementById("viseur2").style.right = distance + 'px';
        document.getElementById("viseur2").style.top = top + 'px';
        
       
        compteur++;

        if(compteur == 10){
            compteur = 0;
            Atarget();
        }
    }
    
    function Acercle(){
        
        var top = Math.random() * (500 - 20) + 20;
        var distance = Math.random() * (500 - 20) + 20;
        
        for(var i=1, i<3, i++){
            document.getElementById("cercle_" + i).style.left = distance + 'px';
            document.getElementById("cercle_" + i).style.top =  top + 'px';
        }
    
    
        for(var i=3, i<5, i++){
            document.getElementById("cercle_" + i).style.left = distance + 'px';
            document.getElementById("cercle_" + i).style.top =  top + 'px';
        }
    }

    var frame1 = setInterval(Acercle, 2000);
    var frame2 = setInterval(Atarget, 2000);
    
}