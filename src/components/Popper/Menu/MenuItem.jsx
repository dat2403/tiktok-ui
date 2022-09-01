import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import AppButton from '~/components/Layout/components/AppButton/AppButton';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <AppButton className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </AppButton>
    );
}

export default MenuItem;
