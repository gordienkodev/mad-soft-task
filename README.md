# Knowledge testing system

As part of the project for an educational institution, a client-side information system was developed to assess students' knowledge through testing. The application was built using React with TypeScript, supporting various question types, including single-choice, multiple-choice, short answer, and essay questions. A time limit feature for test completion was also implemented.
To ensure progress is saved, the application includes logic to restore the test state after page reloads. The architecture is designed to accommodate the addition of new question types in the future, providing flexibility. The interface is designed as a step-by-step form, enhancing user experience.
 
Deploy: [https://mad-soft-task.vercel.app/](https://mad-soft-task.vercel.app/)

## Author

- [Pavel Gordienko](https://github.com/guz86)

## Setup and Running

- Use `node 21.x` or higher.
- Clone this repo: `$ git clone [https://github.com/guz86/mad-soft-task.git)`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm run dev`.
- Now you can see web application to the address: `http://localhost:5173/`.

### Build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run dev
```

## Stack
- React
- Typescript
- Vite
- Ant design

## Folder structure

- Components - components of application.
- Utils - helper utilities

## Screenshots
![image](https://github.com/user-attachments/assets/1e04aacc-954a-4fda-9485-1d8bfc0f4c77)
![image](https://github.com/user-attachments/assets/2df9e1cd-c4c3-4855-bf17-9beff34e2087)
![image](https://github.com/user-attachments/assets/0513e287-e731-43b7-a7ba-aef5af06f2b4)

 
## Task

Заказчик:
Образовательное учреждение (например, школа по подготовке к ЕГЭ).

Проект:
Информационная система для проверки знаний учащихся школы.

Задача:
В школе проводятся промежуточные аттестации учащихся в формате теста. Необходимо реализовать клиентскую часть приложения для проведения тестирования.

💡 Тест на этапе MVP должен представлять из себя стандартные тесты:
варианты ответа
выбор одного варианта
выбор нескольких вариантов
короткий ответ
развернутый ответ
Также тест может иметь ограничение по времени выполнения.
При перезагрузке страницы необходимо сохранять прогресс выполнения теста.

Особенности:
Заказчик пока не знает какие еще варианты представления вопросов могут ему понадобиться в будущем, поэтому необходимо предусмотреть возможность добавления новых типов вопросов

Уточнение по внешнему виду:
Необходимо реализовать пошаговую форму (пример представлен на рисунке)

![image](https://github.com/user-attachments/assets/fd0b1840-029b-44dd-a32a-bf07982df84c)


Ограничения:
Приложение должно быть реализовано на React с использованием Typescript. Необходимо реализовать только клиентскую часть приложения, тест можно замокать, содержимое теста не имеет значения.
При необходимости можно использовать любой стейтменжер, ui kit, библиотеки для работы с формами и т.д.
