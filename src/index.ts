import { resolve } from 'path';
import * as fs from 'fs';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

type Config = {
  dist: string;
}

module.exports = (config: Config) => {
  const farList = Object.keys(far).map(key => {
    const item = far[key];
    return `${item.prefix} fa-${item.iconName}`;
  });

  const fabList = Object.keys(fab).map(key => {
    const item = fab[key];
    return `${item.prefix} fa-${item.iconName}`;
  });

  const fasList = Object.keys(fas).map(key => {
    const item = fas[key];
    return `${item.prefix} fa-${item.iconName}`;
  });

  const dir = resolve(config.dist);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(resolve(config.dist, 'far.json'), JSON.stringify(farList), err => {
    console.log(err);
  });

  fs.writeFile(resolve(config.dist, 'fab.json'), JSON.stringify(fabList), err => {
    console.log(err);
  });

  fs.writeFile(resolve(config.dist, 'fas.json'), JSON.stringify(fasList), err => {
    console.log(err);
  });

  fs.writeFile(resolve(config.dist, 'far.js'), `module.exports = ${JSON.stringify(farList)}`, err => {
    console.log(err);
  });

  fs.writeFile(resolve(config.dist, 'fab.js'), `module.exports = ${JSON.stringify(fabList)}`, err => {
    console.log(err);
  });

  fs.writeFile(resolve(config.dist, 'fas.js'), `module.exports = ${JSON.stringify(fasList)}`, err => {
    console.log(err);
  });
}