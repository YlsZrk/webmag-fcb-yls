function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      let journal = data.journal
      let themes = data.journal.themes
       
     
         

      let ulThemes = document.getElementById("themes")
      console.log(ulThemes);
      
      
      
      themes.forEach(theme => {

        let listeThemes = document.createElement(`li`)
        
        listeThemes.textContent = theme.nom

        ulThemes.appendChild(listeThemes)
      
      });
     

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici