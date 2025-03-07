const snowflakesContainer = document.getElementById('snowflakes-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '🌸'; 
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 4 + 2 + 's'; // Случайная скорость падения
    snowflake.style.opacity = Math.random(); // Случайная прозрачность
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Случайный размер

    snowflakesContainer.appendChild(snowflake);

    // Удаление после завершения анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Создание с интервалом
setInterval(createSnowflake, 1000);