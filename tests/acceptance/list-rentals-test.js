import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('Should list available rentals.', function(assert){
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'Should see 3 listings');
  });
});

test('Should link to information about the company.', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'Should navigate to about.');
  });
});

test('Should link to contact information.', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'Should navigate to contact.');
  });
});

test('Should filter the list of rentals by city.', function(assert){
  visit('/');
  fillIn('.list-filter input', 'seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1 , 'Should show 1 listing.');
    assert.equal(
        find('.listing .location:contains("Seattle")').length, 1,
        'Should contain 1 listing with location Seattle'
    );
  });
});
