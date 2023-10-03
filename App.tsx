import React from 'react';

import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import {
  IntroductionToGestures,
  BottomSheet,
  Animated3dCard,
  FullBottomSheet,
} from './src/Reactiive';

import {
  HandlingPanGesturesWithDecay,
  HandlingTapGestures,
} from './src/reanimated';
import {PanGesture, PanGestureHandler} from './src/gesture-handler';

function App(): JSX.Element {
  // return <IntroductionToGestures />;
  // return <BottomSheet />;
  // return <Animated3dCard />;
  // return <FullBottomSheet />;
  // return <HandlingTapGestures />;
  // return <HandlingPanGesturesWithDecay />;
  // return <PanGesture />;
  return <PanGestureHandler />;
}

export default App;
