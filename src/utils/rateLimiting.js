const RATE_LIMIT_KEY = "een_form_submissions";
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour

export const checkRateLimit = () => {
  // Check if localStorage is available (client-side only)
  if (typeof window === "undefined") {
    return { allowed: true };
  }

  try {
    const submissions = JSON.parse(
      localStorage.getItem(RATE_LIMIT_KEY) || "[]"
    );

    const now = Date.now();
    const recentSubmissions = submissions.filter(
      (time) => now - time < TIME_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      return {
        allowed: false,
        message: "Too many submissions. Please try again later.",
        remainingTime: Math.ceil(
          (TIME_WINDOW - (now - recentSubmissions[0])) / (60 * 1000)
        ),
      };
    }

    return { allowed: true };
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { allowed: true };
  }
};

export const recordSubmission = () => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const submissions = JSON.parse(
      localStorage.getItem(RATE_LIMIT_KEY) || "[]"
    );

    submissions.push(Date.now());

    // Keep only recent submissions to prevent localStorage bloat
    const now = Date.now();
    const recentSubmissions = submissions.filter(
      (time) => now - time < TIME_WINDOW * 2
    );

    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch (error) {
    console.error("Failed to record submission:", error);
  }
};

export const clearRateLimit = () => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(RATE_LIMIT_KEY);
  } catch (error) {
    console.error("Failed to clear rate limit:", error);
  }
};
