module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        handwriting: ["Dancing Script", "cursive"],
        whisper: ["Whisper", "cursive"], // Assuming Whisper is imported correctly
      },
      colors: {
        bgBackground: "#EDF2F7", // Light Blue Gray
        bgPrimary: "#1A202C", // Dark Blue Gray
        bgSecondary: "#2D3748", // Dark Gray Blue
        bgAccent: "#4A5568", // Gray Blue
        textPrimary: "#FFFFFF", // White
        textSecondary: "#E2E8F0", // Light Gray Blue
        textAccent: "#CBD5E0", // Light Blue Gray
        textText: "#1A202C", // Dark Blue Gray
      },
    },
  },
  plugins: [],
};
