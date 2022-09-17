import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import AppButton from '~/components/Layout/components/AppButton/AppButton';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <AppButton onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </AppButton>
    );
}

export default MenuItem;
