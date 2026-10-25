import React from "react";
import styles from "./Sidebar.module.css";
import { Link, NavLink, Outlet } from "react-router";
import { SIDE } from "../data/dBase";

export const Sidebar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/* SIDEBAR SECTION */}
            <section className={`
                ${styles.side__panel}
                ${open ? styles.active : ""}
            `}>
                <header className={styles.side__header}>
                    {/* SIDE MENU BUTTON */}
                    <button
                        type="button"
                        aria-expanded={open}
                        className={styles.side__button}
                        onClick={handleClick}
                        aria-label={open ?
                            "Collapse navigation menu" :
                            "Expand navigation menu"
                        }
                    >
                        <aside
                            aria-hidden="true"
                            className={`
                                ${styles.side__burger}
                                ${open ? styles.open : ""}
                        `}>
                            <span className={styles.side__line} />
                            <span className={styles.side__line} />
                            <span className={styles.side__line} />
                            <span className={styles.side__line} />
                            <span className={styles.side__line} />
                            <span className={styles.side__line} />
                        </aside>
                    </button>
                    <Link 
                        to={"/"}
                        className={styles.side__logo}
                        onClick={closeMenu}
                    >
                        LOGO
                    </Link>
                </header>

                {/* LINKS FOR SIDEBAR */}
                <nav
                    aria-label="main navigation"
                    className={styles.side}
                >
                    <menu className={styles.side__menu}>
                        {SIDE.map(({ id, to, toolTip, Icon }) => (
                            <li
                                key={id}
                                className={styles.side__item}
                            >
                                <NavLink
                                    to={to}
                                    end={to === "/"}
                                    data-tooltip={!open ? toolTip : undefined}
                                    onClick={closeMenu}
                                    className={({ isActive }) => 
                                        `${styles.side__links}
                                        ${isActive ? styles.side__current : ""}
                                `}>
                                    <Icon aria-hidden="true" focusable="false" />
                                    {/* TOOL TIPS ON HOVER */}
                                    <span
                                        aria-hidden="true"
                                        className={styles.side__label}
                                    >
                                        {toolTip}
                                    </span>
                                </NavLink>
                            </li>
                        ))}
                    </menu>
                </nav>
            </section>

            <section className={styles.side__content}>
                <Outlet />
            </section>
        </React.Fragment>
    );
};



