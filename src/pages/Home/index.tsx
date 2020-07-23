import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { connect } from 'react-redux';

import { Task } from '../../domain/task';
import TaskList from '../../components/TaskList';
import TaskAdd from '../../components/TaskAdd';

import './styles.css';

const Home: React.FC = (props: any) => {

    const { list } = props;
    const title = 'Lista de Tarefas';

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <TaskAdd />
                <div slot="fixed"><TaskAdd /></div>

                <TaskList list={list} />

            </IonContent>

        </IonPage>
    );
};

function mapToState(state: any) {
    return { list: state.todoList };
}

export default connect(mapToState)(Home);
