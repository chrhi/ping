export const OtterIcon = ({ size }: { size?: number }) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size ?? 30} height={size ?? 30}>
      <path
        fill={"hsl(var(--bc))"}
        d="m0 198l5-9 14-4 60 19 2-24-25-24-13-28-3-15 3-41 10-23 19-23 29-18 29-7h17l40 12 27 24 58-4 26 4 27-24 40-12h17l24 5 28 15 21 22 14 29 3 41-3 15-16 32-22 20 2 24 60-19 14 4 5 9v8l-11 12-68 20v55l71 17 8 11v8l-7 10-15 2-57-14-20 59-39 48-49 31-58 14h-22l-58-14-49-31-39-48-21-59-56 14-15-2-7-10v-8l8-11 71-17v-54l-68-21-11-12zm104-155l-17 15-12 23-2 30 7 21 12 13 8-20 24-34 28-25 28-16-18-12-30-4zm243-4l-16 11 29 16 27 24 25 35 8 20 10-10 9-24-1-27-12-25-29-21-30-4zm-148 38l-37 23-30 36-17 45-3 33 39 12 12 13-2 12-11 8-38-10v35l39-7 9 6 3 14-8 11-42 10-1 7 19 48 32 37 49 27 28 6h32l44-12 33-21 32-37 19-48-1-7-42-10-8-11 3-14 9-6 39 7v-35l-38 10-11-8-2-12 12-13 38-11 1-11-12-52-13-24-26-29-20-14-33-14-54-5zm-7 73l13 3 7 14-1 11-7 9h-18l-7-9v-17zm122 0l17 7 3 16-3 9-10 7-11-1-7-6-2-21zm-76 51h36l15 11 3 24-19 29v7l5 7 21 7 4 16-11 12-18-1-17-10-23 11h-14l-9-7-2-13 4-8 21-7 5-7v-7l-20-32 4-21z"
      />
    </svg>
  );
};
