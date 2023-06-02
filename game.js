'use strict';

(() => {

  const gameStart = () => {
    let userBalls = 5; //начальное количество шариков пользователя
    let compBalls = 5; //начальное количество шариков пользователя
    let user = null;
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const passUser = () => {
        //запрашиваем количество шариков
        let userNumber = prompt("Введите количество шариков:", 3);

        //выполняем проверку
        let userN = Number(parseFloat(userNumber));
        if (!Number.isInteger(userN) || userN > userBalls || userN < 1) { return passUser() }

        //**консоль */
        console.log(`число пользователя userN ${userN}`);

        return passComp(userN)
    }

    const passComp = (num) => {

        //определение четное/нечетное
        let isOdd = num % 2 === 0 ? 1 : 0;

        //**консоль */
        console.log(`проверка числа  ${num} на четность: ${isOdd}`);

        //случайное число на чет=0 / нечет=1 )
        let odd = getRandomIntInclusive(0, 1);
        //**консоль */
        console.log(`комп загадал  ${odd}`);
        console.log(`---------------------------`);

        alert("Компьютер загадал, что ваше число: " + `${odd ? "четное" : "нечетное"}`);

        if (isOdd === odd) {
            compBalls += num; userBalls -= num;

            //**консоль */
            console.log(`******************************`);
            console.log(`пользователь шарики  ${userBalls}`);
            console.log(`комп шарики  ${compBalls}`);
            console.log(`******************************`);

            //alert("Компьютер угадал!");

        }
        else {
            compBalls -= num; userBalls += num;
            //**консоль */
            console.log(`+++++++++++++++++++++++++++++++++++`);
            console.log(`пользователь шарики  ${userBalls}`);
            console.log(`комп шарики  ${compBalls}`);
            console.log(`+++++++++++++++++++++++++++++++++++`);
            //alert("Компьютер НЕ угадал!");

        }

        //проверка баллов
        if (userBalls <= 0 || compBalls <= 0) {
            let winner = userBalls > compBalls ? "пользователь" : "компьютер";
            alert(`Победил ${winner}`);
        }
        else { return user = passUser() }

    }

    user = passUser();
    return passComp(user);
}

  window.Marbles = gameStart;
})();

