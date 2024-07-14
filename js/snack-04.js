let persone = [
  { nome: 'Mario', cognome: 'Rossi', eta: 25 },
  { nome: 'Maria', cognome: 'Bianchi', eta: 17 },
  { nome: 'Antonio', cognome: 'Verdi', eta: 48 },
  { nome: 'Francesca', cognome: 'Abate', eta: 18 },
  { nome: 'Anna', cognome: 'Guido', eta: 15 },
  { nome: 'Giuseppe', cognome: 'Franchi', eta: 68 },
  { nome: 'Elena', cognome: 'Pace', eta: 37 }
]

console.log(persone)

let risultato = [];

// for (let i = 0; i < persone.length; i++) {
//   if (persone[i].eta < 18) {
//     risultato.push(persone[i].nome + ' ' + persone[i].cognome + ' non può ancora guidare')
//   } else {
//     risultato.push(persone[i].nome + ' ' + persone[i].cognome + ' può guidare')
//   }
// }

risultato = persone.map((persone) => {
  if (persone.eta < 18) {
    return (persone.nome + ' ' + persone.cognome + ' non può ancora guidare')
  } else {
    return (persone.nome + ' ' + persone.cognome + ' può guidare')
  }
})

console.log(risultato)