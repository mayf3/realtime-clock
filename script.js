function updateClock() {
    const now = new Date();

    const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdays[now.getDay()];

    const dateStr = `${year}-${month}-${day} ${weekday}`;

    document.getElementById('time').textContent = timeStr;
    document.getElementById('date').textContent = dateStr;
}

updateClock();
setInterval(updateClock, 1000);
