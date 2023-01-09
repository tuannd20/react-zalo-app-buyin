import React, {useState} from 'react';
import { Avatar, Box, Text, Input, Button } from 'zmp-ui';

const UserInputGame = (props) => {
  const [user, setUser] = useState('');

  const handleChange = e => {
    setUser(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: user
    });
    setUser('');
  };

  return (
    <Box flex>
      {/* <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar>
      <Box ml={4}>
        <Text.Title>{user.name}</Text.Title>
        <Text>{user.id}</Text>
      </Box> */}
      <div className="add-user">
        <div className="input-user">
          <Input 
            placeholder='Add new user' 
            type="text" 
            name="text" 
            value={user}
            onChange={handleChange}
          />
        </div>
        <Button size="medium" onClick={handleSubmit}>Add User</Button>
      </div>
    </Box>
  )
};

export default UserInputGame;