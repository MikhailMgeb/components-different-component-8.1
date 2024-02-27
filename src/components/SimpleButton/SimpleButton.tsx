import { FC } from 'react';

import { cnSimpleButton } from './SimpleButton.classname';

import './SimpleButton.css';

type SimpleButtonProps = {
    text: string;
}

const SimpleButton: FC<SimpleButtonProps> = ({ text }) => {
    return (
        <button className={cnSimpleButton({ margin: true })} onClick={() => { console.log('Вы нажали на кнопку') }}>
            {text}
        </button>
    );
}

export { SimpleButton };
