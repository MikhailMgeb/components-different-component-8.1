import { cnTaskPage } from '../task-page/Task-page.classname';
import { FC } from 'react';
import './Page-content.css';

type PageContentProps = {
    subtitle: string;
    description: string;
}

const PageContent: FC<PageContentProps> = ({ subtitle, description }) => {
    return (
        <div className={cnTaskPage('Container')}>
            <div className={cnTaskPage('Task')}>
                <h2 className={cnTaskPage('Subtitle')}>{subtitle}</h2>
                <p className={cnTaskPage('Description')}>{description}</p>
            </div>
        </div>
    );
}

export { PageContent };