import { saveScore } from "./leaderboard.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leaderboard-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value || "Anonymous";

    await saveScore(username, Game.deathCount, timeInSeconds);

    window.location.href = "../";
  });
});