import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Contact</PageHeader>
        <p>Want to chat about web development jobs or consulting?</p>
        <p>Send me a message at <a href="mailto:BrentLabasan@gmail.com?Subject=Insert%Subject%20Here" target="_top">BrentLabasan@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Contact);
