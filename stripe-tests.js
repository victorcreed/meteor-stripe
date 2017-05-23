// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by stripe.js.
import { name as packageName } from "meteor/victorcreed:stripe";

// Write your tests here!
// Here is an example.
Tinytest.add('stripe - example', function (test) {
  test.equal(packageName, "stripe");
});
