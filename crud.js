// GET

axios.get('http://167.71.45.243:4000/api/employes?api_key=ndrkuld').then((res)=>{
  console.log(res.data)
  let btnModifier=document.querySelector('#modifier')
  btnModifier.style.display='none'
  let tbody=document.querySelector('tbody')
  let input=document.querySelectorAll(".input")

  
    for( let user of res.data){
      const myTr=`<td>${user._id}</td><td>${user.nom}</td>
      <td>${user.prenom}</td><td>${user.email}</td>
      <td>${user.poste}</td><td>${user.numeroTelephone}</td>
      <td>${user.estMarie}</td>
      <td>${user.pays}</td>
      <td>
            <button id='mod-${user._id}' data-target='${user.id}' class='btnMod ui inverted red button'>edit</button>
            <button id='sup-${user._id}' class='btnSup ui inverted red button'>supprimer</button>
      </td>
      `
      tbody.insertAdjacentHTML("beforeend", myTr)
      const btnMod=document.getElementById(`mod-${user._id}`)
     
    
      //Modification
      btnMod.addEventListener('click', (e)=>{
        e.preventDefault();
        btnValider.style.display='none'
        btnModifier.style.display='inherit'
        btnModifier.textContent='Mettre à jour'
       
        let Nom = document.querySelector('#Nom')
        let Prenom = document.querySelector('#Prenom')
        let mail = document.querySelector('#mail')
        let Poste = document.querySelector('#Poste')
        let Phone_Number = document.querySelector('#Phone_Number')
        let etatCivil = document.querySelector('#etatCivil')
        let Nationalite=document.querySelector('#pays')
        
        
          Nom.value=user.nom
          Prenom.value=user.prenom
          mail.value=user.email 
          // age: Age.value,
          Poste.value=user.poste, 
          Phone_Number.value=user.numeroTelephone
          etatCivil.value=user.estMarie
          Nationalite.value=user.pays

        btnModifier.addEventListener('click', (e)=>{
          e.preventDefault();
          

          btnModifier.textContent='Mettre à jour'
          let objects={}
          
          objects = {
            nom: Nom.value, prenom: Prenom.value,
            email:mail.value, 
            // age: Age.value,
            poste: Poste.value, 
            numeroTelephone: Phone_Number.value,
            estMarie:etatCivil.value,
            pays:Nationalite.value
        };
        
        if(input)
              {
                for(let i=0; i<input.length; i++){
                 input[i].value='';
             }
             
           }  

        axios.put(`http://167.71.45.243:4000/api/employes/${user._id}?api_key=ndrkuld`,objects).then((res)=>{
              
              console.log(res.data);
                   location.reload();
               })
                .catch(function(erreurs){
                    console.log(erreurs)
              })


        })


      })

      

      //Supprimer
       const supprimer=document.getElementById(`sup-${user._id}`);
       supprimer.addEventListener('click',function(e){
       console.log(`sup-${user._id}`);
       if(confirm(`Voulez-vous vraiment supprimer ${user.prenom} ${user.nom}`)){          
       axios.delete(`http://167.71.45.243:4000/api/employes/${user._id}?api_key=ndrkuld`)
            .then(function(response){
                console.log(response)
                location.reload();
            }).catch(function(erreur){
                console.log(erreur)
                  })
                }
            })       
    
    }
})

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
          nom: Nom.value, prenom: Prenom.value,
          email:mail.value, 
          // age: Age.value,
          poste: Poste.value, 
          numeroTelephone: Phone_Number.value,
          estMarie:etatCivil.value,
          pays:Nationalite.value
      };
    
     users.push(objects);

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
               
            console.log(`mon objet ${objects}`);
            
            
            axios.post('http://167.71.45.243:4000/api/employes?api_key=ndrkuld',objects).then((res)=>{
              
              console.log(res.data);
                   location.reload();
               })
                .catch(function(erreurs){
                    console.log(erreurs)
              })

              if(input)
              {
                for(let i=0; i<input.length; i++){
                 input[i].value='';
             }
             
           }  
            
          } 
    
    
});









