import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class Intersect extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Intersect</PageHeader>
        <p>Work In Progress...</p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Intersect);
