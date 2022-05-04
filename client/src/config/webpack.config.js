module.exports = {
    //...
    devServer: {
      open: {
        target: ['first.html', 'http://localhost:3000/second.html'],
        app: {
          name: 'google-chrome',
          arguments: ['--incognito', '--new-window'],
        },
      },
    },
  };