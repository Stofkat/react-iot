import { Component } from 'react';
import AppState from './AppState';


class AppStateComponent extends Component {

  static listeners = [];
  static listenerCount;

  state = { ...AppState.state };

  componentDidMount() {
    AppStateComponent.listeners.push(this.onStateUpdated.bind(this));
    this.setState({ ...AppState.state });
  }

  componentWillUnmount() {
    // AppState.ui.unwatch();
  }

  onStateUpdated(newState) {
    this.setState({ ...newState });

    // this.forceUpdate();
  }

  /**
   * Setting the state for all attached UI components
   */
  static set(newState) {
    AppStateComponent.listeners.map(callback => {
      if (callback) {
        callback(newState);
      }
    });
  }
  // This function will be overridden
  render() {
    return null;
  }

}

export default AppStateComponent;
