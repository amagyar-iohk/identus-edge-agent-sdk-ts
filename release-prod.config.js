const baseConfig = require('./release.base.config');
module.exports = baseConfig({
  branches: [
    'main',
    {
      name: 'rc',
    }
  ],
});
