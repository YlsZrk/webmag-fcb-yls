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
      let nomJournal = data.journal.nomJournal
     
      //NAV
      //Logo
      let logoNom = document.getElementById("logoNom") 

      let logo = document.createElement(`img`)
      let nom = document.createElement(`h3`)
      nom.textContent = journal.nomJournal
      // console.log(nom.textContent[0]);
      // nom.textContent[0].classList.add("rouge");
      logo.src = `images/Logo_FC_Barcelona.svg.png`
      logo.alt = "logo"
      logoNom.appendChild(logo)
      logoNom.appendChild(nom)
      console.log(logoNom);
      
      //Themes
      let ulThemes = document.getElementById("themes")
      console.log(ulThemes);
      
      
      
      themes.forEach(theme => {

        let listeThemes = document.createElement(`li`)
        let lienThemes = document.createElement(`a`)
        lienThemes.textContent = theme.nom
        lienThemes.href =
        listeThemes.appendChild(lienThemes)
        ulThemes.appendChild(listeThemes)
      
      });
     

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici