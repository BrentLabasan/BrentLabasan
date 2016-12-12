import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>About</PageHeader>
        <p>Brent Labasan is a web developer, residing in Seattle.</p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(About);
