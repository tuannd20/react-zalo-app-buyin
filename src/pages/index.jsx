import React, {useState} from 'react';
import {
  List,
  Page,
  Icon,
  Button,
  Input,
  Modal,
  Text
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userState } from '../state';

import UserCard from '../components/user-card';
import UserInputGame from '../components/user-input';
import FormPage from './form';
import { useNavigate } from 'react-router-dom'

const renderBuyInUser = () => {
  return (
    <div>
       <Text.Title>Tuấn</Text.Title>
       <Text.Title>Tuấn</Text.Title>
       <Text.Title>Tuấn</Text.Title>
    </div>
  );
}


const HomePage = () => {
  const user = useRecoilValue(userState);

  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  const navigate = useNavigate()
  return (
    <Page className="page">
    <div className="section-container">
      {/* <div className="add-user">
        <div className="input-user">
          <Input placeholder='Add new user' />
        </div>
        <Button htmlType="submit" size="medium">Add User</Button>
      </div> */}
      <UserInputGame onSubmit={addTodo} />
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Tân"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Tuấn"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Tú"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Toàn"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Mỹ"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Tiến"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Hiển"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Việt"/> 
    </div>
    <div className="section-container">
      <UserCard user={user} userName="Vương"/> 
    </div>
    <div className="section-container">
      <Button
        variant='secondary'
        fullWidth
        onClick={() => {setModalVisible(true)}}
      >
        Submit
      </Button>
        <Modal
          visible={modalVisible}
          title="Total Buy In"
          onClose={() => {
              setModalVisible(false);
          }}
          zIndex={1200}
          actions={[
              {
                  text: "Cancel",
                  close: true,
                  highLight: true,
              },
          ]}
          description={renderBuyInUser}
        />
    {/* <List >
      <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div  onClick={()=>navigate('/about')}>About</div>
      </List.Item>
      <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div onClick={()=>navigate('/user')}>User</div>
      </List.Item>
    </List> */}
    </div>
    {/* <Button htmlType="submit" size="medium">Add User</Button> */}
  </Page>
  );
}

export default HomePage;