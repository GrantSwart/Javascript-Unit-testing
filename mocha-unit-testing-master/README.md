## Getting Started with JavaScript Unit Testing Using Mocha

Code to accompany the following article: http://www.sitepoint.com/unit-test-javascript-mocha-chai

To run the code samples:

- Clone the repo
- Run `npm install`
- Open `testrunner.html` in browser
- Alternatively, uncomment Node specific code and run `mocha` from the command line (this requires Mocha to be installed globally).

License MIT

Download Node js and install on Local PC
========================================
https://nodejs.org/en/



With Node installed, open up a terminal or command line in your project’s directory.
==================================================================================
If you want to test code in the browser, run npm install mocha chai --save-dev
If you want to test Node.js code, in addition to the above, run npm install -g mocha
This installs the packages mocha and chai. Mocha is the library that allows us to run tests, and Chai contains some helpful functions that we’ll use to verify our test results.