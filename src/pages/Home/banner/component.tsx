import * as React from "react";
import { IProps } from "./constant";
import { hoc } from "./container";

import "./styles/component.css";

export class Component extends React.Component<IProps, any> {
  render() {
    let {banner} = this.props;
    console.log();    
    return <div className="m-home-banner">
        banner ~^00^~ {banner.count}
    </div>;
  }
}

export const ComponentWithHoc = hoc(Component);
