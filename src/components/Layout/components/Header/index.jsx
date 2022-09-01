import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import IMAGES from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Wrapper from '~/components/Popper/Wrapper';
import AccountItem from '../AccountItem';
import AppButton from '../AppButton/AppButton';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            //TODO: call API
            setSearchResult([]);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={IMAGES.tiktokLogo} alt="Tiktok" />
                </div>
                {/* Search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Wrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('action')}>
                    <AppButton text>Upload</AppButton>
                    <AppButton primary>
                        Log in
                    </AppButton>
                </div>
            </div>
        </header>
    );
}

export default Header;
