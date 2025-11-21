// Shared data
const groups = {
    A: ['ThangNH', 'LieuND', 'ThuyNT', 'NhanTT', 'ThangPV'],
    B: ['HoanPV', 'DuyHG', 'SangTT', 'YChiTQ', 'ThanhND'],
    C: ['KhanhLQ', 'HuyHVQ', 'SinhNT', 'HungLV', 'QuynhTTN'],
    D: ['ThaiNQ', 'NhanVP', 'DongLT', 'Mizutani', 'YenNTN']
};

const roundRobinMatches = [
  // Tuần 1
  { date: '17/11/2025', time: '12:15', player1: 'KhanhLQ', player2: 'HuyHVQ', winner: 'KhanhLQ', score: '2-1' }, // C
  { date: '17/11/2025', time: '12:15', player1: 'ThaiNQ', player2: 'NhanVP', winner: 'NhanVP', score: '1-2' },  // D
  { date: '18/11/2025', time: '12:15', player1: 'ThangNH', player2: 'LieuND', winner: 'LieuND', score: '0-2' }, // A
  { date: '18/11/2025', time: '12:15', player1: 'HoanPV', player2: 'DuyHG', winner: 'HoanPV', score: '2-0' },   // B
  { date: '19/11/2025', time: '12:15', player1: 'ThuyNT', player2: 'NhanTT', winner: 'NhanTT', score: '1-2' },  // A
  { date: '19/11/2025', time: '12:15', player1: 'SangTT', player2: 'YChiTQ', winner: 'YChiTQ', score: '0-2' },  // B
  { date: '20/11/2025', time: '12:15', player1: 'SinhNT', player2: 'HungLV', winner: 'HungLV', score: '0-2' },  // C
  { date: '20/11/2025', time: '12:15', player1: 'NhanVP', player2: 'DongLT', winner: 'NhanVP', score: '2-1' },    // D
  { date: '21/11/2025', time: '12:15', player1: 'NhanTT', player2: 'ThangPV', winner: 'NhanTT', score: '2-1' },   // A
  { date: '21/11/2025', time: '12:15', player1: 'ThanhND', player2: 'HoanPV', winner: 'ThanhND', score: '2-0' }, // B

  // Tuần 2
  { date: '24/11/2025', time: '12:15', player1: 'QuynhTTN', player2: 'KhanhLQ', winner: '', score: '' }, // C
  { date: '24/11/2025', time: '12:15', player1: 'YenNTN', player2: 'Mizutani', winner: '', score: '' },   // D
  { date: '25/11/2025', time: '12:15', player1: 'LieuND', player2: 'ThuyNT', winner: '', score: '' },    // A
  { date: '25/11/2025', time: '12:15', player1: 'HuyHVQ', player2: 'SinhNT', winner: '', score: '' },    // C
  { date: '26/11/2025', time: '12:15', player1: 'DuyHG', player2: 'SangTT', winner: '', score: '' },     // B
  { date: '26/11/2025', time: '12:15', player1: 'ThaiNQ', player2: 'DongLT', winner: '', score: '' },  // D
  { date: '27/11/2025', time: '12:15', player1: 'ThangPV', player2: 'ThangNH', winner: '', score: '' },// A
  { date: '27/11/2025', time: '12:15', player1: 'YChiTQ', player2: 'ThanhND', winner: '', score: '' },   // B
  { date: '28/11/2025', time: '12:15', player1: 'HungLV', player2: 'QuynhTTN', winner: '', score: '' },  // C
  { date: '28/11/2025', time: '12:15', player1: 'ThaiNQ', player2: 'YenNTN', winner: '', score: '' },    // D

  // Tuần 3
  { date: '01/12/2025', time: '12:15', player1: 'ThangNH', player2: 'ThuyNT', winner: '', score: '' },  // A
  { date: '01/12/2025', time: '12:15', player1: 'HoanPV', player2: 'SangTT', winner: '', score: '' },   // B
  { date: '02/12/2025', time: '12:15', player1: 'KhanhLQ', player2: 'HungLV', winner: '', score: '' },  // C
  { date: '02/12/2025', time: '12:15', player1: 'ThaiNQ', player2: 'Mizutani', winner: '', score: '' },  // D
  { date: '03/12/2025', time: '12:15', player1: 'LieuND', player2: 'ThangPV', winner: '', score: '' },  // A
  { date: '03/12/2025', time: '12:15', player1: 'DuyHG', player2: 'YChiTQ', winner: '', score: '' },    // B
  { date: '04/12/2025', time: '12:15', player1: 'HuyHVQ', player2: 'QuynhTTN', winner: '', score: '' }, // C
  { date: '04/12/2025', time: '12:15', player1: 'NhanVP', player2: 'Mizutani', winner: '', score: '' }, // D
  { date: '05/12/2025', time: '12:15', player1: 'NhanTT', player2: 'ThangNH', winner: '', score: '' },  // A
  { date: '05/12/2025', time: '12:15', player1: 'ThanhND', player2: 'SangTT', winner: '', score: '' },  // B

  // Tuần 4
  { date: '08/12/2025', time: '12:15', player1: 'SinhNT', player2: 'KhanhLQ', winner: '', score: '' },   // C
  { date: '08/12/2025', time: '12:15', player1: 'DongLT', player2: 'YenNTN', winner: '', score: '' },    // D
  { date: '09/12/2025', time: '12:15', player1: 'ThuyNT', player2: 'ThangPV', winner: '', score: '' },   // A
  { date: '09/12/2025', time: '12:15', player1: 'HoanPV', player2: 'YChiTQ', winner: '', score: '' },    // B
  { date: '10/12/2025', time: '12:15', player1: 'HungLV', player2: 'HuyHVQ', winner: '', score: '' },    // C
  { date: '10/12/2025', time: '12:15', player1: 'DongLT', player2: 'Mizutani', winner: '', score: '' },  // D
  { date: '11/12/2025', time: '12:15', player1: 'LieuND', player2: 'NhanTT', winner: '', score: '' },    // A
  { date: '11/12/2025', time: '12:15', player1: 'DuyHG', player2: 'ThanhND', winner: '', score: '' },    // B
  { date: '12/12/2025', time: '12:15', player1: 'QuynhTTN', player2: 'SinhNT', winner: '', score: '' },  // C
  { date: '12/12/2025', time: '12:15', player1: 'NhanVP', player2: 'YenNTN', winner: '', score: '' },    // D
];

