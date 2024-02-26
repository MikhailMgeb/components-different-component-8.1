import { FC } from 'react';
import { cnAvatar } from './Avatar.classname';
import './Avatar.css';


type AvatarProps = {
    user: string;
    srcPhoto: string;
}

const Avatar: FC<AvatarProps> = ({ srcPhoto, user }) => {
    return (
        <div className={cnAvatar()}>
            <img className={cnAvatar('Image')} src={srcPhoto} alt='Me' />
            <p className={cnAvatar('Login')}>{user}</p>
        </div >
    );
}

export { Avatar };