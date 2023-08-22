//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato

/*  
Strumenti

-prompt
-console.log
-getElementById
-innerHTML


*/



//Chiedi Nome utente

const userName = prompt ("Qual'è il tuo nome?")
console.log(userName);

//Chiedi Cognome utente

const userSurname = prompt ("Qual'è il tuo cognome?")
console.log(userSurname);

//Chiedi il colore preferito dell'utente

const favoriteColour = prompt ("Qual'è il tuo colore preferito?")
console.log(favoriteColour);

//Selezionare il tag tramite id 

const finalResult = document.getElementById ("result")
console.log(finalResult);

//Stampa nella console

console.log(userName + userSurname + favoriteColour);

//Stampa nella pagina

finalResult.innerHTML = userName + userSurname + favoriteColour