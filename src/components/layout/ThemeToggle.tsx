"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // 클라이언트가 마운트되었음을 표시
    }, []);

    // 클라이언트에서 마운트되기 전에는 아무것도 렌더링하지 않음
    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="cursor-pointer p-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
    );
};

export default ThemeToggle;