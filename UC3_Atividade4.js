// Cadastro de participantes para um evento

// Lista de eventos disponíveis
const eventos = [
    { nome: "Tech Meetup", data: new Date("2024-12-20"), limiteInscricao: new Date("2024-12-15") },
    { nome: "Coding Bootcamp", data: new Date("2025-01-10"), limiteInscricao: new Date("2025-01-05") },
];

// Função para verificar se o participante pode ser cadastrado
function cadastrarParticipante(nome, idade, eventoEscolhido) {
    console.log(`\nInício do processo de cadastro para: ${nome}`);

    // Verificar maioridade
    if (idade < 18) {
        console.log("Idade não permitida: Apenas maiores de idade podem participar.");
        return;
    }

    // Encontrar o evento escolhido
    const evento = eventos.find(e => e.nome === eventoEscolhido);
    if (!evento) {
        console.log("Evento indisponível ou não encontrado.");
        return;
    }

    // Verificar se a data do evento já passou
    const hoje = new Date();
    if (hoje > evento.data) {
        console.log("Evento já realizado!");
        return;
    }

    // Verificar prazo de inscrição
    if (hoje > evento.limiteInscricao) {
        console.log("Inscrição não realizada: Prazo encerrado para este evento.");
        return;
    }

    console.log(`Cadastro realizado com sucesso para o evento: ${evento.nome}`);
}

// Testando o sistema de cadastro com base no fluxograma
cadastrarParticipante("Rodolfo Silva", 25, "Tech Meetup");
cadastrarParticipante("João Almeida", 17, "Tech Meetup");
cadastrarParticipante("Maria Clara", 22, "Coding Bootcamp");
cadastrarParticipante("Ana Costa", 30, "Evento Fictício");
