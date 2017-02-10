import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h3> This is the Dashboard!!</h3>
        <p>Content</p>
      </div>
    );
  }
}


Dashboard.propTypes = {
  txt: React.PropTypes.string,
  car: React.PropTypes.string,
};

Dashboard.defaultProps = {
  txt: 'default txt value'
};

export default Dashboard;