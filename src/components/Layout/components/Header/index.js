import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import IMAGES from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={IMAGES.tiktokLogo} alt="Tiktok" />
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder={'Search accounts and video'} spellCheck={false} />

                    <button className={cx('clear')}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        {/* Search button */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;
