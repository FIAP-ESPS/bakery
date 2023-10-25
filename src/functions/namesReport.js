function namesReport(itemsSold) {  
    console.log('\nFoi/foram comprado/comprados:')
    for (const item of itemsSold) {
      console.log(`- ${item}`)
    }
  }
  module.exports = { namesReport };