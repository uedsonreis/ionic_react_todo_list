import React, { useState } from 'react';
// import { FlatList, Dimensions, View, Text } from 'react-native';

import { Task } from '../../domain/task';
import TaskItem from '../TaskItem';
import { IonList } from '@ionic/react';

type Props = { list: Task[] };

function TaskList(props: Props) {

    const { list } = props;

    return (
        <IonList>
            {list && list.map(todo => (
                <TaskItem key={todo.id} task={todo} />
            ))}
        </IonList>
    );
}

export default TaskList;