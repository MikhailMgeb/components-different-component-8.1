import { PageContent } from '../page-content/Page-content';
import { cnTaskPage } from './Task-page.classname';
import { FC } from 'react';
import './Task-page.css';

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
        <main className={cnTaskPage()}>
            <div className={cnTaskPage('Container')}><h1 className={cnTaskPage('Title')}>{title}</h1></div>
            {tasks.map((task, index) => <PageContent subtitle={task.subtitle} description={task.description} key={index} />)}
        </main>
    );
}

export { TaskPage };