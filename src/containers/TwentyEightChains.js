import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class TwentyEightChains extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>TwentyEightChains</PageHeader>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(TwentyEightChains);
