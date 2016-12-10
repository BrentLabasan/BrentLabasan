import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Contact</PageHeader>
        <a
          href="mailto:BrentLabasan@gmail.com?Subject=Insert%Subject%20Here"
          target="_top"
        >
          BrentLabasan@gmail.com
        </a>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Contact);
