/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./**/*.{html,css,js,mjs}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    qt_orange: {
                        ultradark: "#3a2802", // rgb(58, 40, 2)
                        darkest: "#5a3a04", // rgb(90, 58, 4)
                        darker: "#a06107", // rgb(160, 97, 7)
                        dark: "#d98f09", // rgb(217, 143, 9)
                        DEFAULT: "#f7b40d", // rgb(247, 180, 13)
                        light: "#f7c64b", // rgb(247, 198, 75)
                        lighter: "#f7d789", // rgb(247, 215, 137)
                        lightest: "#f7e9c6", // rgb(247, 233, 198)
                        ultralight: "#fdf6e9" // rgb(253, 246, 233)
                    },
                    qt_blue: {
                        ultradark: "#021c27", // rgb(2, 28, 39)
                        darkest: "#063a57", // rgb(6, 58, 87)
                        darker: "#117ba1", // rgb(17, 123, 161)
                        dark: "#38b2d6", // rgb(56, 178, 214)
                        DEFAULT: "#85d3e5", // rgb(133, 211, 229)
                        light: "#9fe3f2", // rgb(159, 227, 242)
                        lighter: "#bff0f9", // rgb(191, 240, 249)
                        lightest: "#d9f8fc", // rgb(217, 248, 252)
                        ultralight: "#eefcfe", // rgb(238, 252, 254)
                    },
                },
                secondary: {
                    qt_grey: {
                        ultradark: "#0d0d0d", // rgb(13, 13, 13)
                        darkest: "#1a1a1a", // rgb(26, 26, 26)
                        darker: "#333333", // rgb(51, 51, 51)
                        dark: "#4d4d4d", // rgb(77, 77, 77)
                        DEFAULT: "#666666", // rgb(102, 102, 102)
                        light: "#808080", // rgb(128, 128, 128)
                        lighter: "#999999", // rgb(153, 153, 153)
                        lightest: "#bfbfbf", // rgb(191, 191, 191)
                        ultralight: "#d9d9d9", // rgb(217, 217, 217)
                        ultrawhite: "#f0f0f0", // rgb(240, 240, 240)
                    },
                },
                tertiary: {},
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
