import { compose, withHandlers, lifecycle } from "recompose";
import { Dispatch } from "redux";
import { connect } from "react-redux";
// import * as Immutable from "immutable";
import {increment,} from "./actions"
import { IProps } from "./constant";

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    banner: state.banner
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    increment: () => {
      dispatch(increment())
    }
  };
};
export const hoc = compose<IProps, any>(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    init: (props: IProps) => {
      return () => {
        props.increment()
      };
    }
  }),
  lifecycle({
    componentDidMount: function() {
      this.props.init();
    }
  })
);
