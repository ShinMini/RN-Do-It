import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {styles} from '../Styles/TodoStyles';

// react property를 인터페이스로 정의
interface ToDoProps {
  index: number;
  todo: TodoModel;
  handleDelete: () => {};
  handleEdit: () => {};
}

// 삭제 버튼, 수정 버튼 눌렸을 때 콜백으로 해당 index를 넘겨주는 함수 생성. 
const ToDo: React.FC<ToDoProps> = props => {
  const handleDelete = () => {
    props.handleDelete(props.index);
  };

  const handleEdit = () => {
    props.handleEdit(props.index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.todo.title} - {props.todo.author}
      </Text>
      <Text style={styles.content}>{props.todo.content}</Text>
      <View style={styles.footer}>
        <Pressable onPress={handleEdit}>
          <Icon style={styles.update} name="surgical-knife"></Icon>
        </Pressable>
        <Pressable onPress={handleDelete}>
          <Icon style={styles.trash} name="trash"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default ToDo;
