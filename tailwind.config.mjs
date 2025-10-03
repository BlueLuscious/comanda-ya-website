/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./**/*.{html,css,js,mjs}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2596be", // rgb(37, 150, 190)
                    50: "#eaf6fb",
                    100: "#d4eef7",
                    200: "#aadcee",
                    300: "#7fcbe6",
                    400: "#54bade",
                    500: "#2596be", // rgb(37, 150, 190)
                    600: "#1d7695",
                    700: "#15546b",
                    800: "#0f3d4d",
                    900: "#08222b",
                    950: "#030d11",
                },
                secondary: {
                    DEFAULT: "#ff9800", // rgb(255, 152, 0)
                    50: "#fff8f2",
                    100: "#ffeeda",
                    200: "#ffdbb0",
                    300: "#ffc37a",
                    400: "#ffa940",
                    500: "#ff9800", // rgb(255, 152, 0)
                    600: "#e68a00",
                    700: "#cc7a00",
                    800: "#995b00",
                    900: "#663d00",
                    950: "#331e00",
                },
                tertiary: {
                    DEFAULT: "#666666", // rgb(102, 102, 102)
                    0: "#ffffff", // rgb(255, 255, 255)
                    50: "#f0f0f0", // rgb(240, 240, 240)
                    100: "#d9d9d9", // rgb(217, 217, 217)
                    200: "#bfbfbf", // rgb(191, 191, 191)
                    300: "#999999", // rgb(153, 153, 153)
                    400: "#808080", // rgb(128, 128, 128)
                    500: "#666666", // rgb(102, 102, 102)
                    600: "#4d4d4d", // rgb(77, 77, 77)
                    700: "#333333", // rgb(51, 51, 51)
                    800: "#1a1a1a", // rgb(26, 26, 26)
                    900: "#0d0d0d", // rgb(13, 13, 13)
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                fade_in_up: {
                    "0%": { opacity: "0", transform: "translateY(100%)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                heartbeat: {
                    '0%, 40%': { transform: 'scale(1)' },
                    '10%': { transform: 'scale(1.1)' },
                    '20%': { transform: 'scale(1)' },
                    '30%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
                radiant_glow: {
                    "0%": {boxShadow: "0px 0px 0px rgba(255, 255, 255, 0.4)",},
                    "50%": {boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.7), 0px 0px 50px rgba(255, 255, 255, 0.4)",},
                    "100%": {boxShadow: "0px 0px 0px rgba(255, 255, 255, 0.4)",},
                },
                gentle_bounce: {
                    "0%, 100%": {transform: "translateY(0)",},
                    "50%": {transform: "translateY(-1rem)",},
                },
                blink: {
                    "0%, 100%": {opacity: "1"},
                    "50%": {opacity: "0"},
                },
            },
            animation: {
                fade_in_up: "fade_in_up 1s ease-out forwards",
                heartbeat: 'heartbeat 2.5s ease-in-out infinite',
                medium_glow_pulse: "radiant_glow 1.5s ease-in-out infinite",
                gentle_bounce: "gentle_bounce 1.5s ease-in-out infinite",
                blink7: "blink 1s step-end 7 forwards",
            },
            boxShadow: {
                center: {
                    dark: {
                        DEFAULT: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
                        sm: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
                        md: "0px 15px 35px 0px rgba(0, 0, 0, 0.15)",
                    },
                },
            },
        },
    },
    plugins: [],
}
