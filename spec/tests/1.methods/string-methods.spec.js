var code = require('../../../src/1.methods/string-methods')

xdescribe('String Methods', function() {
  describe('toCase', function() {
    it('converts a string to upper case', function() {
      var result = code.toCase('some string', 'UPPER')

      expect(result).toEqual('SOME STRING')
    })

    xit('converts a string to lower case', function() {
      var result = code.toCase('SOME STRING', 'LOWER')

      expect(result).toEqual('some string')
    })

    xit('returns the input if a type is not supplied', function() {
      var result = code.toCase('Some String', Math.random())

      expect(result).toEqual('Some String')
    })
  })

  describe('includes', function() {
    xit('returns true if the supplied string is included', function() {
      var result = code.includes('some string', 'some')

      expect(result).toEqual(true)
    })

    xit('returns false if the supplied string is not included', function() {
      var result = code.includes('some string', 'bacon')

      expect(result).toEqual(false)
    })

    xit('trims the string before matching', function() {
      var result1 = code.includes('  some  string  ', '  s')
      var result2 = code.includes('  some  other string  ', '  s')

      expect(result1).toEqual(true)
      expect(result2).toEqual(false)
    })
  })

  describe('dropLetter', function() {
    xit('drops the first letter when the length of the string is even', function() {
      var result = code.dropLetter('some letters')

      expect(result).toEqual('ome letters')
    })

    xit('drops the last letter when the length of the string is odd', function() {
      var result = code.dropLetter('some string')

      expect(result).toEqual('some strin')
    })
  })
})