const DEFAULT_RATE_LIMIT_KEY = "een_form_submissions";
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour

export const checkRateLimit = (key = DEFAULT_RATE_LIMIT_KEY) => {
  // Check if localStorage is available (client-side only)
  if (typeof window === "undefined") {
    return { allowed: true };
  }

  try {
    const submissions = JSON.parse(
      localStorage.getItem(key) || "[]"
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

export const recordSubmission = (key = DEFAULT_RATE_LIMIT_KEY) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const submissions = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    submissions.push(Date.now());

    // Keep only recent submissions to prevent localStorage bloat
    const now = Date.now();
    const recentSubmissions = submissions.filter(
      (time) => now - time < TIME_WINDOW * 2
    );

    localStorage.setItem(key, JSON.stringify(recentSubmissions));
  } catch (error) {
    console.error("Failed to record submission:", error);
  }
};

export const clearRateLimit = (key = DEFAULT_RATE_LIMIT_KEY) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to clear rate limit:", error);
  }
};
