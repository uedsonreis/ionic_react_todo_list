import React, { useState } from 'react';
import { IonItem, IonLabel, IonCheckbox, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import { createOutline as editIcon, trashOutline as delIcon } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import { creators } from '../../domain/todo.list';
import { Task } from '../../domain/task';

import './styles.css';

type Props = { task: Task, update: Function, remove: Function };

const TaskItem: React.FC<Props> = (props: Props) => {

    const history = useHistory();
    const { task, update, remove } = props;
    const [isDone, setDone] = useState<boolean>(task.isDone);

    function handleMark() {
        task.isDone = !isDone;
        setDone(task.isDone);
        update(task);
    }

    function goToEditTask() {
        history.push({ pathname: 'edit', state: task });
    }

    return (
        <IonItemSliding>

            <IonItem>
                <IonCheckbox slot="start" color="secondary" checked={isDone} onIonChange={e => handleMark()} />
                <IonLabel className={isDone ? "done" : ""}>{task.text}</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
                
                <IonItemOption onClick={() => goToEditTask()}>
                    <IonIcon icon={editIcon} size="large" />
                </IonItemOption>

                <IonItemOption onClick={() => remove(task)} color="danger">
                    <IonIcon icon={delIcon} size="large" />
                </IonItemOption>

            </IonItemOptions>

        </IonItemSliding>
    );
}

const mapActions = {
    update: creators.createUpdate,
    remove: creators.createDelete,
};

export default connect(null, mapActions)(TaskItem);