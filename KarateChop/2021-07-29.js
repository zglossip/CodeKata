const chop = (elementToFind, array) => {
  let ab = {a: 0, b: array.length - 1}

  if(array.length === 0) {
    return -1
  }

  while (ab.a !== ab.b) {
    ab = subChop(array, ab, elementToFind)
  }

  return array[ab.a] === elementToFind ? ab.a : -1;
}

const subChop = (array, ab, elementToFind) => {
  const midpoint = Math.ceil((ab.b - ab.a) / 2);

  if(elementToFind === array[midpoint]) {
    return {a: midpoint, b: midpoint}
  } else if (elementToFind < array[midpoint]) {
    return {a: ab.a, b: midpoint - 1}
  } else {
    return {
      a: midpoint + 1,
      b: ab.b
    }
  }
}

const assert_equal = (el1, el2) => {
  if (el1 === el2) {
    console.log("success")
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