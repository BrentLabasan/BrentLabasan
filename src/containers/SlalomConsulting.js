import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class SlalomConsulting extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>SlalomConsulting</PageHeader>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(SlalomConsulting);
