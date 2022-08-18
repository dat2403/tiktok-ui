import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
    return (  
        <div className={cx('wrapper')}>
            <h2>Side bar</h2>
        </div>
    );
}

export default SideBar;