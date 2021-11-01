module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      //this rule is for importing graphql files
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.scss$/,
          //rules for adding variables auto to any .scss file
          use: [
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./styles/shared/_variables.scss']
              }
            }
          ]
        }
      ]
    });

    return config;
  },
  //redirect to diffent pages after searching manually to a path
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/search',
        permanent: true
      },
      {
        source: '/dashboard/search',
        destination: '/dashboard/search/youtube',
        permanent: true
      }
    ];
  },

  //used for login proxy server
  async rewrites() {
    return [
      {
        source: '/google',
        destination: 'http://localhost:5000/google'
      }
    ];
  }
};
