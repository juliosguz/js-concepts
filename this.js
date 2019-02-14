const showName = function () {
  console.log(this)
}

const person = {
  name: 'Julio Silva',
  talk: function () {
    console.log(`Hola! Mi nombre es ${this.name}`)
  },
  walk: () => {
    console.log('Julio esta caminando')
    console.log(this)
  }
}
