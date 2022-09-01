import React from 'react';
import classNames from 'classnames/bind';
import styles from './AppButton.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AppButton({
    to,
    href,
    primary = false,
    outline = false,
    text=false,
    round = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    disabled = false,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when button disabled
    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        text,
        round,
        small,
        large,
        disabled,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default AppButton;
