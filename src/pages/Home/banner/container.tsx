import { compose, withHandlers, lifecycle } from "recompose";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as Immutable from "immutable";
import { IProps } from "./constant";

const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: any) => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    increment: () => {
      // dispatch(increment())
    },
    decrement: () => {
      // dispatch(decrement())
    },
    reset: () => {
      // dispatch(reset())
    }
  };
};
export const hoc = compose<IProps, any>(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    init: (props: IProps) => {
      return () => {
        console.log(77);
      };
    }
  }),
  lifecycle({
    componentDidMount: function() {
      this.props.init();
    }
  })
);
