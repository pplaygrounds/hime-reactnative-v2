const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const {
  resolver: { assetExts },
} = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [
      ...assetExts,
      "obj",
      "mtl",
      "JPG",
      "vrx",
      "hdr",
      "gltf",
      "glb",
      "GLB",
      "bin",
      "arobject",
      "gif",
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
