// Arquivo especialista em lidar com produtos

async function getFullName(codeId, productName) {
  return codeId + "--" + productName
}

module.exports = { getFullName }