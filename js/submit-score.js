import { saveScore } from "./leaderboard.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leaderboard-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value.trim() || "Anonymous";

    try {
      await saveScore(username, Game.deathCount, timeInSeconds);
    } catch {
      alert("Couldn’t save your score this time. Returning to menu.");
    }
    
    window.location.href = "../";
  });
});