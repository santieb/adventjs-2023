function manufacture(gifts, materials) {
  const validGifts = []

  gifts.forEach(gift => {
    const giftChars = gift.split('')

    let isProductValid = true;
    giftChars.forEach(item => {
      if (!materials.includes(item)) isProductValid = false
    })

    if (isProductValid) validGifts.push(gift)
  })

  return validGifts
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))