const playoffMatches = [
    { stage: 'Tứ kết', date: '15/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Tứ kết', date: '15/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Tứ kết', date: '16/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Tứ kết', date: '16/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Bán kết', date: '22/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Bán kết', date: '22/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Tranh 3, 4', date: '23/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' },
    { stage: 'Chung Kết', date: '23/12/2025', time: '12:15', player1: '', player2: '', winner: '', score: '' }
];

const win6plusStats = [
  { player: "ThaiNQ", wins: 0 },
];

// Shared functions
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

function renderGroups() {
    const groupList = document.getElementById('group-list');
    if (!groupList) return;
    groupList.innerHTML = '';
    for (const group in groups) {
        const groupCard = `
            <div class="col-md-3">
                <div class="group-card">
                    <h4>Nhóm ${group}</h4>
                    <ul class="list-group">
                        ${groups[group].map(player => `<li class="list-group-item">${player}</li>`).join('')}
                    </ul>
                </div>
            </div>`;
        groupList.innerHTML += groupCard;
    }
}

// === Gamepad Icon:===
let runCount = 0;
const maxRuns = 5;
let isCaught = false;
let originalStyle = null;

function initGamepadPlayButton() {
    const btn = document.getElementById('gamepadPlayButton');
    if (!btn) return;

    // === BUTTON HÌNH TRÒN HOÀN CHỈNH ===
    btn.style.cssText = `
        position: fixed;
        right: 24px;
        bottom: 24px;
        width: 72px;
        height: 72px;
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
        border: 3px solid #60a5fa;
        border-radius: 50%;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4), 0 2px 8px rgba(0,0,0,0.1);
        cursor: pointer;
        z-index: 9999;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, sans-serif;
        user-select: none;
        padding: 4px;
    `;

    // === ICON GAMEPAD ===
    const icon = btn.querySelector('i');
    icon.style.cssText = `
        font-size: 1.65rem;
        margin-bottom: 0px;
        line-height: 1;
    `;

    // === CHỮ PLAY NHỎ HƠN, FIT HOÀN HẢO ===
    const playText = btn.querySelector('.play-text');
    playText.style.cssText = `
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        margin-top: -2px;
        line-height: 1;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    `;

    // === HOVER EFFECT ===
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.08)';
        btn.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.5), 0 4px 15px rgba(0,0,0,0.15)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4), 0 2px 8px rgba(0,0,0,0.1)';
    });

    // === CLICK EFFECT ===
    btn.addEventListener('click', () => {
        window.open('https://thichthivar.ssvhue.work', '_blank');
        
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => btn.style.transform = 'scale(1.08)', 120);
        setTimeout(() => btn.style.transform = 'scale(1)', 300);
    });
}

