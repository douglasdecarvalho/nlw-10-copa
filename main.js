function createGame(player1, hour, player2) {

    return`
    
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Logo Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Logo Bandeira da ${player2}">
        </li>

    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;

    return `
    
<div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>

    <ul>
        ${games}
    </ul>
</div>
    
    `

}


document.querySelector('#cards').innerHTML = 

        createCard('20/11', 'domingo',
        createGame('qatar', '13:00', 'ecuador')) +
        
        
        createCard('21/11', 'segunda',
        createGame('england', '10:00', 'ira') +
        createGame('senegal', '13:00', 'netherlands') +
        createGame('us', '16:00', 'wales')) +

        createCard('22/11', 'terça',
        createGame('argentina', '07:00', 'arabia') +
        createGame('denmark', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia')) +

        createCard('23/11', 'quarta',
        createGame('argentina', '07:00', 'arabia') +
        createGame('denmark', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia')) +

        createCard('24/11', 'quinta',
        createGame('argentina', '07:00', 'arabia') +
        createGame('denmark', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia')) +

        createCard('25/11', 'sexta',
        createGame('argentina', '07:00', 'arabia') +
        createGame('denmark', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'poland') +
        createGame('france', '16:00', 'australia'))
