let path = require('path')
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

let proxy = new Proxy(
  /* The first argument to the Proxy constructor is passed as
   * "target" to the "get" method below.
   * Put the names of the libraries included in your reusable
   * module as they would be imported when the module is actually used.
   */
  {
    "nmm-rnsdk": path.resolve(__dirname, "../NMM-RNSDK")
  },
  {
    get: (target, name) => {
      if (target.hasOwnProperty(name)) {
        return target[name];
      }
      return path.join(process.cwd(), `node_modules/${name}`);
    }
  }
);

module.exports = {
  // watchFolders: [
  //   path.resolve(__dirname + '/./node_modules/nmm-rnsdk')
  // ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    resolver: {
      /* This configuration allows you to build React-Native modules and
       * test them without having to publish the module. Any exports provided
       * by your source should be added to the "target" parameter. Any import
       * not matched by a key in target will have to be located in the embedded
       * app's node_modules directory.
       */
      // extraNodeModules: {
      //   "nmm-rnsdk": path.resolve(__dirname + '/./nmm-rnsdk/'),
      // }
    },
  },
};
