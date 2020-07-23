import React, { useState } from 'react';
import { Task } from '../../domain/task';
import { IonInput, IonItem, IonButton, IonIcon } from '@ionic/react';
import { addCircleOutline as add } from 'ionicons/icons';
import { connect } from 'react-redux';

import { creators } from '../../domain/todo.list';

import './styles.css';

type Props = { create: Function };

function TaskAdd(props: Props) {

    const createNewTask = () => ({ text: '', isDone: false });

    const [task, setTask] = useState<Task>(createNewTask());

    function addTask() {
        if (!task.text) {
            alert('Informe o texto da tarefa!');
            return;
        }
        props.create(task);
        setTask(createNewTask());
    }

    return (
        <IonItem>
            <IonInput
                placeholder="Informe o texto da nova Tarefa"
                value={task.text}
                onIonChange={event => setTask({ ...task, text: event.detail.value! })}
            />
            <IonButton slot="end" onClick={() => addTask()} fill="clear">
                <IonIcon icon={add} size="large" />
            </IonButton>
        </IonItem>
    );
}

const mapActions = {
    create: creators.createCreate,
};

export default connect(null, mapActions)(TaskAdd);