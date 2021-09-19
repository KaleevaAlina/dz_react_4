import React from 'react'; 
class UserArr extends React.Component {
    render() {
      let strUser = ' ';
      for(let i =0; i<users.length;i++){
        strUser += (i+1)+'. '+ 'id: '+users[i].id+' name: '+users[i].name +'; ' ;
        console.log(users[i]);
      }
      return <div>
        <span>Пользователи:<br></br> {strUser}</span>
    </div>;
    }
  }
  export default UserArr;