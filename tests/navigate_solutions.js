const globals = require('./settings/globals.js');

module.exports = {
    'Navigate Solutions Page (large)': (browser) => {
      return browser
        .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
        .url(globals.url)
        .waitForElementVisible('.navbar-header', 5000)
        .click('li.solutions-link a')
        // home link appears on non-home pages
        .waitForElementVisible('.home-link', 5000)

        // Solutions link takes us to the correct page
        .assert.urlEquals(`${globals.url}/solutions`)

        // Brokers link goes to correct place and displays correct title
        .click('#brokers-tab')
        .assert.urlEquals(`${globals.url}/solutions-brokers`)

          // Secondary NavBar is visible and displays correct elements
          .waitForElementVisible('.solutions-link.brokers', 5000)
          .assert.containsText('.solutions-link.brokers', 'BROKERS')

          // brokers heading and details are visible
          .waitForElementVisible('h1 > span.uppercase.font-bold.font-title', 5000)
          .assert.containsText('h1 > span.uppercase.font-bold.font-title', 'BROKERS')
          .assert.visible('.solutions-details')

        // Carriers link goes to correct place and displays correct title
        .click('.solutions-link.carriers')
        .assert.urlEquals(`${globals.url}/solutions-carriers`)

          // carrier second link displays relevant details
          .click('.solutions-tab-link:nth-of-type(2)')
          .assert.containsText('#tab-6', 'to source backhaul loads to improve')

          // carrier third link displays relevant details
          .click('.solutions-tab-link:nth-of-type(3)')
          .assert.containsText('#tab-7', 'surplus loads by using 3rd party carriers,')

          // carrier first link displays relevant details
          .click('.solutions-tab-link:nth-of-type(1)')
          .assert.containsText('#tab-5', 'dramatically reduce carrier and trading')

        // Shippers link goes to correct place and displays correct title
        .click('.solutions-link.shippers')
        .assert.urlEquals(`${globals.url}/solutions-shippers`)

          // shippers details are visible
          .assert.containsText('#tab-9', 'EKA Omni-TMS™ Solution for a Shipper')
          .assert.visible('.solutions-details')

        // Close link takes user back to Solutions
        .waitForElementVisible('.back-to-solution', 5000)
        .pause(500)
        .click('.back-to-solution')
        .assert.urlEquals(`${globals.url}/solutions`)

        .end()
    }
}
