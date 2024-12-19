function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    document.getElementById('datetime').textContent = formattedTime;
  }
  setInterval(updateTime, 1000);
  const standardTheme = document.querySelector('.standard-theme');
  const lightTheme = document.querySelector('.light-theme');
  const darkerTheme = document.querySelector('.darker-theme');
  
  function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('savedTheme', theme);
  }
  
  const savedTheme = localStorage.getItem('savedTheme');
  changeTheme(savedTheme || 'standard');
  
  standardTheme.addEventListener('click', () => changeTheme('standard'));
  lightTheme.addEventListener('click', () => changeTheme('light'));
  darkerTheme.addEventListener('click', () => changeTheme('darker'));
  