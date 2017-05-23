Package.describe({
  name: 'victorcreed:stripe',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'stripe v3 integeration for meteor apps.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/victorcreed/meteor-stripe',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
  api.use('ecmascript');
  api.mainModule('stripe.js');
  api.use('stripe:4.4.0');
  api.addFiles('client.html', 'client');
  api.addFiles('server.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('victorcreed:stripe');
  api.mainModule('stripe-tests.js');
});
