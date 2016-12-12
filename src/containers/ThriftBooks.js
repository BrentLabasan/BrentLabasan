import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class ThriftBooks extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>ThriftBooks</PageHeader>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(ThriftBooks);
