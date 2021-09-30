import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink({ url, icon }) {
    return (
        <a href={url} className='text-gray-600' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={icon} size='2x' />
        </a>
    );
}