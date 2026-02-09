import { db, authReady, auth } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

export async function saveScore(username, deaths, time) {
  await authReady;

  try {
    const docRef = await addDoc(collection(db, "leaderboard"), {
      username: username,
      deaths: deaths,
      time: time,
      uid: auth.currentUser.uid,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getTopScores() {
  await authReady;

  const q = query(
    collection(db, "leaderboard"),
    orderBy("deaths", "asc"),
    orderBy("time", "asc"),
    limit(10),
  );

  try {
    const querySnapshot = await getDocs(q);
    const scores = [];
    querySnapshot.forEach((doc) => {
      scores.push(doc.data());
    });
    return scores;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
}

export async function displayLeaderboard() {
  await authReady;

  const scores = await getTopScores();
  const tbodyElement = document.getElementById("leaderboard-body");

  tbodyElement.innerHTML = ""; // Clear existing rows

  scores.forEach((score, index) => {
    const rank = index + 1;

    const tr = document.createElement("tr");

    if (rank <= 3) tr.classList.add(`rank-${rank}`);

    const minutes = Math.floor(score.time / 60);
    const seconds = score.time % 60;

    tr.innerHTML = `
      <td class="rank">
        <span class="${rank <= 3 ? "fw-bolder" : "opacity-75"}">#${rank}</span>
      </td>
      <td class="${rank <= 3 ? "fw-bolder" : "opacity-75"}">
        ${score.username}
      </td>
      <td>${score.deaths}</td>
      <td class="time">${minutes}:${seconds.toString().padStart(2, "0")}</td>
      `;

    tbodyElement.appendChild(tr);
  });
}
