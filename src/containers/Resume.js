import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Resume</PageHeader>
        <p></p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Resume);
