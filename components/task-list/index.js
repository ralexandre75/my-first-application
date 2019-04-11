import React from 'react';
import { ListItem } from 'react-native-elements';

const TaskList = ({ taskList }) => (
    taskList.map((item, i) => (
            <ListItem
                key={i}
                title={item.content}
                status={item.status}
            />
    ))
);

export default TaskList;
