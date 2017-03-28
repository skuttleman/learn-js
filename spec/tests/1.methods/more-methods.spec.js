var code = require('../../../src/1.methods/more-methods')

xdescribe('More Methods', function() {
  describe('addOrRemoveFirst', function() {
    it('removes the item when it is first', function() {
      var result = code.addOrRemoveFirst([1, 2, 3], 1)

      expect(result).toEqual([2, 3])
    })

    xit('adds the item when it is not first', function() {
      var result = code.addOrRemoveFirst([1, 2, 3], 3)

      expect(result).toEqual([3, 1, 2, 3])
    })

    xit('does not mutate the array', function() {
      var input = [1, 2, 3]
      var result = code.addOrRemoveFirst(input, 'puppies')

      expect(input).toEqual([1, 2, 3])
    })
  })

  describe('combine', function() {
    xit('combines two strings', function() {
      var result = code.combine('string1', 'string2')

      expect(result).toEqual('string1string2')
    })

    xit('combines two arrays', function() {
      var result = code.combine([1, 2, 3], [4, 5, 6])

      expect(result).toEqual([1, 2, 3, 4, 5, 6])
    })

    xit('returns the first value when types do not match', function() {
      expect(code.combine([1, 2, 3], 'string')).toEqual([1, 2, 3])
      expect(code.combine('string', [1, 2, 3])).toEqual('string')
    })
  })

  describe('reverseString', function() {
    xit('reverses a string', function() {
      expect(code.reverseString('some string')).toEqual('gnirts emos')
    })
  })

  describe('firstCaps', function() {
    xit('capitalizes the first letter', function() {
      var result = code.firstCaps('something')

      expect(result).toEqual('Something')
    })

    xit('works with multiple words', function() {
      var result = code.firstCaps('some input')

      expect(result).toEqual('Some Input')
    })
  })
})