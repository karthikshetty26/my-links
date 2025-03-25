"use client"
import NAVCSS from './navbar.module.css';
import { useEffect, useState } from 'react';

export default function NavbarUi() {
    const [theme, setTheme] = useState('dark');
    const [toastMessage, setToastMessage] = useState("URL copied successfully!");
    const [copySuccess, setCopySuccess] = useState(false);

    // Function to copy the current page URL to the clipboard
    function copyToClipboard() {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 4000); // runs after 1 sec
            })
            .catch((err) => console.error("Error copying text: ", err)); // Error handling
    }

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Initialize theme from local storage or system preference
    useEffect(() => {
        // Get theme from storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        // Apply theme
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Add listener for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (<nav className={NAVCSS.nav}>
        {/* Theme toggle */}
        <button className={NAVCSS.theme_selection} onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
            <span className={NAVCSS.dark_light_icon}>
                {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                )}

            </span>
        </button>

        {/* Copy site */}
        <button className={NAVCSS.copy_site} onClick={copyToClipboard}>
            Copy Link
            <span className={NAVCSS.copy_icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg></span>
        </button>


        <div className={`${NAVCSS.toast_div} ${copySuccess ? NAVCSS.show : ''}`}>
            <div className={NAVCSS.toast_messages}>{toastMessage}</div>
        </div>
    </nav>
    );
}