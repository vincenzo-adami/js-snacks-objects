let animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'coccodrillo', famiglia: 'sauropsidi', classe: 'rettili' }
]

console.log(animali)

let mammiferi = animali.filter((object) => object.classe === 'mammiferi')

console.log(mammiferi)