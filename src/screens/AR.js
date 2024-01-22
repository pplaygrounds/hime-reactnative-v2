import React, { Component } from "react";

import {
  ViroARScene,
  ViroAmbientLight,
  ViroARImageMarker,
  Viro3DObject,
  ViroARTrackingTargets,
} from "@viro-community/react-viro";

var createReactClass = require("create-react-class");

var ARScreen = createReactClass({
  render: function () {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        <ViroARImageMarker target={"logo"}>
          <Viro3DObject
            source={require("../assets/an_sac_menh_chi_bao.obj")}
            resources={[require("../assets/an_sac_menh_chi_bao.mtl")]}
            highAccuracyEvents={true}
            position={[1, 3, -5]}
            scale={[2, 2, 2]}
            rotation={[45, 0, 0]}
            type="OBJ"
            transformBehaviors={["billboard"]}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require("../assets/an_sac_menh_chi_bao.png"),
    orientation: "Up",
    physicalWidth: 0.157, // real world width in meters
    type: "Image",
  },
});

module.exports = ARScreen;
