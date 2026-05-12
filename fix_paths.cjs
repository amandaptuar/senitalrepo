const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
let fixedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('src="/images/')) {
    content = content.replace(/src="\/images\//g, 'src="images/');
    changed = true;
  }
  if (content.includes('url(/images/')) {
    content = content.replace(/url\(\/images\//g, 'url(images/');
    changed = true;
  }
  if (content.includes('src="/js/')) {
    content = content.replace(/src="\/js\//g, 'src="js/');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed absolute paths in ' + file);
    fixedCount++;
  }
});

console.log('Fixed paths in ' + fixedCount + ' files.');
