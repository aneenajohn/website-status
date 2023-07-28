import Link from 'next/link';
import {
    LOGOUT_URL,
    MAIN_SITE_URL,
    MY_SITE_URL,
    USER_PROFILE_URL,
} from '../../constants/url';
import styles from '@/components/Dropdown/dropdown.module.scss';

const Dropdown = () => {
    const logout = () => {
        fetch(LOGOUT_URL, {
            method: 'GET',
            credentials: 'include',
        }).then(() => {
            location.reload();
        });
    };

    return (
        <div className={styles.dropdown}>
            <ul className={styles.dropdownList}>
                <Link href={MAIN_SITE_URL} className={styles.dropdownLink}>
                    <li className={styles.dropdownItem}>Home</li>
                </Link>
                <Link href={USER_PROFILE_URL} className={styles.dropdownLink}>
                    <li className={styles.dropdownItem}>Status</li>
                </Link>
                <Link
                    href={`${MY_SITE_URL}/profile`}
                    className={styles.dropdownLink}
                >
                    <li className={styles.dropdownItem}>Profile</li>
                </Link>
                <Link
                    href={`${MY_SITE_URL}/tasks`}
                    className={styles.dropdownLink}
                >
                    <li className={styles.dropdownItem}>Tasks</li>
                </Link>
                <Link
                    href={`${MY_SITE_URL}/identity`}
                    className={styles.dropdownLink}
                >
                    <li className={styles.dropdownItem}>Identity</li>
                </Link>
                <hr className={styles.line} />
                <li className={styles.dropdownItem} onClick={logout}>
                    Sign out
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
