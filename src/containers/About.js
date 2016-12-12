import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>About</PageHeader>
        <p>Hi there! My name is Brent Labasan and I am a Seattle based web developer who has worked on a variety of technologies such as Angular, React, and ASP.NET MVC.</p>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(About);
