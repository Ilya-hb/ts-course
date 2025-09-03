"use strict";
// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.
// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень.
//  В теле функции для полученного объекта должен назначаться следующий уровень.
Object.defineProperty(exports, "__esModule", { value: true });
// create a function that change level of incoming developer
function gradeDeveloper(dev, newLevel) {
    console.log(`Your user had ${dev.level} level`);
    dev.level = newLevel;
    console.log(`But now he has ${dev.level} level`);
}
gradeDeveloper({ level: "junior" }, "middle");
//# sourceMappingURL=08-union-task.js.map