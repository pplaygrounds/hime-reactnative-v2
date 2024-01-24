
// import React, { useEffect } from 'react';
// import { ViroARScene, Viro3DObject, ViroARTrackingTargets } from '@viro-community/react-viro';
import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from "@viro-community/react-viro";

var createReactClass = require('create-react-class');


var ARScene = createReactClass({

  render: function() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"logo"}>
          <Viro3DObject
              scale={[0, 0, 0]}
              source={require('./../assets/an_sac_menh_chi_bao1.obj')}
              resources={[require('./../assets/an_sac_menh_chi_bao1.mtl'),
                          ]}
              type="OBJ"
              />
        </ViroARImageMarker>
      </ViroARScene>
        );
      },
    });

ViroARTrackingTargets.createTargets({
  logo : {
    source : require('./../assets/an_sac_menh_chi_bao3.png'),
    orientation : "Up",
    physicalWidth : 0.165
  }
});


// const ARScene = () => {
//   // useEffect(() => {
//   //    ViroARTrackingTargets.createTargets({
//   //     targetImage: {
//   //       source: require('./../assets/an_sac_menh_chi_bao3.png'),
//   //       orientation: 'Up',
//   //       physicalWidth: 0.1, 
//   //     },
//   //   });
//   // }, []);

//   return (
//     <ViroARScene>
//       <Viro3DObject
//         source={require('../assets/an_sac_menh_chi_bao1.obj')}
//         resources={[
//           require('../assets/an_sac_menh_chi_bao3.png'),
//         ]}
//         position={[0, 0, -2]}
//         scale={[0.1, 0.1, 0.1]}
//         type="OBJ"
//       />
//     </ViroARScene>
//   );
// };

export default ARScene;
