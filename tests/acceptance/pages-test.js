import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import sinon from 'sinon';

module('Acceptance | main page', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);

  hooks.after(function() {
    sandbox.restore();
  });

  test('visiting application route signed out', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('.sign-in').exists();
  });

  test('visiting application signed in', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Coolio'
    });
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('.sign-out').exists();
    assert.dom('.favorites').exists();
  });
});
