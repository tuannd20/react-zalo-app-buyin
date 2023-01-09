import React, {useState} from 'react';
import { Avatar, Box, Button, Icon, Input, Text } from 'zmp-ui';

const UserCard = ({ user, userName }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <Box>
      <Box className="section-user-list">
        <div>
          <Box flex>
            <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : null}>{user.avatar}</Avatar>
            <Box ml={4}>
              <Text.Title>{userName}</Text.Title>
              <Text.Title>{count} x</Text.Title>
            </Box>
          </Box>
        </div>
        <div className="add-user-button">
          <Button size="small" onClick={incrementCount}>
            <div>
              <Icon icon="zi-arrow-up" size={18}/>
            </div>
          </Button>
        </div>
        <div className="add-user-button">
          <Button variant="secondary" size="small" onClick={decreaseCount}>
            <div>
              <Icon icon="zi-arrow-down" size={18}/>
            </div>
          </Button>
        </div>
      </Box>
      <div className="total-chip-input">
        <Input type="text" clearable />
      </div>
    </Box>
  )
};

export default UserCard;