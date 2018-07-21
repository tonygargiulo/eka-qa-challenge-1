const globals = require('./settings/globals.js');

module.exports = {

  'Navigates To The EKA Site (large)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // logo is visible
      .waitForElementVisible('.nav-logo', 5000)

      // NavBar elements are visible
      .assert.visible('.solutions-link')
      .assert.visible('.services-link')
      .assert.visible('.company-link')
      .assert.visible('.contactus-btn-link')
      .end();
  },

  'Contact Us and Request Demo Modals appear on click (large)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // click CONTACT US, modal has correct title
      .click('.navbar-btn')
      .waitForElementVisible('#myModal', 1000)
      .assert.containsText('#myModal', 'HOW CAN WE HELP?')
      .refresh()

      // click bottom CONTACT US, modal has correct title
      .click('.btn-yellow')
      .waitForElementVisible('#myModal', 1000)
       .assert.containsText('#myModal', 'HOW CAN WE HELP?')
       .refresh()

      // enter and submit email, modal has correct text
      .setValue('#join-mailinglist_input', 'test@email.com')
      .click('#join-mailinglist_btn')
      .waitForElementVisible('#joinListModal', 5000)
      .assert.containsText('#joinListModal', 'REQUEST A DEMO')

      .end();
  },

  'Other Tests (large)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.lgWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // first tooltip displays correct text on hover
      .moveToElement('.tool:nth-of-type(2)', 0, 0)
      .assert.containsText('.tooltip', 'Unified digital platform for all trading partners including 3rd party service providers')

      .end();
  },

  'Navigates To The EKA Site (medium)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.mdWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // logo is visible
      .waitForElementVisible('.nav-logo', 5000)

      // NavBar elements are visible
      .assert.visible('.solutions-link')
      .assert.visible('.services-link')
      .assert.visible('.company-link')
      .assert.visible('.contactus-btn-link')
      .end();
  },

  'Contact Us and Request Demo Modals appear on click (medium)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.mdWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // click CONTACT US, modal has correct title
      .click('.navbar-btn')
      .waitForElementVisible('#myModal', 1000)
      .assert.containsText('#myModal', 'HOW CAN WE HELP?')
      .refresh()

      // click bottom CONTACT US, modal has correct title
      .click('.btn-yellow')
      .waitForElementVisible('#myModal', 1000)
       .assert.containsText('#myModal', 'HOW CAN WE HELP?')

      // enter and submit email, modal has correct text
      .setValue('#join-mailinglist_input', 'test@email.com')
      .submitForm('#join-mailinglist_input')
      .waitForElementVisible('#joinListModal', 1000)
      .assert.containsText('#joinListModal', 'REQUEST A DEMO')

      .end();
  },

  'Navigates To The EKA Site (small)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.smWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // logo is visible
      .waitForElementVisible('.nav-logo', 5000)
      .click('.navbar-toggle.collapsed')
      .pause(1000)

      // NavBar elements are visible
      .assert.visible('.solutions-link')
      .assert.visible('.services-link')
      .assert.visible('.company-link')
      .end();
  },

  'Contact Us and Request Demo Modals appear on click (small)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.smWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // click CONTACT US, modal has correct title
      .click('.btn.btn-navbar')
      .waitForElementVisible('#myModal', 1000)
      .assert.containsText('#myModal', 'HOW CAN WE HELP?')
      .refresh()

      // click bottom CONTACT US, modal has correct title
      .click('.btn-yellow')
      .waitForElementVisible('#myModal', 1000)
       .assert.containsText('#myModal', 'HOW CAN WE HELP?')
       .refresh()

      // enter and submit email, modal has correct text
      .setValue('#join-mailinglist_input', 'test@email.com')
      .submitForm('#join-mailinglist_input')
      .waitForElementVisible('#joinListModal', 1000)
      .assert.containsText('#joinListModal', 'REQUEST A DEMO')

      .end();
  },


  'Navigates To The EKA Site (extra small)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.xsWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // logo is visible
      .waitForElementVisible('.nav-logo', 5000)
      .click('.navbar-toggle.collapsed')
      .pause(1000)

      // NavBar elements are visible
      .assert.visible('.solutions-link')
      .assert.visible('.services-link')
      .assert.visible('.company-link')
      .assert.visible('.contactUs-link')
      .end();
  },

  'Contact Us and Request Demo Modals appear on click (extra small)': (browser) => {
    return browser
      .resizeWindow(globals.breakpoints.xsWidth, globals.breakpoints.universalHeight)
      .url(globals.url)

      // click CONTACT US, modal has correct title
      .click('.navbar-toggle.collapsed')
      .waitForElementVisible('.contactUs-link', 1000)
      .click('.contactUs-link')
      .waitForElementVisible('#myModal', 1000)
      .assert.containsText('#myModal', 'HOW CAN WE HELP?')
      .refresh()

      // click bottom CONTACT US, modal has correct title
      .click('.btn-yellow')
      .waitForElementVisible('#myModal', 1000)
       .assert.containsText('#myModal', 'HOW CAN WE HELP?')

      // enter and submit email, modal has correct text
      .setValue('#join-mailinglist_input', 'test@email.com')
      .submitForm('#join-mailinglist_input')
      .waitForElementVisible('#joinListModal', 1000)
      .assert.containsText('#joinListModal', 'REQUEST A DEMO')

      .end();
  },
}
