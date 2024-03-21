import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

enum ButtonType {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    TERTIARY = 'TERTIARY',
    DESTRUCTIVE = 'DESTRUCTIVE',
}

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    type?: ButtonType;
};

export const Button: FC<PropsWithChildren<ButtonProps>> & { TYPE: typeof ButtonType } = ({
    onClick,
    className,
    type,
    children,
}) => {
    const buttonTypeClassName = `Button--${type?.toLowerCase()}`;

    return (
        <button onClick={onClick} className={cx('Button', className, buttonTypeClassName)}>
            {children}
        </button>
    );
};

Button.TYPE = ButtonType;
Button.defaultProps = {
    type: Button.TYPE.PRIMARY,
    onClick: () => null,
};
