import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Metia extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Metia</PageHeader>
        <p>Work In Progress...</p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Metia);
