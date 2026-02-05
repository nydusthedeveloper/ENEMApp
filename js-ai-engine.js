const profile = {
    level: "Iniciante",
    focus: "Ciências Humanas",
    time: "2h"
};

function handleSend() {
    const input = document.getElementById('userInput');
    const chat = document.getElementById('chat-window');
    
    if (!input.value.trim()) return;

    // Adiciona balão do usuário
    chat.innerHTML += `
        <div class="user-msg">
            <div class="content">${input.value}</div>
        </div>
    `;

    const userText = input.value.toLowerCase();
    input.value = "";

    // Resposta da IA com lógica de prompt personalizada
    setTimeout(() => {
        let aiTexto = "Comando processado. Aguardando sincronização de dados...";
        
        if (userText.includes("estudar") || userText.includes("plano")) {
            aiTexto = `**Plano de Missão:**<br>
            • **Foco:** ${profile.focus}<br>
            • **Duração:** 120min<br>
            • **Tarefa:** Assistir resumo de Revolução Industrial + 5 exercícios.<br><br>
            *Dica: Use mapas mentais para conectar os conceitos!*`;
        }

        chat.innerHTML += `
            <div class="ai-msg">
                <div class="icon-avatar"><i data-lucide="zap" size="18"></i></div>
                <div class="msg-content">${aiTexto}</div>
            </div>
        `;
        lucide.createIcons();
        chat.scrollTop = chat.scrollHeight;
    }, 600);
}