document.addEventListener('DOMContentLoaded', initGamepadPlayButton);
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("group-popup-btn")
    .addEventListener("click", function () {
      const modal = new bootstrap.Modal(document.getElementById("groupModal"));
      modal.show();
    });

  loadGroups();
});

// Schedule page functions
function populateDateFilter() {
  const dateFilter = document.getElementById("date-filter");
  if (!dateFilter) return;
  const dates = [
    ...new Set(
      roundRobinMatches
        .map((match) => match.date)
        .filter((date) => date && date !== "")
    ),
  ];

  dates.sort(
    (a, b) =>
      new Date(b.split("/").reverse().join("-")) -
      new Date(a.split("/").reverse().join("-"))
  );

  const todayOption = document.createElement("option");
  todayOption.value = "today";
  todayOption.textContent = "Hôm nay";
  dateFilter.appendChild(todayOption);
}

let roundRobinTable, playoffTable;

function renderRoundRobin(matches) {
  const tbody = document.querySelector("#round-robin-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  matches.forEach((match) => {
    const rowClass = match.player1 === "Nghỉ ngơi" ? "rest-row" : "";
    const row = `
            <tr class="${rowClass}">
                <td>${match.date || "-"}</td>
                <td>${match.time || "-"}</td>
                <td>${match.player1 || "-"}</td>
                <td>${match.player2 || "-"}</td>
                <td style="color: ${match.winner ? 'green' : 'inherit'};">${match.winner || "-"}</td>
                <td>${match.score || "-"}</td>
            </tr>`;
    tbody.innerHTML += row;
  });

  if (roundRobinTable) {
    roundRobinTable.clear().rows.add($("#round-robin-table tbody tr")).draw();
  } else {
    roundRobinTable = $("#round-robin-table").DataTable({
      pageLength: 10,
      language: {
        search: "Tìm kiếm:",
        lengthMenu: "Hiển thị _MENU_ trận đấu",
        zeroRecords: "Không tìm thấy trận đấu nào",
        info: "Hiển thị _START_ đến _END_ của _TOTAL_ trận đấu",
        infoEmpty: "Không có trận đấu nào",
        infoFiltered: "(lọc từ _MAX_ trận đấu)",
      },
      order: [
        [0, "asc"],
        [1, "asc"],
      ],
    });
  }
}

function renderPlayoff(matches) {
  const container = document.getElementById("playoff-bracket");
  if (!container) return;

  // Clear previous content
  document.querySelectorAll(".match-pair").forEach((pair) => {
    pair.innerHTML = "";
  });

  // Fill matches
  matches.forEach((match, index) => {
    const pair = container.querySelector(`[data-match-index="${index}"]`);
    if (!pair) return;

    const isFinal = match.stage === "Chung Kết";
    const isThirdPlace = match.stage === "Tranh 3, 4";

    const player1Class = match.winner === match.player1 ? "winner" : "";
    const player2Class = match.winner === match.player2 ? "winner" : "";

    const matchHTML = `
            <div class="match">
                <span class="player ${player1Class}">${
      match.player1 || "?"
    }</span>
                <span class="vs">VS</span>
                <span class="player ${player2Class}">${
      match.player2 || "?"
    }</span>
            </div>
            <div class="match info-row">
                <span>${match.date || "-"}</span>
                <span>${match.time || "-"}</span>
                <span class="score">${match.score || ""}</span>
            </div>
        `;

    pair.innerHTML = matchHTML;

    // Add trophy for final
    if (isFinal && match.winner) {
      pair
        .querySelector(".info-row")
        .insertAdjacentHTML(
          "beforeend",
          `<i class="fas fa-trophy" style="color: gold; margin-left: 5px;"></i>`
        );
    }
  });
}

