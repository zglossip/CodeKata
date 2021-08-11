const chop = (elementToFind, array) => {
  let marker = array.length - 1
  let s

  while (array.length > 1) {
    s = subChop(array, elementToFind, marker)
    marker = s.marker
    array = s.array
  }

  if(array[0] == elementToFind) {
    return marker
  }

  return -1;
}

const subChop = (subArray, elementToFind, marker) => {
  const length = subArray.length
  const halfLength = Math.ceil(length /2)

  const firstHalf = subArray.slice(0, halfLength)
  const secondHalf = subArray.slice(halfLength, length)

  if(firstHalf[halfLength - 1] > elementToFind) {
    return {
      marker: marker - secondHalf.length, array: firstHalf
    }
  } else if(firstHalf[halfLength - 1] === elementToFind) {
    return {
      marker: marker - secondHalf.length, array: [elementToFind]
    }
  } else {
    return {
      marker, array: secondHalf
    }
  }
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
