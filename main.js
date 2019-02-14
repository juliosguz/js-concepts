const name = 'Julio'
let animal = 'Perro'

function getNames () {
  const names = [
    'Julio',
    'Pame',
    'Pablo',
    'Vania',
    'Drayko'
  ]
  return names
}

const studentNames = getNames()
console.log(studentNames)

const showFullName = (
  firstName,
  lastName
) => {
  console.log(`
    El nombre del usuario es:
    ${firstName}, ${lastName}
  `)
}

showFullName('Julio', 'Silva')
