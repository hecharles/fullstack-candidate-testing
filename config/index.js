const dev = process.env.NODE_ENV !== "production";
export const baseUrl = dev
  ? "http://localhost:3000"
  : "https://fullstack-candidate-testing-delta.vercel.app/";