function filterMatches() {
  const dateFilter = document.getElementById("date-filter");
  const groupFilter = document.getElementById("group-filter");
  if (!dateFilter || !groupFilter) return;

  let filteredRoundRobin = roundRobinMatches;
  if (dateFilter.value !== "all") {
    if (dateFilter.value === "today") {
      const today = getCurrentDate();
      filteredRoundRobin = filteredRoundRobin.filter(
        (match) => match.date === today || match.player1 === "Nghỉ ngơi"
      );
    } else {
      filteredRoundRobin = filteredRoundRobin.filter(
        (match) =>
          match.date === dateFilter.value || match.player1 === "Nghỉ ngơi"
      );
    }
  }
  if (groupFilter.value !== "all") {
    filteredRoundRobin = filteredRoundRobin.filter((match) => {
      if (match.player1 === "Nghỉ ngơi") return true;
      return (
        groups[groupFilter.value].includes(match.player1) ||
        groups[groupFilter.value].includes(match.player2)
      );
    });
  }
  renderRoundRobin(filteredRoundRobin);

  let filteredPlayoff = playoffMatches;
  if (dateFilter.value !== "all") {
    if (dateFilter.value === "today") {
      const today = getCurrentDate();
      filteredPlayoff = filteredPlayoff.filter(
        (match) => match.date === today || match.player1 === "Nghỉ ngơi"
      );
    } else {
      filteredPlayoff = filteredPlayoff.filter(
        (match) =>
          match.date === dateFilter.value || match.player1 === "Nghỉ ngơi"
      );
    }
  }
}

// Rankings page functions
function initializeRankings() {
  const rankings = {};
  Object.keys(groups).forEach((group) => {
    rankings[group] = groups[group].map((player) => ({
      player,
      matches: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
    }));
  });
  return rankings;
}

function calculateRankings() {
    const rankings = initializeRankings();

    // === BƯỚC 1: TÍNH TOÁN THỐNG KÊ CHO TỪNG NHÓM ===
    Object.keys(groups).forEach((group) => {
        const groupPlayers = groups[group];

        roundRobinMatches.forEach((match) => {
            const p1Name = match.player1;
            const p2Name = match.player2;

            if (!groupPlayers.includes(p1Name) || !groupPlayers.includes(p2Name)) return;

            const p1 = rankings[group].find(p => p.player === p1Name);
            const p2 = rankings[group].find(p => p.player === p2Name);
            if (!p1 || !p2) return;

            const winner = match.winner?.trim();
            const scoreStr = match.score?.trim();

            // Bỏ qua trận chưa đấu
            if (!winner || winner === "") return;

            p1.matches++;
            p2.matches++;

            // === XỬ LÝ TỈ SỐ: DỰA VÀO WINNER, KHÔNG TIN SCORE ===
            let p1Score = 0, p2Score = 0;

            if (scoreStr && scoreStr.includes("-")) {
                const [s1, s2] = scoreStr.split("-").map(Number);
                const scoreValid = !isNaN(s1) && !isNaN(s2);

                if (scoreValid) {
                    // Kiểm tra tính hợp lệ: winner phải khớp với tỉ số
                    const scoreWinner = s1 > s2 ? p1Name : s1 < s2 ? p2Name : "H";
                    if (scoreWinner === winner) {
                        // Score đúng → dùng
                        p1Score = s1;
                        p2Score = s2;
                    } else {
                        // Score ngược → đảo ngược
                        p1Score = s2;
                        p2Score = s1;
                    }
                }
            }

            // Nếu score không hợp lệ → dùng winner để suy ra tỉ số mặc định
            if (p1Score === 0 && p2Score === 0) {
                if (winner === "H") {
                    p1Score = p2Score = 1; // hòa 1-1
                } else if (winner === p1Name) {
                    p1Score = 2; p2Score = 1; // thắng 2-1
                } else if (winner === p2Name) {
                    p1Score = 1; p2Score = 2; // thua 1-2
                }
            }

            // === CẬP NHẬT TỈ SỐ ===
            p1.goalsFor += p1Score;
            p1.goalsAgainst += p2Score;
            p2.goalsFor += p2Score;
            p2.goalsAgainst += p1Score;

            // === CẬP NHẬT KẾT QUẢ ===
            if (winner === "H") {
                p1.draws++;
                p2.draws++;
                p1.points += 1;
                p2.points += 1;
            } else if (winner === p1Name) {
                p1.wins++;
                p2.losses++;
                p1.points += 3;
            } else if (winner === p2Name) {
                p2.wins++;
                p1.losses++;
                p2.points += 3;
            }
        });

        // Cập nhật hệ số
        rankings[group].forEach(p => {
            p.goalDiff = p.goalsFor - p.goalsAgainst;
        });
    });

    // === BƯỚC 2: SẮP XẾP THEO 4 ƯU TIÊN ===
    Object.keys(rankings).forEach(group => {
        const players = rankings[group];

        // Tạo map đối đầu
        const headToHead = {};
        roundRobinMatches.forEach(match => {
            const p1 = match.player1, p2 = match.player2;
            const winner = match.winner?.trim();
            if (!winner || winner === "") return;

            const key1 = `${p1} vs ${p2}`;
            const key2 = `${p2} vs ${p1}`;

            let result1, result2;
            if (winner === "H") {
                result1 = result2 = 0;
            } else if (winner === p1) {
                result1 = 1; result2 = -1;
            } else if (winner === p2) {
                result1 = -1; result2 = 1;
            }

            headToHead[key1] = result1;
            headToHead[key2] = result2;
        });

        function compareHeadToHead(a, b) {
            const key = `${a.player} vs ${b.player}`;
            const result = headToHead[key];
            if (result !== undefined) return -result;
            return 0;
        }

        // Sắp xếp theo 4 tiêu chí
        players.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
            const h2h = compareHeadToHead(a, b);
            if (h2h !== 0) return h2h;
            return b.wins - a.wins;
        });

        // Gán hạng
        let currentRank = 0;
        let prev = null;
        players.forEach((p, i) => {
            if (!prev ||
                prev.points !== p.points ||
                prev.goalDiff !== p.goalDiff ||
                compareHeadToHead(prev, p) !== 0 ||
                prev.wins !== p.wins) {
                currentRank = i + 1;
            }
            p.rank = currentRank;
            prev = p;
        });
    });

    return rankings;
}

