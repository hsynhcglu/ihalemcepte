import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}
// file where you have the navigation

import {navigationRef} from "react-navigation-helpers";
import TenderDetail from "./screens/tendersdetail";

<NavigationContainer ref={navigationRef}>
    <TenderDetail />
</NavigationContainer>