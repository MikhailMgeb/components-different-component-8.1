import { FC } from 'react';

import { cnPageContent } from './PageContent.classname';

import './PageContent.css';


type PageContentProps = {
    subtitle: string;
    description: string;
}

const PageContent: FC<PageContentProps> = ({ subtitle, description }) => {
    return (
        <div className={cnPageContent('Container')}>
            <div className={cnPageContent('Task')}>
                <h2 className={cnPageContent('Subtitle')}>{subtitle}</h2>
                <p className={cnPageContent('Description')}>{description}</p>
            </div>
        </div>
    );
}

export { PageContent };
