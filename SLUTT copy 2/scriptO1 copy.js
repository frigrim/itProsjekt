//Oppretter et oppskriftsobjekt
/* let lagretPorsjoner= localStorage.getItem("porsjoner"); */

/* Lager objekt med ingredienser for 4 porsjoner */
let ingredienser = [
    {
        navn : "stk søtpotet",
        mengde : 2,
    },
    {
        navn: "ss olje",
        mengde: 2,
    }, 

    {
        navn : "g grønnkål",
        mengde : 100,
    },
    {
        navn: "boks bønner",
        mengde: 1,
    },
    {
        navn: "stk lime",
        mengde: 0.5,
    },
    {
        navn: "g ost",
        mengde: "200",
    },
]

let saus= [
    {
        navn: "dl vann",
        mengde: 5,
    },
    {
        navn: "stk buljong",
        mengde: 1,
    },
    {
        navn: "ss tomatpuré",
        mengde: 5,
    },
    {
        navn: "ts chillipulver",
        mengde: 4,
    }, 
    {
        navn: "ts spisskummin",
        mengde: 2,
    }, 
    {
        navn:"hvitløk",
        mengde: 3,
    },
]


/* Kaller på funksjonen */
oppdaterOppskrift()

function oppdaterOppskrift() {

    let porsjonerInput= document.getElementById("porsjoner"); /* Henter elementet med ID "porsjoner" */
    oppskrift.porsjoner = parseInt(porsjonerInput.value); /* Tekst om til tall */


/* Lager en variabel "oppskriftsTekst" med en HTML-streng som inneholder oppskriften */
/* oppskriftTekst oprettes. Lager flere setninger med += */
/* Bruker template-litterals, ha både html og javascript kode, resultatet av koden blir tekst */
    let oppskriftTekst= `<p><i class="fa-solid fa-1"></i> Sett ovnen på 225 grader </p>`;
    oppskriftTekst +=`<p><i class="fa-solid fa-2"></i> Skjer ${ingredienser[0].mengde / 4 * oppskrift.porsjoner} ${  
         ingredienser[0].navn
    } i terninger i ovnen med ${ingredienser[1].mengde / 4 * oppskrift.porsjoner} ${
        ingredienser[1].navn
   } og stek i ca 20 min</p>`;
   oppskriftTekst += `<p><i class="fa-solid fa-3"></i> Senk ovnen til 175 grader</p>`;
    oppskriftTekst += `<p><i class="fa-solid fa-4"></i> Lag sausen og ha alle ingridiensene i en kjele og kok i 10 min.</p>`;
    oppskriftTekst += `<p><i class="fa-solid fa-5"></i> Bland ${ingredienser[2].mengde / 4 * oppskrift.porsjoner} ${ingredienser[2].navn} med ${ingredienser[3].mengde /4 *oppskrift.porsjoner} ${ingredienser[3].navn}, ${ingredienser[0].navn
            } og ${ingredienser[4].mengde/ 4 * oppskrift.porsjoner} ${ingredienser[4].navn}  og tilsett 2dl av sausen.</p>`;

            oppskriftTekst += `<p><i class="fa-solid fa-6"></i> Fordel fyllet i tortilla lefsene og tilsett ${ingredienser[5].mengde/ 4 * oppskrift.porsjoner} ${
                ingredienser[5].navn}, hell resten av sausen over</p>`;
                oppskriftTekst += `<p><i class="fa-solid fa-7"></i> Stek i ovnen 10-15 min  </p>`;
                oppskriftTekst += `<p><i class="fa-solid fa-8"></i> Anbefaler å lage guacamole til. Velbekomme!  </p>`;
        
        /* oppretter et element, henter med id */
        let oppskriftElement = document.getElementById("oppskrift");
        /* Bytter til å bli oppskriftTekst */
        oppskriftElement.innerHTML = oppskriftTekst;
}
let porsjonerInput = document.getElementById("porsjoner");
porsjonerInput.addEventListener("change", oppdaterOppskrift);


oppdaterMengde();
function oppdaterMengde(){
   /* deklarerer en variabel, foreløpig tom */
    let ingredienserMengdeEls = document.querySelectorAll('#ingredienser .mengde')
    let ingredienserNavnEls = document.querySelectorAll('#ingredienser .navn')

    for(let i=0; i<ingredienser.length; i++){
        /* Setter mengde til å være mengde med indeks 1, gjort for 4 pers, og ganger med ant porsjoner */
        let mengde= (ingredienser[i].mengde / 4)*oppskrift.porsjoner;
       /* Navn blir samme indeks sitt navn */
        let navn = (ingredienser[i].navn);
        /* Går inn og endrer teksten til #ingredienser .mengde og .navn */
        ingredienserMengdeEls[i].innerText = mengde;
        ingredienserNavnEls[i].innerText = navn;
    }

    let sausMengdeEls = document.querySelectorAll('#saus .mengde')
    let sausNavnEls = document.querySelectorAll('#saus .navn')
    for(let i=0; i<saus.length; i++){
        let mengde= (saus[i].mengde / 4)*oppskrift.porsjoner;
        let navn = (saus[i].navn);
        sausMengdeEls[i].innerText = mengde
        sausNavnEls[i].innerText = navn
    }
}
/* FORKLAR DENNE KODEN */
let menneskerInput = document.getElementById("porsjoner");
menneskerInput.addEventListener("change", oppdaterMengde);