function calculatePlayoffRankings() {
  const rankings = [];

  // Lấy các trận chung kết và tranh hạng ba
  const finalMatch = playoffMatches.find(
    (match) => match.stage === "Chung Kết"
  );
  const thirdPlaceMatch = playoffMatches.find(
    (match) => match.stage === "Tranh 3, 4"
  );
  const semiFinalMatches = playoffMatches.filter(
    (match) => match.stage === "Bán kết"
  );
  const quarterFinalMatches = playoffMatches.filter(
    (match) => match.stage === "Tứ kết"
  );

  // Xếp hạng 1: Người thắng chung kết
  if (finalMatch && finalMatch.winner) {
    rankings.push({
      rank: 1,
      player: finalMatch.winner,
      eliminatedRound: "Vô địch",
    });
  }

  // Xếp hạng 2: Người thua chung kết
  if (finalMatch && finalMatch.winner) {
    const runnerUp =
      finalMatch.player1 === finalMatch.winner
        ? finalMatch.player2
        : finalMatch.player1;
    if (runnerUp) {
      rankings.push({
        rank: 2,
        player: runnerUp,
        eliminatedRound: "Chung kết",
      });
    }
  }

  // Xếp hạng 3: Người thắng trận tranh hạng ba
  if (thirdPlaceMatch && thirdPlaceMatch.winner) {
    rankings.push({
      rank: 3,
      player: thirdPlaceMatch.winner,
      eliminatedRound: "Tranh hạng ba",
    });
  }

  // Xếp hạng 4: Người thua trận tranh hạng ba
  if (thirdPlaceMatch && thirdPlaceMatch.winner) {
    const fourthPlace =
      thirdPlaceMatch.player1 === thirdPlaceMatch.winner
        ? thirdPlaceMatch.player2
        : thirdPlaceMatch.player1;
    if (fourthPlace) {
      rankings.push({
        rank: 4,
        player: fourthPlace,
        eliminatedRound: "Tranh hạng ba",
      });
    }
  }

  // Xếp hạng 5-8: Những người thua ở bán kết và tứ kết
  const semiFinalLosers = semiFinalMatches
    .filter((match) => match.winner)
    .map((match) =>
      match.player1 === match.winner ? match.player2 : match.player1
    )
    .filter((player) => player && !rankings.some((r) => r.player === player));

  const quarterFinalLosers = quarterFinalMatches
    .filter((match) => match.winner)
    .map((match) =>
      match.player1 === match.winner ? match.player2 : match.player1
    )
    .filter((player) => player && !rankings.some((r) => r.player === player));

  // Thêm những người thua bán kết (xếp hạng 5-6)
  semiFinalLosers.forEach((player, index) => {
    rankings.push({
      rank: 5 + index,
      player,
      eliminatedRound: "Bán kết",
    });
  });

  // Thêm những người thua tứ kết (xếp hạng 7-8)
  quarterFinalLosers.forEach((player, index) => {
    rankings.push({
      rank: 7 + index,
      player,
      eliminatedRound: "Tứ kết",
    });
  });

  return rankings;
}

