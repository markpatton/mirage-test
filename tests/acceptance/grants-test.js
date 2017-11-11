import { test } from 'qunit';
import moduleForAcceptance from 'mirage-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | grants');

test('visiting /grants', function(assert) {
  visit('/grants');

  andThen(function() {
    assert.equal(currentURL(), '/grants');
  });
});
