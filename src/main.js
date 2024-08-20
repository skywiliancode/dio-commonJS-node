const p = require('./services/products')

async function main() {
  console.log(`Carrinho de compras:`)
  p.getFullName('4010', 'mouse')
  p.getFullName('3022', 'teclado')
}


main()