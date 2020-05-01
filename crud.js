
let Nom = document.querySelector('#Nom')
let Prenom = document.querySelector('#Prenom')
let mail = document.querySelector('#mail')
let Age = document.querySelector('#Age')
let Poste = document.querySelector('#Poste')
let Phone_Number = document.querySelector('#Phone_Number')
let etatCivil = document.querySelector('#etatCivil')
let Nationalite=document.querySelector('#pays')
let nomManquant = document.querySelector('#nomManquant')
let prenomManquant=document.querySelector('#prenomManquant')
let mailManquant=document.querySelector('#mailManquant')
let Phone_Number_manquant = document.querySelector('#Phone_Number_maquant')
let Poste_manquant = document.querySelector('#Poste_manquant')
let input=document.querySelectorAll(".input")
let maClasse=document.querySelectorAll('.maClasse')


const Tableau = document.querySelector('table')
let tbody=document.querySelector('tbody')
let users = [];
let objects = {};
let id;
let tabeId=[];
let val='';

let recherche=document.querySelector('#recherche')
let btnValider = document.querySelector('#valider')
let btnModifier=document.querySelector('#modifier');
let btnSupprimer=document.querySelector('#supprimer')
recherche.style.display='none'

btnValider.addEventListener("click", function(event){
    event.preventDefault();

    btnValider.textContent="Ajouter"
      if(!Nom.value.length){
          nomManquant.innerText='Veillez renseigner le champ';
      }
      if(!Prenom.value.length){
          prenomManquant.innerText='Veillez renseigner le champ';
      }
      if(!mail.value.length){
          mailManquant.innerText='Veillez renseigner le champ';
      }
      if(!Phone_Number.value.length){
      Phone_Number_manquant.innerText='Veillez renseigner le champ';
      }
      if(!Poste.value.length){
          Poste_manquant.innerText='Veillez renseigner le champ';
      }

      do{
          id =  Math.floor(Math.random() * Math.floor(10))
      } while(tabeId.includes(id))
      tabeId.push(id)

      objects = {
          id:id,
          nom: Nom.value, prenom: Prenom.value,
          email:mail.value, 
          // age: Age.value,
          poste: Poste.value, 
          numeroTelephone: Phone_Number.value,
          estMarie:etatCivil.value,
          pays:Nationalite.value
      };
     users.push(objects);
    
      if(recherche.value.length){
          for( let i=0; i<maClasse.length; i++){
              if(maClasse[i].cells[0].textContent == recherche.value){
                  for(a=1; a<9; a++){
                      maClasse[i].cells[a].textContent = input[a-1].value;
                  }
                  btnSupprimer.style.display = "inline";
                  btnModifier.style.display = "inline";  
              }
          }
          
      }

      else{

        if (Nom.value.length && Prenom.value.length && mail.value.length 
            && Phone_Number.value.length && Poste.value.length){
            nomManquant.innerText=''; 
            prenomManquant.innerText='';
            mailManquant.innerText='';
            Phone_Number_manquant.innerText='';
            Poste_manquant.innerText='';
      
            let newRow=document.createElement('tr');
            newRow.className='maClasse'
            
            tbody.append(newRow)    
            
            for(let element in objects){
                newTd=document.createElement('td')
                newTd.append(objects[element])
                newRow.append(newTd)
                maClasse=document.querySelectorAll(".maClasse")
              }
           resetForme()
          //     if(input)
          //     {
          //       for(let i=0; i<input.length; i++){
          //        input[i].value='';
          //    }
             
          //  }  
            
          } 
          recherche.style.display='inherit'
          
    
      }
    
});

btnModifier.addEventListener('click', function(e){
    e.preventDefault();
 
    btnSupprimer.style.display = "inline";
    btnValider.textContent="mettre a jour"
    btnModifier.style.display='none'
   
    if(recherche.value.length){
      for(i=0; i<maClasse.length; i++){
          if(maClasse[i].cells[0].textContent == recherche.value){
            for(h=0; h<9; h++){
              input[h].value = maClasse[i].cells[h+1].textContent
            } 
           
        }
       
      }
      resetForme()
     
    }
  
    else{
      btnValider.textContent="Ajouter"
      alert("Impossible de faire une recherche, veillez renseiger l'ID")
    }
  })
  
  btnSupprimer.addEventListener('click', function(event){
    event.preventDefault();
      
    if(recherche.value.length){
      for(i=0; i<maClasse.length; i++){
        for(j=0; j<8; j++){
          if(maClasse[i].cells[j].textContent == recherche.value){
            if(confirm("Voulez vous vraiment supprimer cet employé? " + maClasse[i].cells[j].textContent)){
              tbody.removeChild(maClasse[i]);
            }
            
          }
          
          
        }
      }
      resetForme()
        
      }
      else{
        alert(`Veillez renseigner l'ID`)
      }
  
    
  })


  function resetForme(){
       if(input)
              {
                for(let i=0; i<input.length; i++){
                 input[i].value='';
             }
             
           } 
  }




