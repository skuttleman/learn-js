var code = require('../../../src/0.control-flow/excercises')

xdescribe('Control Flow', function() {
  function makeRange(start, end) {
    if (start < end) {
      return [start].concat(makeRange(start + 1, end))
    } else if (start > end) {
      return [start].concat(makeRange(start - 1, end))
    }
    return [start]
  }

  describe('greeting', function() {
    it('says You are young', function() {
      var result = code.greeting(27)

      expect(result).toEqual('You are young.')
    })

    xit('tells you if you are old', function() {
      var result = code.greeting(34)

      expect(result).toEqual('You are too old. Gwoss!')
    })

    xit('tells you it is splitzo time', function() {
      var result = code.greeting(30)

      expect(result).toEqual('It\'s splitzo time!')
    })
  })

  describe('specialGreeting', function() {
    beforeEach(function() {
      spyOn(console, 'log')
    })

    xit('says hello to you by name', function() {
      code.specialGreeting('Brenna')

      expect(console.log).toHaveBeenCalledWith('Hello, Brenna.')
    })

    xit('says its name is Brenna, too', function() {
      code.specialGreeting('Brenna')

      expect(console.log).toHaveBeenCalledTimes(2)
      expect(console.log.calls.argsFor(1)).toEqual(['That\'s my name, too!'])
    })
  })

  describe('oneToTenWithWithWhile', function() {
    var range

    beforeEach(function() {
      spyOn(console, 'log')

      range = makeRange(1, 10)
    })

    xit('counts up to ten', function() {
      code.oneToTenWithWhile()

      expect(console.log).toHaveBeenCalledTimes(10)

      range.forEach(function(number, index) {
        expect(console.log.calls.argsFor(index)).toEqual([number])
      })
    })

    xit('uses a while loop', function() {
      var src = code.oneToTenWithWhile.toString()

      expect(src).toContain('while')
      expect(src).not.toContain('for')
    })
  })

  describe('tenToOneWithFor', function() {
    var range

    beforeEach(function() {
      spyOn(console, 'log')

      range = makeRange(10, 1)
    })

    xit('counts down from ten', function() {
      code.tenToOneWithFor()

      expect(console.log).toHaveBeenCalledTimes(10)

      range.forEach(function(number, index) {
        expect(console.log.calls.argsFor(index)).toEqual([number])
      })
    })

    xit('uses a for loop', function() {
      var src = code.tenToOneWithFor.toString()

      expect(src).not.toContain('while')
      expect(src).toContain('for')
    })
  })

  describe('printRange', function() {
    var start, end, range
    beforeEach(function() {
      spyOn(console, 'log')

      start = Math.floor(Math.random() * 5)
      end = Math.floor(Math.random() * 10) + 8
      range = makeRange(start, end)
    })

    xit('prints a range', function() {
      code.printRange(start, end)

      expect(console.log).toHaveBeenCalledTimes(end - start + 1)

      range.forEach(function(number, index) {
        expect(console.log.calls.argsFor(index)).toEqual([number])
      })
    })
  })

  describe('onlyEven', function() {
    var start, end, range
    beforeEach(function() {
      spyOn(console, 'log')

      start = Math.floor(Math.random() * 5)
      end = Math.floor(Math.random() * 10) + 8
      range = makeRange(start, end)
    })

    xit('prints a range', function() {
      code.onlyEven(start, end)

      range.forEach(function(number, index) {
        if (number % 2 === 0) {
          expect(console.log).toHaveBeenCalledWith(number)
        } else {
          expect(console.log).not.toHaveBeenCalledWith(number)
        }
      })
    })
  })
})