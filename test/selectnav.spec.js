/*global describe, it, before, beforeEach, after, afterEach, browser: true, chai, selectnav*/

var assert = chai.assert;

var sandbox = document.createElement('div');
sandbox.setAttribute('id', 'sandbox');
document.body.appendChild(sandbox);

describe('selectnav', function () {

  var result;

  beforeEach(function () {
    sandbox.innerHTML = '<ul id="foo"><li><a href="bar.html">Bar</a></li><li><a href="baz.html" class="active">Baz</a></ul>';
  });

  it('is attached to window', function () {
    assert.isFunction(window.selectnav);
  });

  it('is accessible from global namespace', function () {
    assert.isFunction(selectnav);
  });

  describe('when invoked with ID of a one-level <ul>  list', function () {

    beforeEach(function () {
      result = selectnav('foo');
    });

    it('returns a "select" element', function () {
      assert.equal(result.tagName, 'SELECT');
    });

    it('inserts "select" element after "ul" element', function () {
      assert.equal(document.getElementById('foo').nextSibling, result);
    });

  });

  describe('with simple one level navigation and no options', function () {

    beforeEach(function () {
      result = selectnav('foo');
    });

    it('has +1 children than original "ul" (because of first label element)', function () {
      assert.equal(document.getElementById('foo').children.length+1, result.children.length);
    });

    it('has first child that is a label', function () {
      assert.equal(result.children[0].value, '');
      assert.equal(result.children[0].innerText, '- Navigation -');
    });

    it('has children that are all <option> element', function () {
      assert.equal(result.children[0].tagName, 'OPTION');
      assert.equal(result.children[1].tagName, 'OPTION');
      assert.equal(result.children[2].tagName, 'OPTION');
    });

    it('has children that have all "value" property equal to "href" attribute of the original <a> element', function () {
      assert.include(result.children[1].value, 'bar.html');
      assert.include(result.children[2].value, 'baz.html');
    });

    it('has children that have text equal to the text of the original <a> element', function () {
      assert.include(result.children[1].innerText, 'Bar');
      assert.include(result.children[2].innerText, 'Baz');
    });

    it('mark element with "active" class as selected', function () {
      assert.ok(result.children[2].selected);
    });

  });

  describe('when "label" option is set to a string', function () {

    beforeEach(function () {
      result = selectnav('foo', {label: 'foobar'});
    });

    it('set text of first element accordingly', function () {
      assert.equal(result.children[0].innerText, 'foobar');
    });

  });

  describe.skip('when "label" option is set to false', function () {

    beforeEach(function () {
      result = selectnav('foo', {label: false});
    });

    it('do not include label', function () {
      assert.lengthOf(result.children, 2);
    });

  });

  describe('when "activeclass" option is set', function () {

    beforeEach(function () {
      sandbox.innerHTML = '<ul id="foo"><li><a href="bar.html" class="activeClass">Bar</a></li><li><a href="baz.html" class="active">Baz</a></ul>';
    });

    beforeEach(function () {
      result = selectnav('foo', {activeclass: 'activeClass'});
    });

    it('mark corresponding element as selected', function () {
      assert.ok(result.children[1].selected);
      assert.notOk(result.children[2].selected);
    });

  });


});