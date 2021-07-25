import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink({ url, icon }) {
    return (
        <a href={url} className='text-gray-700'>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}