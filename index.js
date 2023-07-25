// Получение доступа к данным курса валют с открытого API
const url = "https://www.cbr-xml-daily.ru/daily_json.js";

function create(element) {
    return document.createElement(element);
}

function append(parent, elem) {
    return parent.appendChild(elem);
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        let idNum = data.ID;
        let name = data.Name;
        const moneyElement = document.querySelector("money");
        let moneyCurrency = money.value;
        moneyElement.innerText = `${ID} ${Name}`;
        // Отображение текста в зависимости от выбора селектора
        money.addEventListener('change', function(){
            if (data.ID) {
            return PreviousDate, Timestamp;
            }
        })

    })
    .catch(error => console.error(error))

