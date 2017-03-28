# Learn JS

This is a repo to learn fundamentals of coding with javascript.

## Install

```bash
$ git clone https://github.com/skuttleman/learn-js.git
$ cd learn-js
$ npm install
```

## Using This Repo

Go through each sub-folder in the `src` directory in numeric order (starting with 0). Follow the directions in the markdown file which will include some reading and some exercises.

## Run tests

```bash
$ npm test
```

As you start each section, make sure to follow these directions:
  - Open the associated file in the `spec` folder.
  - Change the word `xdescribe` to `describe` near the top of the file.
  - Run the test in the terminal with the command `npm test`. The first test should already pass.
  - Edit the contents of the appropriate file in the `src` folder to make the second test pass.
  - As you make each test pass, change the next place you see `xit` to `it`.
  - Make sure to run the tests every time you change `xit` to `it`. Some tests may already be passing and won't need additional work.
  - When all tests are passing in all associated exercises, move on to the next numbered section.

**IMPORTANT**: Make sure all tests are passing or pending before moving on to the next section.