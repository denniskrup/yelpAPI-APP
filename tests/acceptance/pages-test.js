import { module, test } from 'qunit';
import { visit, currentURL, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import sinon from 'sinon';

module('Acceptance | Page Existence', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);

  hooks.after(function() {
    sandbox.restore();
  });
  test('users can see who they are logged in as and have option to log out', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Buddy Boy'
    });
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('.logged-in-text').exists();
    assert.dom('.sign-out').exists();
  
  });

  test('users can input data to inputs', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Buddy Boy'
    });
    await visit('/');

    assert.equal(currentURL(), '/');
    await fillIn('input', 'Data');
    assert.dom('.results').exists();
  
  });
  test('users can visit favorites page', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Buddy Boy'
    });
    await visit('/favorites');

    assert.equal(currentURL(), '/favorites');
    assert.dom('.results').exists();
    assert.dom('.search').exists();

  });
});
