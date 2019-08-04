import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreators } from './store/index';


export class BackTop extends Component {
  static handleScrollTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { changeScrollTop } = this.props;
    window.addEventListener('scroll', changeScrollTop);
  }

  componentWillUnmount() {
    const { changeScrollTop } = this.props;
    window.removeEventListener('scroll', changeScrollTop);
  }

  render() {
    const { showScrollTop } = this.props;
    return (
      <button
        className={showScrollTop ? 'backTop backTop__show' : 'backTop backTop__hide'}
        type="button"
        onClick={this.handleScrollTop}
      >
        <i className="backTop__iconfont">&#xe62e;</i>
      </button>
    );
  }
}

export const mapStateToProps = state => ({
  showScrollTop: state.getIn(['BackTop', 'showScrollTop']),

});

export const mapDispatchToProps = dispatch => ({
  changeScrollTop() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleScrollTop(true));
    } else {
      dispatch(actionCreators.toggleScrollTop(false));
    }
  },
});

BackTop.propTypes = {
  showScrollTop: PropTypes.bool.isRequired,
  changeScrollTop: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BackTop);
