/*Slide show*/ 
const naslovOpcije = [
    "Indigo Walkers",
    "Mama i štenci traže dom",
    "Dnevna doza štenaca",
    "Čekam.... i čekam…"
]
const tekstOpcije = [
    "Naše njuške bi rado protegnule noge svaki dan, a sada Vas pozivaju da im se pridružite u vikend šetnji oko jezera! Također su nam potrebni volonteri koji bi došli na druženje sa štencima na terenu🐶 Najava je potrebna, javite nam se🐾",
    "Sutra nam dolaze oni💔 mama sa štencima pronađena u šumi… Dolaze nam na teren, vani su minusi!! Molimo Vas, traže svoje zauvijek domove, a dotad im tražimo privremene smještaje🙏🏻 Mi sve osiguravamo za njih, čuvalice tražimo na području Zagreba, javite nam se🐾",
    "Ove male male njuškice traže tete/stričeka čuvalice na području Zagreba ili zauvijek domove! Javite nam se porukom💌",
    "Londoner čeka svoje ljude! Londoner je preslatka njuškica od cca 2.5mj, a pretpostavka je srednji rast. Teta čuvalica ima samo riječi hvale za maloga, tipično je živahno štene koje obožava društvo🤗 Londoner Vas čeka!"
];
const slike = [
    "Images/vijest1.webp",
    "Images/vijest2.jpg",
    "Images/vijest3.jpg",
    "Images/vijest4.jpg"
]

const novost = document.getElementById("novostTekst");
const trenutniNaslov = document.getElementById("trenutniNaslov");
const trenutniTekst = document.getElementById("trenutniTekst");
const trenutnaSlika = document.getElementById("novostSlika")
const brTekstova = tekstOpcije.length;
const prijasnji = document.getElementById("prijasnji");
const sljedeci = document.getElementById("sljedeci");

var i = 0;
prijasnji.setAttribute('disabled', '');

trenutniNaslov.innerText = naslovOpcije[i];
trenutniTekst.innerText = tekstOpcije[i];
trenutnaSlika.style.backgroundImage = "url("+slike[i]+")"

sljedeci.onclick = function(){
    sljedeci.classList.add("strelicaKlikAnimacija")
    sljedeci.setAttribute.pointer
    if(i < brTekstova - 1){
        novost.classList.add("sljedeciAnimacija")
        setTimeout(() => {
            i += 1;
            sljedeci.classList.remove("strelicaKlikAnimacija")
            trenutniNaslov.innerText = naslovOpcije[i];
            trenutniTekst.innerText = tekstOpcije[i];
            trenutnaSlika.style.backgroundImage = "url("+slike[i]+")";
            if(i != 0){
                prijasnji.removeAttribute('disabled','')
            }
            if(i == brTekstova-1)
                sljedeci.setAttribute('disabled', '')
        }, 333);
        setTimeout(() => {
            novost.classList.remove("sljedeciAnimacija")
        }, 666)
    }
}

prijasnji.onclick = function(){
    prijasnji.classList.add("strelicaKlikAnimacija")
    if(i > 0){
        novost.classList.add("prijasnjiAnimacija")
        setTimeout(()=>{
            prijasnji.classList.remove("strelicaKlikAnimacija")
            i -= 1;
            trenutniNaslov.innerText = naslovOpcije[i];
            trenutniTekst.innerText = tekstOpcije[i];
            trenutnaSlika.style.backgroundImage = "url("+slike[i]+")";
            if(i != brTekstova-1){
                sljedeci.removeAttribute('disabled','')
            }
            if(i == 0)
                prijasnji.setAttribute('disabled', '')
        }, 333);
        setTimeout(() => {
            novost.classList.remove("prijasnjiAnimacija")
        },666)
    }
}