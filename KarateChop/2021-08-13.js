const chop = (elementToFind, array) => {

  let arrayString = "";
  let count = 0;

  array.forEach( element => {
    //NOTE: This allows for numbers up to 99999. Anything above that, and the number of 0's will need to be increased
    //This same apples to up to 99 elements and the second set of 0's
    arrayString += ('0000' + element).slice(-5) + '|' + ('00' + count).slice(-2) + '|'
    count++
  })

  while(arrayString.length > 9) {
    const half = Math.ceil(count / 2)
    const string1 = arrayString.substring(0, half * 9)
    const string2 = arrayString.substring(half * 9, arrayString.length)
    const midEl = Number(string1.substring(string1.length - 9, string1.length - 4))
    if(midEl === elementToFind) {
      arrayString = string1.slice(string1.length - 9, string1.length);
    } else if (midEl < elementToFind) {
      arrayString = string2
      count = count - half
    } else {
      arrayString = string1
      count = half
    }
  }

  const test = arrayString.split("|");

  if(Number(arrayString.split("|")[0]) === elementToFind) {
    return Number(arrayString.split("|")[1])
  }

  return -1

}

const assert_equal = (el1, el2) => {
  if (el1 === el2) {
    console.log(`Success, ${el1} == ${el2}`)
  } else {
    console.log(`Fail, ${el1} =/= ${el2}`)
  }
}

assert_equal(-1, chop(3, []))
assert_equal(-1, chop(3, [1]))
assert_equal(0,  chop(1, [1]))
assert_equal(0,  chop(1, [1, 3, 5]))
assert_equal(1,  chop(3, [1, 3, 5]))
assert_equal(2,  chop(5, [1, 3, 5]))
assert_equal(-1, chop(0, [1, 3, 5]))
assert_equal(-1, chop(2, [1, 3, 5]))
assert_equal(-1, chop(4, [1, 3, 5]))
assert_equal(-1, chop(6, [1, 3, 5]))
assert_equal(0,  chop(1, [1, 3, 5, 7]))
assert_equal(1,  chop(3, [1, 3, 5, 7]))
assert_equal(2,  chop(5, [1, 3, 5, 7]))
assert_equal(3,  chop(7, [1, 3, 5, 7]))
assert_equal(-1, chop(0, [1, 3, 5, 7]))
assert_equal(-1, chop(2, [1, 3, 5, 7]))
assert_equal(-1, chop(4, [1, 3, 5, 7]))
assert_equal(-1, chop(6, [1, 3, 5, 7]))
assert_equal(-1, chop(8, [1, 3, 5, 7]))
