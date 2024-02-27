import { FC } from 'react';

import { cnAvatar } from './Avatar.classname';
import defaultPhoto from './image/icons-default.png';

import './Avatar.css';


type AvatarProps = {
    user: string;
    srcPhoto?: string;
}

const defaultSrc = defaultPhoto

const Avatar: FC<AvatarProps> = ({ srcPhoto, user }) => {

    return (
        <div className={cnAvatar()}>
            <img className={cnAvatar('Image')} src={srcPhoto ? srcPhoto : defaultSrc} alt='Me' />
            <p className={cnAvatar('Login')}>{user}</p>
        </div >
    );
}

export { Avatar };
