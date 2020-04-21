// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["Tomber est permis, se relever est ordonné.", "Robert Gélinas"],
    ["La confiance en soi est le premier secret du succès.", "Linda Malette"],
    ["Il faut tout un village pour élever un enfant.", "Kuka Joseph"],
    ["La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre;", "Albert Einstein"],
    ["La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.", "Réjeanne Picard"],
    ["Donne tes mains pour servir et ton cœur pour aimer.", "Mère Teresa"],
    ["Il faut accepter d’essayer et de faire des erreurs. On n’est jamais certain de rien. Il faut prendre des risques.", "Jean Coutu"],
    ["De nos jours, on ne choisit plus le meilleur. On choisit le moins pire", "Floriane Hissette"],
    ["À trop penser au trésor, on en oublie que la vraie richesse est son équipage.", "Adrien Moyaux"],
    ["Il faut viser la lune, parce qu’au moins, si vous échouez, vous finissez dans les étoiles.", "Oscar Wilde"],
    ["N’accuse pas le puits d’être trop profond, c’est ta corde qui est trop courte.", "Proverbe africain"],
    ["Les détails font la perfection, et la perfection n’est pas un détail.", "Léonard de Vinci"],
    ["L’excellence est un art que l’on n’atteint que par l’exercice constant. Nous sommes ce que nous faisons de manière répétée. L’excellence n’est donc pas une action mais une habitude", "Aristote"],
    ["La mode se démode. Le style, jamais.", "Coco Chanel"],
    ["Les difficultés ne sont pas faites pour abattre, mais pour être abattues.", "Charles de Montalembert"],
    ["Tout obstacle renforce la détermination. Celui qui s’est fixé un but n’en change pas", "Léonard de Vinci"],
    ["Vous ne pouvez choisir ni comment mourir, ni quand. Mais vous pouvez décider de comment vous allez vivre. Maintenant.", "Joan Baez"],
    ["Si tu veux connaître quelqu’un, n’écoute pas ce qu’il dit mais regarde ce qu’il fait.", "Dalaï Lama"],
    ["Si vous trouvez que l’éducation coûte cher, essayez l’ignorance.", "Abraham Lincoln"]
  ];

let citation = document.querySelector('#citation');

let auteur = document.querySelector('#auteur');

let nouveau = document.querySelector('#nouveau');

let dernier = 0;

let nombreAleatoire = 0

console.log(nombreAleatoire)

function genererNombreEntier(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

function showNew(){
    do {
        nombreAleatoire = genererNombreEntier(citations.length)

    } while (nombreAleatoire==dernier);
        citation.textContent = citations[nombreAleatoire][0];
        auteur.textContent = citations[nombreAleatoire][1];
        dernier = nombreAleatoire;
}

nouveau.addEventListener('click',showNew);

let foot = document.querySelector('.foot')

let date = new Date().getFullYear();
let copyright = `${date} © ROMY KLK`;

foot.textContent = "ROMY KLK";

foot.innerHTML = `${date} © ROMY KLK`;

let info = document.querySelector('.infojour');

let dateActuelle = new Date();


let dateLocale = dateActuelle.toLocaleString(navigator.language, {
  weekday: 'long', 
  year: 'numeric', 
  month: 'long',
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric',
  second: 'numeric'
});



info.innerHTML = `Nous sommes le ${dateLocale}`;
info.style.color = "white";
info.style.textAlign = "center"




////// METEO///////





let ville = "Paris";
obtenirTemp(ville)

//console.log(meteo);

let maVille = document.querySelector('#changer');

maVille.addEventListener('click',()=>{
    ville = prompt("Entrez votre ville");
    obtenirTemp(ville);
})


function obtenirTemp(ville){
    const meteo = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=1c060e144d6d64ff968d2638e4fb1b77&units=metric';


let meteoReq = new XMLHttpRequest();

meteoReq.open('GET',meteo);

meteoReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

meteoReq.responseType = 'json';

meteoReq.send();

meteoReq.onload = function(){
    if(meteoReq.readyState === XMLHttpRequest.DONE){
        if(meteoReq.status == 200){
            let reponseMeteo = meteoReq.response;
            let temperature = reponseMeteo.main.temp;
            let ville = reponseMeteo.name;
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
            console.log(reponseMeteo)
        }else{
            alert('Un probleme est survenu.Merci de revenir ultérieuement pour obtenir les prévisions')
        }
    }
}
}



//BTC////

const url = 'https://blockchain.info/ticker';

function btcPrice(){

let requette = new XMLHttpRequest();

requette.open('GET',url);


requette.responseType = 'json';

requette.send();

requette.onload = function(){
    if(requette.readyState === XMLHttpRequest.DONE){
        if(requette.status==200){
            let retour = requette.response; 
            let prixEuro = retour.EUR.last
            let prixCfa = prixEuro * 655.957;
            document.querySelector('#price_label').textContent = prixEuro;
            document.querySelector('#price_label').style.color = 'white';
            document.querySelector('#price_labelcfa').textContent = prixCfa.toFixed(2);
            document.querySelector('#price_labelcfa').style.color = 'white';
        }else{
            alert('Un problème est survenu.Merci de revenir plus tard.')
        }
    }
}
}

setInterval(btcPrice,1000);


