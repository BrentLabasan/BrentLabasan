import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Resume</PageHeader>
        <p>Request a resume at <a href="mailto:BrentLabasan@gmail.com?Subject=Insert%Subject%20Here" target="_top">BrentLabasan@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Resume);
