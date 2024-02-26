import { FC } from 'react';
import { cnAvatar } from './Avatar.classname';
import './Avatar.css';
import defaultPhoto from './image/icons8-имя-100.png';


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