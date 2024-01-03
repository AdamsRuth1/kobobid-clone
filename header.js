function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-nav');
    const hamburger = document.getElementById('hamburger');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'flex' : 'none'; 
}