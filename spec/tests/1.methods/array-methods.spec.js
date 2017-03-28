var code = require('../../../src/1.methods/array-methods')

xdescribe('String Methods', function() {
  describe('includes', function() {
    it('returns true when the item is in the array', function() {
      var result = code.includes([1, 2, 3], 2)

      expect(result).toEqual(true)
    })

    xit('returns false when the item is not in the array', function() {
      var result = code.includes([1, 2, 3], 17)

      expect(result).toEqual(false)
    })
  })

  describe('addOrRemove', function() {
    xit('removes the item when it is last', function() {
      var result = code.addOrRemove([1, 2, 3], 3)

      expect(result).toEqual([1, 2])
    })

    xit('adds the item when it is not last', function() {
      var result = code.addOrRemove([1, 2, 3], 4)

      expect(result).toEqual([1, 2, 3, 4])
    })
  })

  describe('zeroList', function() {
    xit('grows the list until the length is reached', function() {
      var result = code.zeroList([0, 0, 0], 5)

      expect(result).toEqual([0, 0, 0, 0, 0])
    })

    xit('shrinks the list until the length is reached', function() {
      var result = code.zeroList([0, 0, 0, 0, 0, 0, 0, 0], 5)

      expect(result).toEqual([0, 0, 0, 0, 0])
    })

    xit('does not care if supplied list does not contain zeroes', function() {
      expect(code.zeroList([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4, 0, 0, 0])

      expect(code.zeroList([1, 2, 3, 4, 5, 6], 3)).toEqual([1, 2, 3])
    })
  })

  describe('first', function() {
    xit('returns the first element in the array', function() {
      expect(code.first(['a', 'b', 'c'])).toEqual('a')
    })
  })

  describe('last', function() {
    xit('returns the last element in the array', function() {
      expect(code.last(['a', 'b', 'c'])).toEqual('c')
    })

    xit('does not mutate the original array', function() {
      var input = ['a', 'b', 'c']
      code.last(input)

      expect(input).toEqual(['a', 'b', 'c'])
    })
  })
})