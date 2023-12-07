function findFirstRepeated(gifts) {
  const arr = []
  let res

  for (const item of gifts) {
    if (arr.includes(item)) {
      res = item
      break
    }
    arr.push(item)
  }

  return res || -1;
}

const giftIds = [2, 1, 3, 5, 3, 2]
console.log(findFirstRepeated(giftIds))
