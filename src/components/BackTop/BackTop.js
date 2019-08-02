import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

export class BackTop extends Component {

  render() {
    const { showScrollTop } = this.props
    return (
      <button
        className={showScrollTop ? 'backTop backTop__show' : 'backTop backTop__hide'}
        type="button"
        onClick={this.handleScrollTop}
      >
        <i className="backTop__iconfont">&#xe62e;</i>
      </button>
    )
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTop)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTop)
  }

  handleScrollTop(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }
}

export const mapStateToProps = (state) => {
  return {
    showScrollTop: state.getIn(['BackTop', 'showScrollTop'])

  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeScrollTop() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreators.toggleScrollTop(true))
      } else {
        dispatch(actionCreators.toggleScrollTop(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackTop);
