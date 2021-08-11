const chop = (elementToFind, array) => {
  let arrayMap = array.map((element, index) => {
    return {element, index}
  })

  let array1, array2
  while(arrayMap.length > 1) {
    const halfway = Math.ceil(arrayMap.length / 2)
    array1 = arrayMap.slice(0, halfway)
    array2 = arrayMap.slice(halfway, arrayMap.length)
    if(array1[halfway - 1].element === elementToFind) {
      return arrayMap[halfway - 1].index;
    } else if (array1[halfway - 1].element > elementToFind) {
      arrayMap = array1
    } else {
      arrayMap = array2
    }
  }

  return arrayMap.length > 0 ? arrayMap[0].element === elementToFind ? arrayMap[0].index : -1 : -1;
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
