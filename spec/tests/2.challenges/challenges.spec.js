var code = require('../../../src/2.challenges/challenges')

xdescribe('Code Challenges', function() {
  describe('max', function() {
    it('returns the largest value', function() {
      var result = code.max([1, 2, 4, 17, 1, -1, -19, -10000])

      expect(result).toEqual(17)
    })

    it('handles no largest value', function() {
      var result = code.max([1, 1, 1, 1, 1])

      expect(result).toEqual(1)
    })
  })

  describe('min', function() {
    it('returns the smallest value', function() {
      var result = code.min([1, 2, 4, 17, 1, -1, -19, -10000])

      expect(result).toEqual(-10000)
    })

    it('handles no smallest value', function() {
      var result = code.min([1, 1, 1, 1, 1])

      expect(result).toEqual(1)
    })
  })

  describe('factorial', function() {
    it('calculates a factorial for 2', function() {
      var result = code.factorial(2)

      expect(result).toEqual(2)
    })

    it('handles zero', function() {
      var result = code.factorial(0)

      expect(result).toEqual(1)
    })

    it('works for 5', function() {
      var result = code.factorial(5)

      expect(result).toEqual(120)
    })
  })

  describe('printItems', function() {
    it('prints items to the console', function() {
      spyOn(console, 'log')

      code.printItems([1, 2, 3, 4, 5])

      expect(console.log).toHaveBeenCalledTimes(5)
      expect(console.log).toHaveBeenCalledWith(1)
      expect(console.log).toHaveBeenCalledWith(2)
      expect(console.log).toHaveBeenCalledWith(3)
      expect(console.log).toHaveBeenCalledWith(4)
      expect(console.log).toHaveBeenCalledWith(5)
    })
  })

  describe('doubleEach', function() {
    it('doubles each item', function() {
      var result = code.doubleEach([1, 2, 3, 4, 5])

      expect(result).toEqual([2, 4, 6, 8, 10])
    })

    it('does not mutate the original array', function() {
      var input = [1, 2, 3, 4, 5]
      code.doubleEach(input)

      expect(input).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('replaceEach', function() {
    it('replaces a letter in a string', function() {
      var result = code.replaceEach('string', 'i', 'u')

      expect(result).toEqual('strung')
    })

    it('replaces every occurence of a letter in the string', function() {
      var result = code.replaceEach('banana', 'a', 'A')

      expect(result).toEqual('bAnAnA')
    })
  })

  describe('sum', function() {
    it('adds all elements in an array', function() {
      var result = code.sum([1, 2, 3, 4, 5])

      expect(result).toEqual(15)
    })
  })

  describe('take', function() {
    it('takes the first x elements of an array', function() {
      var result = code.take([1, 2, 3, 4, 5], 3)

      expect(result).toEqual([1, 2, 3])
    })

    it('handles an empty array', function() {
      var result = code.take([], 17)

      expect(result).toEqual([])
    })

    it('returns as many elements as it can', function() {
      var result = code.take([1, 2, 3], 17)

      expect(result).toEqual([1, 2, 3])
    })
  })

  describe('distinct', function() {
    it('returns removes duplicate items', function() {
      var result = code.distinct([1, 2, 3, 3, 4])

      expect(result).toEqual([1, 2, 3, 4])
    })

    it('handles duplicates anywhere in the array', function() {
      var result = code.distinct([1, 2, 3, 1, 4, 1])

      expect(result).toEqual([1, 2, 3, 4])
    })
  })

  describe('intersection', function() {
    it('returns the common elements', function() {
      var result = code.intersection([1, 2, 3], [2, 3, 4])

      expect(result).toContainInAnyOrder([2, 3])
    })
  })
})