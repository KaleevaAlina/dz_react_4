import React from 'react'; 
import UserList from '../UserList';
class User extends React.Component {
    render() {
      this.props = "Alina";
      return <div>
                 <span><UserList />{this.props}</span>
              </div>;
    }
  }
  export default User;