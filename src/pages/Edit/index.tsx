import React, { useState } from 'react';
import { IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonLabel, IonButton, IonButtons, IonList } from '@ionic/react';
import { useHistory, useLocation } from 'react-router';
import { connect } from 'react-redux';

import { Task } from '../../domain/task';
import { creators } from '../../domain/todo.list';

import './styles.css';

type Props = { update: Function };

function EditTask(props: Props) {
    
    const title = 'Edição';
    const { update } = props;
    const history = useHistory();

    let todo: Task = { text: '', isDone: false };

    if (history.location.state) {
        todo = history.location.state as Task;
    }
    
    const [task, setTask] = useState(todo);
    
    function saveTask() {
        if (!task.text) {
            alert('Informe o texto da tarefa!');
            return;
        }
        history.goBack();
        update(task);
    }

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start"><IonBackButton /></IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="start"><IonBackButton /></IonButtons>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonItem>
                    <IonLabel position="stacked">Texto</IonLabel>
                    <IonInput value={task.text} onIonChange={event => setTask({ ...task, text: event.detail.value! })} />
                </IonItem>
                <IonItem>
                    { task.isDone ?
                        <IonLabel color="success">Tarefa já realizada.</IonLabel>
                    :
                        <IonLabel color="warning">Tarefa ainda não realizada.</IonLabel>
                    }
                </IonItem>

                <div className="button">
                    <IonButton expand="block" onClick={saveTask}>Salvar</IonButton>
                </div>
            </IonContent>

        </IonPage>
    );
}

const mapActions = {
    update: creators.createUpdate,
};

export default connect(null, mapActions)(EditTask);