module.exports = {
  packagerConfig: {
    icon: 'C:\Users\peter\repos\wether-desktop\im'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://serv.hnz.li/logo/favicon_io/default.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: '1codeit',
          name: 'wether'
        },
        prerelease: true
      }
    }
  ]
};
