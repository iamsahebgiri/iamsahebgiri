const visit = require('unist-util-visit');
const path = require('path');

module.exports = cplink;

var types = ['link', 'linkReference'];
function cplink() {
  return transformer;
}

function transformer(tree) {
  visit(tree, types, visitor);
}

function visitor(node, index, parent) {
  if (node.url?.endsWith('.html')) {
    node.url = node.url.replace('.html', '');
    node.url = path.join('/cp', node.url);
  }
}
