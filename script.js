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
      //HEADER
      //ARTICLE PRINCIPAL
       let header = document.getElementById("header")

       let titre = document.createElement(`div`)
       let phraseAccroche = document.createElement(`h1`)
       phraseAccroche.textContent = journal.phraseAccroche 
       titre.classList.add("headertitre")
       header.classList.add("header")
       
       
       titre.appendChild(nom)
       titre.appendChild(phraseAccroche)
       header.appendChild(titre)
       console.log(header);
       
      //  let headerTheme = document.createElement(`article`)
      //  let themeX = document.createElement(`h3`)
      //  let contenuThemeX = document.createElement(`p`)
      //  themeX.textContent = themes[0].nom
      //  contenuThemeX.textContent = themes[0].description

      //  headerTheme.appendChild(themeX)
      //  headerTheme.appendChild(contenuThemeX)
      //  header.appendChild(headerTheme)

       themes.forEach(theme => {
        let headerTheme = document.createElement(`article`)
       let themeX = document.createElement(`h3`)
       let contenuThemeX = document.createElement(`p`)
       themeX.textContent = theme.nom
       contenuThemeX.textContent = theme.description
       headerTheme.classList.add("headertheme")
       let headerThemes = document.createElement(`div`)
       headerThemes.classList.add("headerthemes")

       headerTheme.appendChild(themeX)
       headerTheme.appendChild(contenuThemeX)
       headerThemes.appendChild(headerTheme)
       header.appendChild(headerThemes)
       });




       //MAIN
       //BANNIERE
       let banniere = document.getElementById("main")
       banniere = document.createElement(`div`)
       let banniereImage = document.createElement(`img`)
       banniereImage.src = `images/image.png`
       banniereImage.alt = "Barca 2024/25"

       banniere.appendChild(banniereImage)
       console.log(banniere);

       //ARTICLE PRINCIPAL
       let articlePrincipal = document.getElementById("main")
       articlePrincipal = document.createElement(`div`)       
       
       let articlePrincipalTitre = document.createElement(`div`)
       let articlePrincipalTitreA = document.createElement(`h4`)
       let articlePrincipalTitreB = document.createElement(`h6`)
       articlePrincipalTitreA.textContent = journal.articlePrincipal.titre
       console.log(articlePrincipalTitreA);
       articlePrincipalTitreB.textContent = `${journal.articlePrincipal.theme} - ${journal.articlePrincipal.date}`
       console.log(articlePrincipalTitreB);

       articlePrincipalTitre.appendChild(articlePrincipalTitreA)
       articlePrincipalTitre.appendChild(articlePrincipalTitreB)
       articlePrincipal.appendChild(articlePrincipalTitre)

       let articlePrincipalContenu = document.createElement(`div`) 
       let articlePrincipalDescription = document.createElement(`p`)
       let articlePrincipalBouton = document.createElement(`p`)
       articlePrincipalDescription.textContent = journal.articlePrincipal.description
       articlePrincipalBouton.textContent = "Lire l'article"
       articlePrincipalBouton.classList.add = ("bouton", "primaire")
       articlePrincipalContenu.appendChild(articlePrincipalDescription)
       articlePrincipalContenu.appendChild(articlePrincipalBouton)
       articlePrincipal.appendChild(articlePrincipalContenu)
       console.log(articlePrincipal);
       





       //AUTRES ARTICLES



       //DECOUVREZ NOTRE EQUIPE

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici