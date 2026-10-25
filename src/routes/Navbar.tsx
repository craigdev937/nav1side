import React from "react";
import styles from "./Navbar.module.css";
import { IoSearch, IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { UAS, UAD } from "../global/Hooks";
import { toggleTheme } from "../global/ThemeSlice";

export const Navbar = () => {
    const dispatch = UAD();
    const mode = UAS((state) => state.theme.mode);

    return (
        <React.Fragment>
            <header className={styles.nav__header}>
                <section className={styles.nav__search}>
                    <IoSearch 
                        className={styles.search__icon} 
                        aria-hidden="true"
                        focusable="false"
                    />
                    <input
                        className={styles.nav__input}
                        type="search"
                        name="search"
                        id="navbar-search"
                        aria-label="Search"
                        placeholder="Search…"
                    />
                </section>
                {/* THEME TOGGLE */}
                <section>
                    <button
                        className={styles.nav__theme}
                        type="button"
                        aria-label={mode === "dark" 
                            ? "Switch to light mode" 
                            : "Switch to dark mode"
                        }
                        title={mode === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                        }
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {mode === "dark" ? (
                            <IoSunnySharp className={styles.nav__icon} />
                        ) : (
                            <FaRegMoon className={styles.nav__icon} />
                        )}
                    </button>
                </section>
            </header>
        </React.Fragment>
    );
};


