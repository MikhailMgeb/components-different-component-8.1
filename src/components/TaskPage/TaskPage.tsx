import { FC } from 'react';

import { cnPage } from './TaskPage.classname';
import { PageContent } from '../PageContent/PageContent';

import './TaskPage.css';

type TaskProps = {
    subtitle: string;
    description: string;
}

type TaskPageProps = {
    title: string;
    tasks: TaskProps[];
}

const TaskPage: FC<TaskPageProps> = ({ title, tasks }) => {
    return (
        <main className={cnPage()}>
            <div className={cnPage('Container')}><h1 className={cnPage('Title')}>{title}</h1></div>
            {tasks.map((task, index) => <PageContent subtitle={task.subtitle} description={task.description} key={index} />)}
        </main>
    );
}

export { TaskPage };
