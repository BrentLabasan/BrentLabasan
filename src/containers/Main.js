import React, { PropTypes } from 'react';
import { updateDemoTheme, updateDemoEndpoint } from '../actions/demo-ui';
import { connect } from 'react-redux';

if (!global.__SERVER__ && !global.__TEST__) {
  require('../styles/main.scss');
}

class Main extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    pageEndpoint: PropTypes.string,
    theme: PropTypes.string,
    currentUserUid: PropTypes.string,
    currentUserProvider: PropTypes.string,
    currentUserEndpoint: PropTypes.string,
  };

  updateTheme({ value }) {
    this.props.dispatch(updateDemoTheme(value));
  }

  updateEndpoint({ value }) {
    this.props.dispatch(updateDemoEndpoint(value));
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ overflow: 'hidden', backgroundUrl: '/RequestAStellarATM/RequestAStellarATM-banner.jpg' }}>
          <a href="/portfolio/RequestAStellarATM">
            <img src="/RequestAStellarATM/RequestAStellarATM-banner.png" alt="Request A Stellar ATM banner" />
          </a>
        </div>

        <div style={{ overflow: 'hidden', backgroundUrl: '/microsoft-atlanta/Microsoft-Atlanta-banner.jpg' }}>
          <a href="/portfolio/microsoft-atlanta">
            <img src="/microsoft-atlanta/Microsoft-Atlanta-banner.jpg" alt="Microsoft-Atlanta banner" />
          </a>
        </div>

        <div style={{ overflow: 'hidden', backgroundUrl: '/thriftbooks/Thriftbooks-banner.jpg' }}>
          <a href="/portfolio/thriftbooks">
            <img src="/thriftbooks/Thriftbooks-banner.jpg" alt="Thriftbooks banner" />
          </a>
        </div>

        <div style={{ overflow: 'hidden', backgroundUrl: '/slalom-consulting/Slalom-Consulting-banner.jpg' }}>
          <a href="/portfolio/slalom-consulting">
            <img src="/slalom-consulting/Slalom-Consulting-banner.jpg" alt="Slalom Consulting banner" />
          </a>
        </div>

        <div style={{ overflow: 'hidden', backgroundUrl: '/intersect/Intersect-banner.jpg' }}>
          <a href="/portfolio/intersect">
            <img src="/intersect/Intersect-banner.jpg" alt="Intersect banner" />
          </a>
        </div>

        <div style={{ overflow: 'hidden', backgroundUrl: '/metia/Metia-banner.jpg' }}>
          <a href="/portfolio/metia">
            <img src="/metia/Metia-banner.jpg" alt="Metia banner" />
          </a>
        </div>

        {/* <div style={{ overflow: 'hidden', backgroundUrl: '/28Chains/28Chains-banner.jpg' }}>
          <a href="/portfolio/28Chains">
            <img src="/28Chains/28Chains-banner.jpg" alt="28Chains banner" />
          </a>
        </div> */}

      </div>
    );
  }
}

export default connect(({ auth, demoUi }) => ({
  currentUserUid: auth.getIn(['user', 'attributes', 'provider']) || 'none',
  currentUserProvider: auth.getIn(['user', 'attributes', 'uid']) || 'none',
  currentUserEndpoint: auth.getIn(['user', 'endpointKey']) || 'none',
  theme: demoUi.get('theme'),
  pageEndpoint: demoUi.get('endpoint'),
}))(Main);
