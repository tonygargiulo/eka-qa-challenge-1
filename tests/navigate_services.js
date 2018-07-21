const globals = require('./settings/globals.js');

module.exports = {
  'Navigate to Services (large)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // Services NavBar link navigates to correct page and displays title
      .waitForElementVisible('.navbar-header', 5000)
      .click('li.services-link a')
      .waitForElementVisible('div.section-container > h2.title', 5000)
      .assert.containsText('div.section-container > h2.title', 'MAXIMUM IMPACT, MINIMAL DISRUPTION')
      .assert.urlEquals(`${globals.url}/services`)
      .end()
  }
}
