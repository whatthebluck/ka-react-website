import { compose } from "redux"
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'
import { initStore } from '../store'
import WithAuth from "./WithAuth";
import WithLayout from "./WithLayout";


export const pageWithoutLayout = compose(
  withRedux(initStore),
  connect(state => ({...state})),
  WithAuth
);

export default compose(
  pageWithoutLayout,
  WithLayout
);