function renderPlayoffRankings() {
  const tbody = document.querySelector("#playoff-rankings-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const rankings = calculatePlayoffRankings();
  rankings.forEach((entry, index) => {
    let rowClass = "";
    let rankDisplay = entry.rank;
    if (entry.rank === 1) {
      rowClass = "gold-row";
      rankDisplay = `<i class="fas fa-medal medal-icon" style="color: var(--gold-color);"></i> ${entry.rank}`;
    } else if (entry.rank === 2) {
      rowClass = "silver-row";
      rankDisplay = `<i class="fas fa-medal medal-icon" style="color: var(--silver-color);"></i> ${entry.rank}`;
    } else if (entry.rank === 3) {
      rowClass = "bronze-row";
      rankDisplay = `<i class="fas fa-medal medal-icon" style="color: var(--bronze-color);"></i> ${entry.rank}`;
    }
    const row = `
            <tr class="${rowClass}">
                <td>${rankDisplay}</td>
                <td>${entry.player}</td>
                <td>${entry.eliminatedRound}</td>
            </tr>`;
    tbody.innerHTML += row;
  });

  if ($.fn.DataTable.isDataTable("#playoff-rankings-table")) {
    $("#playoff-rankings-table")
      .DataTable()
      .clear()
      .rows.add($("#playoff-rankings-table tbody tr"))
      .draw();
  } else {
    $("#playoff-rankings-table").DataTable({
      pageLength: 8,
      searching: false,
      lengthChange: false,
      paging: false,
      language: {
        info: "Hiển thị _START_ đến _END_ của _TOTAL_ người chơi",
        infoEmpty: "Không có người chơi nào",
        infoFiltered: "(lọc từ _MAX_ người chơi)",
      },
      order: [[0, "asc"]],
    });
  }
}

function renderRankings(groupFilter = "all") {
  const rankingsTables = document.getElementById("rankings-tables");
  if (!rankingsTables) return;
  rankingsTables.innerHTML = "";
  const rankings = calculateRankings();
  const groupsToShow =
    groupFilter === "all" ? ["A", "B", "C", "D"] : [groupFilter];

  groupsToShow.forEach((group) => {
    const tableContainer = `
            <div class="table-container">
                <h2>Nhóm ${group}</h2>
                <table class="table table-bordered table-hover" id="rankings-table-${group}">
                    <thead>
                        <tr>
                            <th><i class="fas fa-user"></i> Người chơi</th>
                            <th><i class="fas fa-gamepad"></i> Số trận</th>
                            <th><i class="fas fa-trophy"></i> Thắng</th>
                            <th><i class="fas fa-times"></i> Thua</th>
                            <th><i class="fas fa-equals"></i> Hòa</th>
                            <th><i class="fas fa-balance-scale"></i> Hệ số</th>
                            <th><i class="fas fa-star"></i> Điểm</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>`;
    rankingsTables.innerHTML += tableContainer;

    const tbody = document.querySelector(`#rankings-table-${group} tbody`);
    rankings[group].forEach((player, index) => {
      const rowClass = index < 2 ? "top-row" : "";
      const row = `
                <tr class="${rowClass}">
                    <td>${player.player}</td>
                    <td>${player.matches}</td>
                    <td>${player.wins}</td>
                    <td>${player.losses}</td>
                    <td>${player.draws}</td>
                    <td>${
                      player.goalDiff >= 0
                        ? "+" + player.goalDiff
                        : player.goalDiff
                    }</td>
                    <td>${player.points}</td>
                </tr>`;
      tbody.innerHTML += row;
    });

    $(`#rankings-table-${group}`).DataTable({
      pageLength: 5,
      lengthChange: false,
      searching: false, 
      paging: false,
      language: {
        search: "Tìm kiếm:",
        lengthMenu: "Hiển thị _MENU_ người chơi",
        zeroRecords: "Không tìm thấy người chơi nào",
        info: "Hiển thị _START_ đến _END_ của _TOTAL_ người chơi",
        infoEmpty: "Không có người chơi nào",
        infoFiltered: "(lọc từ _MAX_ người chơi)",
      },
      order: [
        [5, "desc"],
        [2, "desc"],
      ],
    });
  });

  // Render playoff rankings
  renderPlayoffRankings();
}

function filterRankings() {
  const groupFilter = document.getElementById("group-filter");
  if (!groupFilter) return;
  renderRankings(groupFilter.value);
}

function loadGroups() {
  const groups = {
    A: ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Thị D"],
    B: ["Hoàng Văn E", "Vũ Thị F", "Đỗ Văn G", "Bùi Thị H"],
    C: ["Lý Văn I", "Tô Thị K", "Hà Văn L", "Mai Thị M"],
    D: ["Đinh Văn N", "Phan Thị P", "Trương Văn Q", "Chu Thị R"],
  };

  const groupList = document.getElementById("group-list");
  groupList.innerHTML = "";

  Object.keys(groups).forEach((groupName) => {
    let players = groups[groupName]
      .map((p) => `<li class="list-group-item">${p}</li>`)
      .join("");

    let card = `
            <div class="col-md-6 col-lg-3 mb-3">
                <div class="group-card">
                    <h4>Nhóm ${groupName}</h4>
                    <ul class="list-group list-group-flush">
                        ${players}
                    </ul>
                </div>
            </div>
        `;
    groupList.innerHTML += card;
  });
}

// === HIỂN THỊ BẢNG WIN 6+1 – CHỈ NGƯỜI CÓ WINS > 0 ===
// === HIỂN THỊ BẢNG WIN 6+ – CHỈ NGƯỜI CÓ WINS > 0, CÓ ICON ===
function renderWin6PlusTable() {
    // Lọc người có wins > 0 và sắp xếp
    const winners = win6plusStats
        .filter(p => p.wins > 0)
        .sort((a, b) => b.wins - a.wins);

    // Xếp hạng chính xác (cùng wins → cùng hạng)
    let currentRank = 0;
    let prevWins = null;
    const ranked = winners.map((item, index) => {
        if (item.wins !== prevWins) {
            currentRank = index + 1;
            prevWins = item.wins;
        }
        return { ...item, rank: currentRank };
    });

    const tbody = $('#win6plusTable tbody');
    tbody.empty();

    if (winners.length === 0) {
        tbody.append(`
            <tr>
                <td colspan="3" style="text-align:center; color:#888; padding:20px; font-style:italic;">
                    Chưa có người đạt win 6+
                </td>
            </tr>
        `);
    } else {
        ranked.forEach(item => {
            const medalIcon = item.rank === 1 ? '<i class="fas fa-medal text-warning"></i>' :
                             item.rank === 2 ? '<i class="fas fa-medal text-secondary"></i>' :
                             item.rank === 3 ? '<i class="fas fa-medal" style="color:#cd7f32;"></i>' : '';

            tbody.append(`
                <tr>
                    <td>
                        <strong>#${item.rank}</strong> ${medalIcon}
                    </td>
                    <td>
                        <i class="fas fa-user text-primary"></i> <strong>${item.player}</strong>
                    </td>
                    <td>
                        <i class="fas fa-flag-checkered text-success"></i> 
                        <span class="win-count">${item.wins}</span>
                    </td>
                </tr>
            `);
        });
    }
}

renderWin6PlusTable();

// Initialize based on page
$(document).ready(() => {
  // Configure DataTables moment plugin if on schedule page
  if (document.getElementById("round-robin-table")) {
    $.fn.dataTable.moment("DD/MM/YYYY");
  }

  // Schedule page initialization
  if (document.getElementById("round-robin-table")) {
    renderGroups();
    populateDateFilter();
    renderRoundRobin(roundRobinMatches);
    renderPlayoff(playoffMatches);

    // filterMatches();
    $("#date-filter, #group-filter").on("change", filterMatches);
  }

  // Rankings page initialization
  if (document.getElementById("rankings-tables")) {
    renderRankings();
    $("#group-filter").on("change", filterRankings);
  }

  // Common initialization
  setupgamepadIcon();
});