const chop = (elementToFind, array) => {
  if(array.length === 0) {
    return -1
  }
  let indexArray = []
  for(let i = 0; i < array.length; i++) {
    indexArray.push(i)
  }
  let found = false
  let index = -1
  while(!found) {
    const half = Math.ceil(indexArray.length / 2)
    if(indexArray.length === 1) {
      index = indexArray[0];
      found = true;
    } else if(array[indexArray[half - 1]] === elementToFind) {
      index = indexArray[half - 1];
      found = true;
    } else if (array[indexArray[half - 1]] < elementToFind) {
      indexArray = indexArray.slice(half, indexArray.length)
    } else {
      indexArray = indexArray.slice(0, half)
    }
  }

  return array[index] === elementToFind ? index : -1;
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
