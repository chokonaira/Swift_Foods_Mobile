module.exports = function (api) {
  api.cache(false);
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
      // "module:react-native-dotenv",
    ]
  };
};
