var npm = require('npm');
var semver = require('semver');

var showAll = process.argv.some(function (x) {
    return ['-r','--readme','-a','--all'].indexOf(x.toLowerCase()) > -1;
  });
var targetModule = process.argv.slice(2).filter(function (x){
    return x[0] != '-';
  })[0];

if (!targetModule || ['-h', '--help'].indexOf(targetModule) >= 0) {
  showUsage();
}

npm.load({loglevel:'warn'}, function (err) {
  if (err) return handleErr(err);
  npm.registry.get(targetModule, 600, false, true, function (err, data) {
    if (err) return handleErr(err);
    whats(data);
  });
});

function whats (data) {
  console.log([
    targetModule, 'by',
    data.maintainers.map(nameFormat).join()
  ].join(' '));
  console.log(data.description);

  var revisions = Object.keys(data.time);
  var latest = data['dist-tags'].latest;
  var oldest = revisions.reduce(function(a, b) { return semver.lt(b, a) || !a ? b : a; });

  console.log(
    [
      revisions.length, 'revisions since', oldest, age(data.time[oldest]),
      'latest', latest, age(data.time[latest])
    ].join(' '));

  // show readme
  var readme = data.versions[latest].readme || data.readme || 'no readme available for ' + targetModule;
  if (!showAll) {
    readme = truncateLines(readme, 5, '... run `whats ' + targetModule + ' -r` to see full readme');
  }
  console.log(readme);
}


function nameFormat(person) {
  return person.name + ' <' + person.email + '>';
}

function truncateLines(str, lineLimit, message) {
  var width = process.stdout.isTTY ? process.stdout.getWindowSize()[0] : 80;
  var lines = str.split('\n').map(function (line) {
    var len = line.length, wraps = Math.ceil(len / width), wrapped = [];
    for (var i = 0; i < wraps; i++) {
      wrapped.push(line.substr(i * width, width));
    }
    return wrapped;
  });
  // 1 level flatten
  lines = [].concat.apply([], lines);

  if(lines.length > lineLimit) {
    lines = lines.slice(0, lineLimit).concat(message);
  }

  return lines.join('\n');
}

function age(isoDate) {
  return '(' + daysSinceISODate(isoDate) + ' days ago)';
}

function daysSinceISODate(isoDateStr) {
  var span = new Date() - Date.parse(isoDateStr);
  var daysInMs = 1000 * 60 * 60 * 24;
  return Math.round(span / daysInMs);
}

function showUsage() {
  console.log('Usage: whats [moduleName] {options}');
  console.log('');
  console.log('    Options:');
  console.log('    -a, --all, -r, --readme    Show full readme');
  process.exit(1);
}

function handleErr(err) {
  console.error(err);
  process.exit(1);
}