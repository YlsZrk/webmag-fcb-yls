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
      let dateJournal = data.journal.date
      let villeJournal = data.journal.ville
     
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
       let titreSite = document.createElement(`h2`)
       titreSite.textContent = journal.nomJournal
       let phraseAccroche = document.createElement(`h1`)
       phraseAccroche.textContent = journal.phraseAccroche 
       titre.classList.add("headertitre")
       header.classList.add("header")
       
       
       titre.appendChild(titreSite)
       titre.appendChild(phraseAccroche)
       header.appendChild(titre)
       console.log(header);

       let divTheme = document.createElement('div');
       divTheme.className = 'div-Theme'
       
      //  let headerTheme = document.createElement(`article`)
      //  let themeX = document.createElement(`h3`)
      //  let contenuThemeX = document.createElement(`p`)
      //  themeX.textContent = themes[0].nom
      //  contenuThemeX.textContent = themes[0].description

      //  headerTheme.appendChild(themeX)
      //  headerTheme.appendChild(contenuThemeX)
      //  header.appendChild(headerTheme)
      //  let conteneurTheme = document.createElement(`div`)
      //  conteneurTheme.classList.add("themeConteneur")

       themes.forEach(theme => {
        let headerTheme = document.createElement(`article`)
       let themeX = document.createElement(`h3`)
       let contenuThemeX = document.createElement(`p`)
       themeX.textContent = theme.nom
       contenuThemeX.textContent = theme.description
       headerTheme.classList.add("headertheme")
       

       headerTheme.appendChild(themeX)
       headerTheme.appendChild(contenuThemeX)
       divTheme.appendChild(headerTheme)
      // conteneurTheme.appendChild(headerTheme)
      //  console.log(conteneurTheme);

       });

       header.appendChild(divTheme)


       //MAIN
       //BANNIERE
       let main = document.getElementById("main")
       let banniere = document.createElement(`div`)
       let banniereImage = document.createElement(`img`)
       banniereImage.src = `images/LamineAURA.jpg`
       banniereImage.alt = "Barca 2024/25"
       banniereImage.id = "banniereImage"

       main.appendChild(banniere)
       console.log(banniere);

       //ARTICLE PRINCIPAL
       let articlePrincipal = document.createElement(`section`)       
       
       let articlePrincipalInfo =  document.createElement(`div`);
       let articlePrincipalTitre = document.createElement(`h2`)
       let articlePrincipalSoustitre = document.createElement(`h3`)
       
       articlePrincipalTitre.textContent = journal.articlePrincipal.titre
       //console.log(articlePrincipalTitre);
       articlePrincipalSoustitre.textContent = `${journal.articlePrincipal.theme} - ${journal.articlePrincipal.date}`
       //console.log(articlePrincipalSoustitre);


       articlePrincipalInfo.appendChild(articlePrincipalTitre)
       articlePrincipalInfo.appendChild(articlePrincipalSoustitre)

       articlePrincipal.appendChild(articlePrincipalInfo)
       articlePrincipal.appendChild(banniereImage)

       main.appendChild(articlePrincipal)

       let articlePrincipalContenu = document.createElement(`div`) 
       let articlePrincipalDescription = document.createElement(`p`)
       let articlePrincipalBouton = document.createElement(`p`)
       articlePrincipalDescription.textContent = journal.articlePrincipal.description
       articlePrincipalBouton.textContent = "Lire l'article"
       articlePrincipalBouton.classList.add("bouton", "primaire")
       articlePrincipalContenu.appendChild(articlePrincipalDescription)
       articlePrincipalContenu.appendChild(articlePrincipalBouton)
       articlePrincipal.appendChild(articlePrincipalContenu)
       console.log(articlePrincipal);
       


       //AUTRES ARTICLES
       let articles = journal.articles

       let autresArticles = document.createElement(`section`)
       main.appendChild(autresArticles)

       let autresArticlesTitre = document.createElement(`h1`)
       autresArticlesTitre.textContent = "AUTRES ARTICLES"
       autresArticles.appendChild(autresArticlesTitre)
       autresArticles.id = "autresArticles"
       

       articles.forEach(article => {
        let articleX = document.createElement(`div`)
       
       let articleXImage = document.createElement(`img`)
       articleXImage.src = article.image
       articleXImage.alt = "image article"
       articleX.appendChild(articleXImage)

       let articleXDetails = document.createElement(`article`)

       let articleXTitre = document.createElement(`h4`)
       let articleXSousTitre = document.createElement(`h6`)
       let articleXDescription = document.createElement(`p`)
       let articleXBouton = document.createElement(`p`)
       articleXTitre.textContent = article.titre
       articleXSousTitre.textContent = `${article.theme} - ${article.date}`
       articleXDescription.textContent = article.contenu
       articleXBouton.classList.add("bouton", "primaire")
       articleXBouton.textContent = "Lire l'article"

       articleXDetails.appendChild(articleXTitre)
       articleXDetails.appendChild(articleXSousTitre)
       articleXDetails.appendChild(articleXDescription)
       articleXDetails.appendChild(articleXBouton)
       articleX.appendChild(articleXDetails)
       autresArticles.appendChild(articleX)
       articleXDetails.id = "articleXDetails"
       articleX.id = "articleX"
       });
       
       autresArticles.id = "autresArticles"
       console.log(autresArticles);
       

       //DECOUVREZ NOTRE EQUIPE
       let auteurs = journal.auteurs
       
      let equipe = document.createElement(`section`)
       main.appendChild(equipe)
       let message = document.createElement(`h2`)
       message.textContent = "Découvrez notre équipe"
       equipe.appendChild(message)

       let divEquipe = document.createElement('div');
       divEquipe.className = 'div-equipe'

       auteurs.forEach(auteur => {
  
       let divAuteurs = document.createElement(`div`)
       let auteursImage =document.createElement(`img`)
       let auteursPrenom =document.createElement(`h6`)
       let auteursDescription =document.createElement(`p`)

       auteursImage.src = auteur.image
       auteursImage.alt = "avatar"
       auteursPrenom.textContent = auteur.prenom
       auteursDescription.innerHTML = `<p>${auteur.typeExperience}</p><p>${auteur.presentation}</p> `
       auteursImage.className = "avatar"

       divAuteurs.className = "divAuteurs"
       equipe.className = "equipe"
       divAuteurs.appendChild(auteursImage)
       divAuteurs.appendChild(auteursPrenom)
       divAuteurs.appendChild(auteursDescription)
       console.log(divAuteurs);
        divEquipe.appendChild(divAuteurs)
        console.log(divEquipe);
        
       });

       equipe.appendChild(divEquipe)
       
       //FOOTER
       let footer = document.getElementById("footer")
       let tag = document.createElement(`p`)
       tag.textContent = `©${journal.ville} - ${journal.date}`
       footer.appendChild(tag)
    

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici