// Shared data
const groups = {
    A: ['ThangNH', 'LieuLD', 'ThuyNT', 'NhanTT', 'ThangPV'],
    B: ['HoanPV', 'DuyHG', 'SangTT', 'YChiTQ', 'ThanhND'],
    C: ['KhanhLQ', 'HuyHVQ', 'SinhNT', 'HungLV', 'QuynhTTN'],
    D: ['ThaiNQ', 'NhanVP', 'DongLT', 'Mizutani', 'YenNTN']
};

const roundRobinMatches = [
  // ===== Nhóm A =====
  { date: '17/11/2025', time: '12:15', player1: 'ThangNH', player2: 'LieuLD', winner: '', score: '' },
  { date: '17/11/2025', time: '12:15', player1: 'ThuyNT', player2: 'NhanTT', winner: '', score: '' },
  { date: '18/11/2025', time: '12:15', player1: 'ThangPV', player2: 'ThangNH', winner: '', score: '' },
  { date: '18/11/2025', time: '12:15', player1: 'LieuLD', player2: 'ThuyNT', winner: '', score: '' },
  { date: '19/11/2025', time: '12:15', player1: 'NhanTT', player2: 'ThangPV', winner: '', score: '' },
  { date: '19/11/2025', time: '12:15', player1: 'ThangNH', player2: 'ThuyNT', winner: '', score: '' },
  { date: '20/11/2025', time: '12:15', player1: 'LieuLD', player2: 'ThangPV', winner: '', score: '' },
  { date: '20/11/2025', time: '12:15', player1: 'NhanTT', player2: 'ThangNH', winner: '', score: '' },
  { date: '21/11/2025', time: '12:15', player1: 'ThuyNT', player2: 'ThangPV', winner: '', score: '' },
  { date: '21/11/2025', time: '12:15', player1: 'LieuLD', player2: 'NhanTT', winner: '', score: '' },

  // ===== Nhóm B =====
  { date: '24/11/2025', time: '12:15', player1: 'HoanPV', player2: 'DuyHG', winner: '', score: '' },
  { date: '24/11/2025', time: '12:15', player1: 'SangTT', player2: 'YChiTQ', winner: '', score: '' },
  { date: '25/11/2025', time: '12:15', player1: 'ThanhND', player2: 'HoanPV', winner: '', score: '' },
  { date: '25/11/2025', time: '12:15', player1: 'DuyHG', player2: 'SangTT', winner: '', score: '' },
  { date: '26/11/2025', time: '12:15', player1: 'YChiTQ', player2: 'ThanhND', winner: '', score: '' },
  { date: '26/11/2025', time: '12:15', player1: 'HoanPV', player2: 'SangTT', winner: '', score: '' },
  { date: '27/11/2025', time: '12:15', player1: 'DuyHG', player2: 'YChiTQ', winner: '', score: '' },
  { date: '27/11/2025', time: '12:15', player1: 'ThanhND', player2: 'SangTT', winner: '', score: '' },
  { date: '28/11/2025', time: '12:15', player1: 'HoanPV', player2: 'YChiTQ', winner: '', score: '' },
  { date: '28/11/2025', time: '12:15', player1: 'DuyHG', player2: 'ThanhND', winner: '', score: '' },

  // ===== Nhóm C =====
  { date: '01/12/2025', time: '12:15', player1: 'KhanhLQ', player2: 'HuyHVQ', winner: '', score: '' },
  { date: '01/12/2025', time: '12:15', player1: 'SinhNT', player2: 'HungLV', winner: '', score: '' },
  { date: '02/12/2025', time: '12:15', player1: 'QuynhTTN', player2: 'KhanhLQ', winner: '', score: '' },
  { date: '02/12/2025', time: '12:15', player1: 'HuyHVQ', player2: 'SinhNT', winner: '', score: '' },
  { date: '03/12/2025', time: '12:15', player1: 'HungLV', player2: 'QuynhTTN', winner: '', score: '' },
  { date: '03/12/2025', time: '12:15', player1: 'KhanhLQ', player2: 'HungLV', winner: '', score: '' },
  { date: '04/12/2025', time: '12:15', player1: 'HuyHVQ', player2: 'QuynhTTN', winner: '', score: '' },
  { date: '04/12/2025', time: '12:15', player1: 'SinhNT', player2: 'KhanhLQ', winner: '', score: '' },
  { date: '05/12/2025', time: '12:15', player1: 'HungLV', player2: 'HuyHVQ', winner: '', score: '' },
  { date: '05/12/2025', time: '12:15', player1: 'QuynhTTN', player2: 'SinhNT', winner: '', score: '' },

  // ===== Nhóm D =====
  { date: '08/12/2025', time: '12:15', player1: 'ThaiNQ', player2: 'NhanVP', winner: '', score: '' },
  { date: '08/12/2025', time: '12:15', player1: 'DongLT', player2: 'Mizutani', winner: '', score: '' },
  { date: '09/12/2025', time: '12:15', player1: 'YenNTN', player2: 'ThaiNQ', winner: '', score: '' },
  { date: '09/12/2025', time: '12:15', player1: 'NhanVP', player2: 'DongLT', winner: '', score: '' },
  { date: '10/12/2025', time: '12:15', player1: 'Mizutani', player2: 'YenNTN', winner: '', score: '' },
  { date: '10/12/2025', time: '12:15', player1: 'ThaiNQ', player2: 'DongLT', winner: '', score: '' },
  { date: '11/12/2025', time: '12:15', player1: 'NhanVP', player2: 'Mizutani', winner: '', score: '' },
  { date: '11/12/2025', time: '12:15', player1: 'YenNTN', player2: 'DongLT', winner: '', score: '' },
  { date: '12/12/2025', time: '12:15', player1: 'ThaiNQ', player2: 'Mizutani', winner: '', score: '' },
  { date: '12/12/2025', time: '12:15', player1: 'NhanVP', player2: 'YenNTN', winner: '', score: '' }
];

// Dữ liệu mẫu cho playoffMatches (thay thế bằng dữ liệu thực tế của bạn)
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

// === Gamepad Icon: CHẠY 5 LẦN → DỪNG → CLICK MỞ LINK → RESET HOÀN TOÀN ===
let runCount = 0;
const maxRuns = 5;
let isCaught = false;
let originalStyle = null;

function initgamepadIcon() {
    const icon = document.getElementById('gamepadIcon');
    if (!icon) return;

    // Lưu style gốc (chỉ lần đầu)
    if (!originalStyle) {
        originalStyle = {
            left: icon.style.left,
            top: icon.style.top,
            right: icon.style.right || '20px',
            bottom: icon.style.bottom || '20px',
            transform: icon.style.transform || 'scale(1)',
            boxShadow: icon.style.boxShadow || '',
            animation: icon.style.animation || '',
            background: icon.style.background || '#fff',
            color: icon.style.color || '#3b82f6',
            border: icon.style.border || '2px solid #3b82f6'
        };
    }

    // Reset về trạng thái ban đầu
    function resetIcon() {
        runCount = 0;
        isCaught = false;
        icon.style.transition = 'all 0.4s ease';
        icon.style.left = originalStyle.left;
        icon.style.top = originalStyle.top;
        icon.style.right = originalStyle.right;
        icon.style.bottom = originalStyle.bottom;
        icon.style.transform = originalStyle.transform;
        icon.style.boxShadow = originalStyle.boxShadow;
        icon.style.animation = originalStyle.animation;
        icon.style.background = originalStyle.background;
        icon.style.color = originalStyle.color;
        icon.style.border = originalStyle.border;
    }

    function runAway() {
        if (isCaught || runCount >= maxRuns) return;

        runCount++;
        console.log(`Chạy lần ${runCount}/5`);

        const maxX = window.innerWidth - 60;
        const maxY = window.innerHeight - 60;
        const newX = 20 + Math.random() * (maxX - 40);
        const newY = 20 + Math.random() * (maxY - 40);

        icon.style.left = `${newX}px`;
        icon.style.top = `${newY}px`;
        icon.style.bottom = 'auto';
        icon.style.right = 'auto';

        // LẦN 5: DỪNG TẠI CHỖ
        if (runCount >= maxRuns) {
            setTimeout(() => {
                isCaught = true;
                icon.style.transform = 'scale(1.4)';
                icon.style.boxShadow = '0 0 0 6px rgba(59, 130, 246, 0.4), 0 8px 25px rgba(0,0,0,0.2)';
                icon.style.animation = 'pulse 1.5s infinite';

                const style = document.createElement('style');
                style.id = 'troll-pulse-style';
                style.textContent = `
                    @keyframes pulse {
                        0%, 100% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.4), 0 8px 25px rgba(0,0,0,0.2); }
                        50% { box-shadow: 0 0 0 12px rgba(59, 130, 246, 0.2), 0 10px 30px rgba(0,0,0,0.25); }
                    }
                `;
                document.head.appendChild(style);
            }, 400);
        }
    }

    // Hover → chạy trốn
    icon.addEventListener('mouseenter', runAway);

    // Click → mở link + reset sau 1 giây
    icon.addEventListener('click', () => {
        if (isCaught) {
            window.open('https://thichthivar.ssvhue.work', '_blank');

            // Reset sau khi mở link
            setTimeout(() => {
                // Xóa animation pulse
                const pulseStyle = document.getElementById('troll-pulse-style');
                if (pulseStyle) pulseStyle.remove();

                resetIcon();
            }, 1000);
        } else {
            // Chưa bắt được → xoay nhẹ
            icon.style.transform = 'rotate(20deg) scale(0.9)';
            setTimeout(() => icon.style.transform = '', 300);
        }
    });

    // CSS cơ bản
    icon.style.position = 'fixed';
    icon.style.zIndex = '9999';
    icon.style.cursor = 'pointer';
    icon.style.transition = 'all 0.35s ease';
}

document.addEventListener('DOMContentLoaded', initgamepadIcon);

// Schedule page functions
function populateDateFilter() {
    const dateFilter = document.getElementById('date-filter');
    if (!dateFilter) return;
    const dates = [...new Set(
        roundRobinMatches.map(match => match.date).filter(date => date && date !== '')
    )];

    dates.sort((a, b) => new Date(b.split('/').reverse().join('-')) - new Date(a.split('/').reverse().join('-')));

    const todayOption = document.createElement('option');
    todayOption.value = 'today';
    todayOption.textContent = 'Hôm nay';
    dateFilter.appendChild(todayOption);

    // dates.forEach(date => {
    //     const option = document.createElement('option');
    //     option.value = date;
    //     option.textContent = date;
    //     dateFilter.appendChild(option);
    // });

    // dateFilter.value = 'today';
}

let roundRobinTable, playoffTable;

function renderRoundRobin(matches) {
    const tbody = document.querySelector('#round-robin-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    matches.forEach(match => {
        const rowClass = match.player1 === 'Nghỉ ngơi' ? 'rest-row' : '';
        const row = `
            <tr class="${rowClass}">
                <td>${match.date || '-'}</td>
                <td>${match.time || '-'}</td>
                <td>${match.player1 || '-'}</td>
                <td>${match.player2 || '-'}</td>
                <td>${match.winner || '-'}</td>
                <td>${match.score || '-'}</td>
            </tr>`;
        tbody.innerHTML += row;
    });

    if (roundRobinTable) {
        roundRobinTable.clear().rows.add($('#round-robin-table tbody tr')).draw();
    } else {
        roundRobinTable = $('#round-robin-table').DataTable({
            pageLength: 10,
            language: {
                search: "Tìm kiếm:",
                lengthMenu: "Hiển thị _MENU_ trận đấu",
                zeroRecords: "Không tìm thấy trận đấu nào",
                info: "Hiển thị _START_ đến _END_ của _TOTAL_ trận đấu",
                infoEmpty: "Không có trận đấu nào",
                infoFiltered: "(lọc từ _MAX_ trận đấu)"
            },
            order: [[0, 'asc'], [1, 'asc']]
        });
    }
}

function renderPlayoff(matches) {
    const container = document.getElementById('playoff-bracket');
    if (!container) return;

    // Clear previous content
    document.querySelectorAll('.match-pair').forEach(pair => {
        pair.innerHTML = '';
    });

    // Fill matches
    matches.forEach((match, index) => {
        const pair = container.querySelector(`[data-match-index="${index}"]`);
        if (!pair) return;

        const isFinal = match.stage === 'Chung Kết';
        const isThirdPlace = match.stage === 'Tranh 3, 4';

        const player1Class = match.winner === match.player1 ? 'winner' : '';
        const player2Class = match.winner === match.player2 ? 'winner' : '';

        const matchHTML = `
            <div class="match">
                <span class="player ${player1Class}">${match.player1 || '?'}</span>
                <span class="vs">VS</span>
                <span class="player ${player2Class}">${match.player2 || '?'}</span>
            </div>
            <div class="match info-row">
                <span>${match.date || '-'}</span>
                <span>${match.time || '-'}</span>
                <span class="score">${match.score || ''}</span>
            </div>
        `;

        pair.innerHTML = matchHTML;

        // Add trophy for final
        if (isFinal && match.winner) {
            pair.querySelector('.info-row').insertAdjacentHTML('beforeend',
                `<i class="fas fa-trophy" style="color: gold; margin-left: 5px;"></i>`
            );
        }
    });
}

function filterMatches() {
    const dateFilter = document.getElementById('date-filter');
    const groupFilter = document.getElementById('group-filter');
    if (!dateFilter || !groupFilter) return;

    let filteredRoundRobin = roundRobinMatches;
    if (dateFilter.value !== 'all') {
        if (dateFilter.value === 'today') {
            const today = getCurrentDate();
            filteredRoundRobin = filteredRoundRobin.filter(match =>
                match.date === today || match.player1 === 'Nghỉ ngơi'
            );
        } else {
            filteredRoundRobin = filteredRoundRobin.filter(match =>
                match.date === dateFilter.value || match.player1 === 'Nghỉ ngơi'
            );
        }
    }
    if (groupFilter.value !== 'all') {
        filteredRoundRobin = filteredRoundRobin.filter(match => {
            if (match.player1 === 'Nghỉ ngơi') return true;
            return groups[groupFilter.value].includes(match.player1) || groups[groupFilter.value].includes(match.player2);
        });
    }
    renderRoundRobin(filteredRoundRobin);

    let filteredPlayoff = playoffMatches;
    if (dateFilter.value !== 'all') {
        if (dateFilter.value === 'today') {
            const today = getCurrentDate();
            filteredPlayoff = filteredPlayoff.filter(match =>
                match.date === today || match.player1 === 'Nghỉ ngơi'
            );
        } else {
            filteredPlayoff = filteredPlayoff.filter(match =>
                match.date === dateFilter.value || match.player1 === 'Nghỉ ngơi'
            );
        }
    }
}

// Rankings page functions
function initializeRankings() {
    const rankings = {};
    Object.keys(groups).forEach(group => {
        rankings[group] = groups[group].map(player => ({
            player,
            matches: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDiff: 0
        }));
    });
    return rankings;
}

function calculateRankings() {
    const rankings = initializeRankings();

    Object.keys(groups).forEach(group => {
        roundRobinMatches.forEach(match => {
            const p1Name = match.player1;
            const p2Name = match.player2;

            if (!groups[group].includes(p1Name) || !groups[group].includes(p2Name)) return;

            const p1 = rankings[group].find(p => p.player === p1Name);
            const p2 = rankings[group].find(p => p.player === p2Name);
            if (!p1 || !p2) return;

            const winner = match.winner?.trim();
            const score = match.score?.trim();

            // === 1. Chưa thi đấu: winner = '' → bỏ qua ===
            if (!winner || winner === '') return;

            // === 2. Đã thi đấu → tính trận + điểm ===
            p1.matches++;
            p2.matches++;

            let p1Score = 0, p2Score = 0;
            if (score && score.includes('-')) {
                const [s1, s2] = score.split('-').map(Number);
                p1Score = isNaN(s1) ? 0 : s1;
                p2Score = isNaN(s2) ? 0 : s2;
            }

            // === Xử lý kết quả theo winner ===
            if (winner === 'H') {
                p1.draws++; p2.draws++;
                p1.points += 1; p2.points += 1;
            } else if (winner === p1Name) {
                p1.wins++; p2.losses++;
                p1.points += 3;
            } else if (winner === p2Name) {
                p2.wins++; p1.losses++;
                p2.points += 3;
            }

            // === Cập nhật tỉ số (dù hòa hay thắng) ===
            p1.goalsFor += p1Score;
            p1.goalsAgainst += p2Score;
            p2.goalsFor += p2Score;
            p2.goalsAgainst += p1Score;

            // Tính hệ số phụ
            p1.goalDiff = p1.goalsFor - p1.goalsAgainst;
            p2.goalDiff = p2.goalsFor - p2.goalsAgainst;
        });

        // === Sắp xếp: Điểm → Thắng → Hệ số phụ → Bàn thắng ===
        rankings[group].sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.wins !== a.wins) return b.wins - a.wins;
            if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
            return b.goalsFor - a.goalsFor;
        });
    });

    return rankings;
}

function calculatePlayoffRankings() {
    const rankings = [];

    // Lấy các trận chung kết và tranh hạng ba
    const finalMatch = playoffMatches.find(match => match.stage === 'Chung Kết');
    const thirdPlaceMatch = playoffMatches.find(match => match.stage === 'Tranh 3, 4');
    const semiFinalMatches = playoffMatches.filter(match => match.stage === 'Bán kết');
    const quarterFinalMatches = playoffMatches.filter(match => match.stage === 'Tứ kết');

    // Xếp hạng 1: Người thắng chung kết
    if (finalMatch && finalMatch.winner) {
        rankings.push({
            rank: 1,
            player: finalMatch.winner,
            eliminatedRound: 'Vô địch'
        });
    }

    // Xếp hạng 2: Người thua chung kết
    if (finalMatch && finalMatch.winner) {
        const runnerUp = finalMatch.player1 === finalMatch.winner ? finalMatch.player2 : finalMatch.player1;
        if (runnerUp) {
            rankings.push({
                rank: 2,
                player: runnerUp,
                eliminatedRound: 'Chung kết'
            });
        }
    }

    // Xếp hạng 3: Người thắng trận tranh hạng ba
    if (thirdPlaceMatch && thirdPlaceMatch.winner) {
        rankings.push({
            rank: 3,
            player: thirdPlaceMatch.winner,
            eliminatedRound: 'Tranh hạng ba'
        });
    }

    // Xếp hạng 4: Người thua trận tranh hạng ba
    if (thirdPlaceMatch && thirdPlaceMatch.winner) {
        const fourthPlace = thirdPlaceMatch.player1 === thirdPlaceMatch.winner ? thirdPlaceMatch.player2 : thirdPlaceMatch.player1;
        if (fourthPlace) {
            rankings.push({
                rank: 4,
                player: fourthPlace,
                eliminatedRound: 'Tranh hạng ba'
            });
        }
    }

    // Xếp hạng 5-8: Những người thua ở bán kết và tứ kết
    const semiFinalLosers = semiFinalMatches
        .filter(match => match.winner)
        .map(match => match.player1 === match.winner ? match.player2 : match.player1)
        .filter(player => player && !rankings.some(r => r.player === player));

    const quarterFinalLosers = quarterFinalMatches
        .filter(match => match.winner)
        .map(match => match.player1 === match.winner ? match.player2 : match.player1)
        .filter(player => player && !rankings.some(r => r.player === player));

    // Thêm những người thua bán kết (xếp hạng 5-6)
    semiFinalLosers.forEach((player, index) => {
        rankings.push({
            rank: 5 + index,
            player,
            eliminatedRound: 'Bán kết'
        });
    });

    // Thêm những người thua tứ kết (xếp hạng 7-8)
    quarterFinalLosers.forEach((player, index) => {
        rankings.push({
            rank: 7 + index,
            player,
            eliminatedRound: 'Tứ kết'
        });
    });

    return rankings;
}

function renderPlayoffRankings() {
    const tbody = document.querySelector('#playoff-rankings-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const rankings = calculatePlayoffRankings();
    rankings.forEach((entry, index) => {
        let rowClass = '';
        let rankDisplay = entry.rank;
        if (entry.rank === 1) {
            rowClass = 'gold-row';
            rankDisplay = `<i class="fas fa-medal medal-icon" style="color: var(--gold-color);"></i> ${entry.rank}`;
        } else if (entry.rank === 2) {
            rowClass = 'silver-row';
            rankDisplay = `<i class="fas fa-medal medal-icon" style="color: var(--silver-color);"></i> ${entry.rank}`;
        } else if (entry.rank === 3) {
            rowClass = 'bronze-row';
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

    if ($.fn.DataTable.isDataTable('#playoff-rankings-table')) {
        $('#playoff-rankings-table').DataTable().clear().rows.add($('#playoff-rankings-table tbody tr')).draw();
    } else {
        $('#playoff-rankings-table').DataTable({
            pageLength: 8,
            searching: false,
            lengthChange: false,
            language: {
                info: "Hiển thị _START_ đến _END_ của _TOTAL_ người chơi",
                infoEmpty: "Không có người chơi nào",
                infoFiltered: "(lọc từ _MAX_ người chơi)"
            },
            order: [[0, 'asc']]
        });
    }
}

function renderRankings(groupFilter = 'all') {
    const rankingsTables = document.getElementById('rankings-tables');
    if (!rankingsTables) return;
    rankingsTables.innerHTML = '';
    const rankings = calculateRankings();
    const groupsToShow = groupFilter === 'all' ? ['A', 'B', 'C', 'D'] : [groupFilter];

    groupsToShow.forEach(group => {
        const tableContainer = `
            <div class="table-container">
                <h2>Bảng xếp hạng Nhóm ${group}</h2>
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
            const rowClass = index < 2 ? 'top-row' : '';
            const row = `
                <tr class="${rowClass}">
                    <td>${player.player}</td>
                    <td>${player.matches}</td>
                    <td>${player.wins}</td>
                    <td>${player.losses}</td>
                    <td>${player.draws}</td>
                    <td>${player.goalDiff >= 0 ? '+' + player.goalDiff : player.goalDiff}</td>
                    <td>${player.points}</td>
                </tr>`;
            tbody.innerHTML += row;
        });

        $(`#rankings-table-${group}`).DataTable({
            pageLength: 5,
            lengthChange: false,
            language: {
                search: "Tìm kiếm:",
                lengthMenu: "Hiển thị _MENU_ người chơi",
                zeroRecords: "Không tìm thấy người chơi nào",
                info: "Hiển thị _START_ đến _END_ của _TOTAL_ người chơi",
                infoEmpty: "Không có người chơi nào",
                infoFiltered: "(lọc từ _MAX_ người chơi)"
            },
            order: [[5, 'desc'], [2, 'desc']]
        });
    });

    // Render playoff rankings
    renderPlayoffRankings();
}

function filterRankings() {
    const groupFilter = document.getElementById('group-filter');
    if (!groupFilter) return;
    renderRankings(groupFilter.value);
}

// Initialize based on page
$(document).ready(() => {
    // Configure DataTables moment plugin if on schedule page
    if (document.getElementById('round-robin-table')) {
        $.fn.dataTable.moment('DD/MM/YYYY');
    }

    // Schedule page initialization
    if (document.getElementById('round-robin-table')) {
        renderGroups();
        populateDateFilter();
        renderRoundRobin(roundRobinMatches);
        renderPlayoff(playoffMatches);

        // filterMatches();
        $('#date-filter, #group-filter').on('change', filterMatches);
    }

    // Rankings page initialization
    if (document.getElementById('rankings-tables')) {
        renderRankings();
        $('#group-filter').on('change', filterRankings);
    }

    // Common initialization
    setupgamepadIcon();
});