function submitForm() {
    // Obter valores dos campos
    var cpf = document.getElementById('cpf').value;
    var nome_motorista = document.getElementById('nome_motorista').value;
    var rg = document.getElementById('rg').value;
    var telefone = document.getElementById('telefone').value;
    var transportadora = document.getElementById('transportadora').value;
    var tipo_veiculo = document.getElementById('tipo_veiculo').value;
    var tipo_veiculo_carga = document.getElementById('tipo_veiculo_carga').value;
    var placa = document.getElementById('placa').value;
    var placa_carreta = document.getElementById('placa_carreta').value;

    // Aqui você pode fazer o que quiser com os dados, por exemplo, enviá-los para um servidor
    // Neste exemplo, apenas exibimos os dados no console
    console.log("Nome do Motorista: " + nome_motorista);
    console.log("CPF: " + cpf);
    console.log("RG: " + rg);
    console.log("Telefone: " + telefone);
    console.log("Transportadora: " + transportadora);
    console.log("Tipo de Veículo: " + tipo_veiculo);
    console.log("Tipo de Veículo de Carga: " + tipo_veiculo_carga);
    console.log("Placa: " + placa);
    console.log("Placa da Carreta: " + placa_carreta);
}

// Função para formatar o horário atual
function formatarHorario() {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    minutos = minutos < 10 ? '0' + minutos : minutos; // Adiciona um zero à esquerda se for menor que 10
    var horarioFormatado = horas + ':' + minutos;
    return horarioFormatado;
}

// Função para ser chamada quando a página carregar
window.onload = function () {
    // Configurar a data atual no campo de data
    var campoData = document.getElementById('data');
    var dataAtual = new Date();
    var dataFormatada = dataAtual.toISOString().split('T')[0];
    campoData.value = dataFormatada;

    // Configurar o horário atual no campo de horário
    var campoHorario = document.getElementById('horario');
    campoHorario.value = formatarHorario();
};
