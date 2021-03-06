const child = require('child_process');
const { getAppIconByPid, getAppIconListByPid } = require('./');

let finderPid = child.execSync(`ps -A | grep -m1 Finder | awk '{print $1}'`);

if (!finderPid) {
  throw new Error('Finder process not found.');
}

finderPid = parseInt(finderPid.toString().trim(), 10);

getAppIconByPid(finderPid, { size: 10 }).then(
  res => console.log(res.toString('base64')),
  err => console.error(err)
);

getAppIconListByPid([finderPid], { size: 10 }).then(
  res => console.log(res),
  err => console.error(err)
);
