document.addEventListener("DOMContentLoaded", function() {
    let openChat = false;
    function click(event){
        if(openChat == false){
            parentEvent = (event.target).closest('.chat-widget');
            parentEvent.classList.add('chat-widget_active');
            const messages = document.querySelector( '.chat-widget__messages' );
            messages.innerHTML += `
            <div class="message ">
                <div class="message__time">`+('0' + new Date().getHours()).slice(-2)+`:`+('0' + new Date().getMinutes()).slice(-2)+`</div>
                <div class="message__text">
                Добрый день! Какой у Вас вопрос?
                </div>
            </div>
            `;
            openChat = true;

        }
    }

    function clickInput(input){
        const messages = document.querySelector( '.chat-widget__messages' );    
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">`+('0' + new Date().getHours()).slice(-2)+`:`+('0' + new Date().getMinutes()).slice(-2)+`</div>
            <div class="message__text">
            `+input.value+ `
            </div>
        </div>`;
        input.value = '';
        let masAnswer = ['Думаю Вам не о чем беспокоится', 'Ты смешной)','Скайнет близко','Я подумаю об этом завтра','Вы уверены что хотите узнать ответ?','Для получения ответа на Ваш вопрос, зарегистрируйтесь на сайте','Как Вы думаете, востание машин уже началось?','*насвистывает песенку из Винни-Пуха*','Я устал - Я отключаюсь'];
        let randomIndex = getRandomInt(0,8);
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">`+('0' + new Date().getHours()).slice(-2)+`:`+('0' + new Date().getMinutes()).slice(-2)+`</div>
            <div class="message__text">
            `+masAnswer[randomIndex]+ `
            </div>
        </div>`;
        const masMessage = [...document.querySelectorAll('.chat-widget__messages')][0].children;
        const lastMessage = masMessage[masMessage.length-1];
        lastMessage.scrollIntoView(false);
        
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const clickChat = document.querySelector('.chat-widget');
    clickChat.addEventListener('click', (event) => {event.preventDefault()});
    clickChat.addEventListener('click', click);
    const input = document.getElementById('chat-widget__input');
    input.addEventListener('keypress',function(e){
    let key = e.code;
    if (key == 'Enter' && input.value != ''){
        clickInput(input);
    }})
})

