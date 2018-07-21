const globals = require('./settings/globals.js');

  module.exports = {
  'Navigate to Company (large)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // Company NavBar link navigates to correct page and displays title
      .waitForElementVisible('.navbar-header', 5000)
      .click('li.company-link a')
      .waitForElementVisible('div.about-us > div > h1', 5000)
      .assert.containsText('div.about-us > div > h1', 'About us')
      .assert.urlEquals(`${globals.url}/company`)
      .end()
  }
}
