const Reporter = require('jasmine-spec-reporter');
const jasmineEnv = jasmine.getEnv();
const addMatchers = require('add-matchers')

jasmineEnv.clearReporters();

jasmineEnv.addReporter(new Reporter({
  displayStacktrace: 'summary',
  displayPendingSummary: false
}));

addMatchers({
  toContainInAnyOrder(util, testers) {
    return {
      compare(actual, expected) {
        let pass = [].concat(expected).every(item => {
          return util.contains(actual, item, testers)
        })

        return {
          pass,
          message: pass ? 'Passed' : 'Failed'
        }
      }
    }
  }
})
