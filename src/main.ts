import './style.css';
import lista from './quotes.json';

const idezetek = Array.from(lista.quotes);

document.addEventListener('DOMContentLoaded',gombokBetoltese);

function gombokBetoltese()
{
  const osszesIdezetButton = document.createElement('button');
  osszesIdezetButton.textContent = 'Összes idézet';
  const ul = document.createElement('ul');

  const osszesIdezet = idezetek.sort((a,b) => a.author.localeCompare(b.author)).map(idezet => idezet.quote + " :  " + idezet.author);
  //console.log(osszesIdezet);
  

  osszesIdezetButton.addEventListener('click',() => {
    const gombok = document.getElementById('gombok')!;
    ul.textContent = "";
    ol.textContent = "";
    hosszString.textContent = "";
    for (let i = 0; i < osszesIdezet.length; i++) {
      const element = osszesIdezet[i];
      const li = document.createElement('li');
      const author = document.createElement('p');
      const quote = document.createElement('quote');
      quote.textContent = element;
      li.appendChild(quote);
      li.appendChild(author);
      ul.appendChild(li);
      gombok.appendChild(ul);
    }
  });



  const the = document.createElement('button');
  the.textContent = 'The';
  const ol = document.createElement('ol');

  const idezetekThe = idezetek.map(idezet => {
    if(idezet.quote.includes('the '))
    {
      return idezet.quote.replace('the ', '<b>the </b>');
    }
    else if(idezet.quote.includes('The '))
    {
      return idezet.quote.replace('The ', '<b>The </b>');
    }
    else
    {
      return idezet.quote;
    }
  });
  the.addEventListener('click',() => {
    const gombok = document.getElementById('gombok')!;
    ul.textContent = "";
    ol.textContent = "";
    hosszString.textContent = "";
    for (let i = 0; i < idezetekThe.length; i++) {
      const element = idezetekThe[i];
      
      const li = document.createElement('li');
      li.innerHTML = `${element}`;
      ol.appendChild(li);
      gombok.appendChild(ol);
    }
  });




  const hossz = document.createElement('button');
  hossz.textContent = 'Hossz';
  const hosszString = document.createElement('p');


  const szamok = Array.from(idezetek).map(szam => szam.quote.length).join(', ');
  hossz.addEventListener('click',() => {
    const gombok = document.getElementById('gombok')!;
    ul.textContent = "";
    ol.textContent = "";
    hosszString.textContent = szamok;
    gombok.appendChild(hosszString);
  });
  



  const darabSzam = document.createElement('button');
  darabSzam.textContent = 'Darabszám';
  const inputNev = document.createElement('input');
  const inputSzam = document.createElement('input');
  const feladat4 = Array.from(idezetek);

  darabSzam.addEventListener('click',() => {
    const gombok = document.getElementById('gombok')!;
    ul.textContent = "";
    ol.textContent = "";
    hosszString.textContent = "";
    gombok.appendChild(inputNev);
    gombok.appendChild(inputSzam);
    inputNev.addEventListener('focusout',() => {
      const ujTomb = feladat4.filter(elem => elem.author == inputNev.value).length;
      inputSzam.value = ujTomb.toString();
    });
  });




  const gombok = document.getElementById('gombok')!;
  gombok.appendChild(osszesIdezetButton);
  gombok.appendChild(the);
  gombok.appendChild(hossz);
  gombok.appendChild(darabSzam);
};