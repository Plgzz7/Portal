// ===== GUARDA DE AUTENTICAÇÃO =====
// Redireciona para o login se o usuário não estiver autenticado.
(function () {
    if (!localStorage.getItem('empireads-user-name')) {
        window.location.replace('login.html');
    }
})();

// Logout: limpa a sessão ao clicar em "Sair"
document.addEventListener('click', (e) => {
    const sair = e.target.closest('a[href="login.html"]');
    if (sair) localStorage.removeItem('empireads-user-name');
});
