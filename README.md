# Сайт TeleWorks

# ⚠️ Разработка проекта временно заморожена в связи с организационными моментами ⚠️

# Страницы

- `/` - Главная страница
- `/blog` - Главная страница блога
- `/blog/<id поста>` - Страница поста в блоге
- `/blog/create` - Страница создания поста в блоге
- `/catalog` - Главная страница каталога Telegram-каналов
- `/catalog/cart` - Страница корзины каталога Telegram-каналов
- `/create-card` - Страница создания карточки организации/заказчика
- `/create-order` - Страница создания заказа
- `/faq` - Страница FAQ
- `/internal` - Страница с информацией о проекте
- `/kind-deeds` - Страница "Добрые дела" для благотворительности
- `/kind-deeds/create-request` - Страница создания запроса средств
- `/myProjects` - Страница проектов пользователя
- `/channel/<id поста>` - Страница Telegram-канала
- `/channel/<id поста>/stats` - Страница статистики Telegram-канала
- `/services` - Страница с услугами специалистов
- `/services/<id проекта>` - Страница проекта
- `/turnkey-websites` - Страница с услугой разработки сайтов под ключ
- `/user` - Страница пользователя
- `/user/edit` - Страница редактирования пользователя
- `/<любая другая ссылка>` - Страница 404

---

# Запуск сайта

Инструкция по запуску сайта на ваш локальный компьютер:

1.  Склонируйте данный репозиторий.
2.  Перейдите в папку client с помощью `cd client`.
3.  Напиши в терминале `npm install` для установки всех зависимостей.
4.  Напишите в терминале команду `npm run dev`.

Или вы можете просто зайти на [сайт](https://evgeniywis.github.io/TeleWorks/), загруженный на Github Pages.

---

## Скрипты

- `npm run dev` - Запуск проекта в dev режиме на Vite
- `npm run build` - Сборка проекта с помощью Vite
- `npm run deploy` - Деплой проекта на Github Pages
- `npm run stylelint:check` - Запуск проверки scss файлов проекта с помощью styleLint
- `npm run stylelint:fix` - Запуск исправления scss файлов проекта, там где это возможно, с помощью styleLint
- `npm run eslint:check` - Запуск проверки ts файлов проекта с помощью esLint
- `npm run eslint:fix` - Запуск исправления ts файлов проекта, там где это возможно, с помощью esLint
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run test:unit` - Запуск unit тестов с jest/react-testing-library
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run prettier` - запуск Prettier для форматирования кода
- `npm run prepare` - Загрузка husky для прекоммит-хуков

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design, но имеет некоторые отличия в лице добавления для виджетов/сущностей/фичей родительских папок, которые определяют к какой странице проекта относится компонент.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library - `npm run test:unit`
3. Скриншотное тестирование с loki - `npm run test:ui`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-teleworks_,
который содержит 4 правила:

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля;
2. imports-from-layers - проверяет корректность использования слоёв с точки зрения архитектуры проекта
   (например widgets нельзя использовать в features и entitites);
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix;
4. exports-always-relative - разрешает экспорт из public api только если путь экспорта относительный.

Все правила имеют написанные тесты, которые можно запустить с помощью команды `npm run test` в директории плагина.

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создаётся рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonTypes } from "../model/Button__types";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonRed: Story = {
  args: {
    to: "/",
    text: "Красная кнопка",
    type: ButtonTypes.RED,
  },
};

export const ButtonBlue: Story = {
  args: {
    to: "/",
    text: "Синяя кнопка",
    type: ButtonTypes.BLUE,
  },
};

export const ButtonGray: Story = {
  args: {
    to: "/",
    text: "Серая кнопка",
    type: ButtonTypes.GRAY,
  },
};

export const ButtonBlack: Story = {
  args: {
    to: "/",
    text: "Чёрная кнопка",
    type: ButtonTypes.BLACK,
  },
};
```

---

## Конфигурация проекта

Для разработки проект содержит конфиг:
Vite - vite.config.ts

Cборщика адаптирован под основные фичи приложения.

Вся конфигурация хранится в корне проекта:

- babel.config.json - babel
- vite.config.ts - конфигурация Vite
- jest.config.ts - конфигурация тестовой среды Jest
- /.storybook - конфигурация Storybook

В папке `scripts` находятся различные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter.

Запросы на сервер отправляются с помощью [RTK query](/client/src/shared/config/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](src/shared/ui-kit/DynamicModuleLoader/ui/DynamicModuleLoader.tsx)

---

## Сущности (entities)

### Глобальные

- [Order Info](/client/src/entities/Global_entities/OrderInfo)
- [Project Item](/client/src/entities/Global_entities/ProjectItem)
- [Reviews Item](/client/src/entities/Global_entities/Reviews__item)
- [ReviewsPanel](/client/src/entities/Global_entities/ReviewsPanel)
- [Stats\_\_item](/client/src/entities/Global_entities/OrderInfo)

### Страница Каталога

- [Catalog Item](/client/src/entities/CatalogPage_entities/CatalogItem)

### Страница создания заказа

- [OrderPreview](/client/src/entities/CreateOrderPage_entities/OrderPreview)

### Страница профиля канала

- [TelegramChannel](/client/src/entities/TelegramChannelPage_entities/TelegramChannel)
- [Similar Channels Item](/client/src/entities/TelegramChannelPage_entities/Similar_channels__item)

### Страница проекта

- [Author Card](/client/src/entities/ProjectPage_entities/AuthorCard)
- [Project Info Pack](/client/src/entities/ProjectPage_entities/ProjectInfo_pack)

### Страница редактирования профиля

- [Сhangeable Portfolio Case](/client/src/entities/UserEditPage_entities/СhangeablePortfolioCase)

### Страница профиля

- [User Card](/client/src/entities/UserPage_entities/UserCard)

## Фичи (features)

### Глобальные

- [Attach File Container](/client/src/features/Global_features/AttachFileContainer)
- [Blog Filter](/client/src/features/Global_features/BlogFilter)
- [Filter](/client/src/features/Global_features/Filter)
- [Search](/client/src/features/Global_features/Search)

### Страница создания карточки

- [Create Card Form](/client/src/features/CreateCardPage_features/CreateCardForm)

### Страница профиля канала

- [Buy Ads Calendar](/client/src/features/TelegramChannelPage_features/Buy_ads_calendar)
- [Buy Ads Form](/client/src/features/TelegramChannelPage_features/Buy_ads_form)

### Страница проекта

- [Checkout Order](/client/src/features/ProjectPage_features/CheckoutOrder)

## Прочие особенности:

#### ● Использована библиотека Swiper для реализации слайдеров на страницах.

#### ● Использована библиотека @szhsin/react-accordion для реализации аккордионов на страницах.

#### ● Реализован кастомный Select из библиотеки Prime React.

#### ● Использованы библиотеки @mui/material и flowbite-react для реализации чекера и dropdown меню в хедере.

#### ● Использована библиотека react-calendar для реализации кастомного календаря на странице в соответствии с макетом.

#### ● Использован FileReader для обработки и отображения загружаемых пользователем файлов.

#### ● Использована библиотека react-trumbowyg для реализации текстового поля с Markdown-функциями.

#### ● Использованы библиотеки chart.js и react-chartjs-2 для реализации интерактивных графиков на основе входных данных.

#### ● Реализован индикатор загрузки файла с процентом загрузки для повышения UX.

#### ● Для адаптива страниц использованы специальные переменные препроцессора Sass.

#### ● Использована рекурсия для рендеринга некоторых компонентов.

#### ● Использован LocalStorage и создан кастомный хук useLocalStorage для кеширования текстовых данных.

#### ● Использовано IndexedDB и создан кастомный хук/класс useIndexedDB для кеширования файлов.

#### ● Реализована асинхронная загрузка npm библиотек.

#### ● Использована библиотека react-image-crop для реализации обрезки изображений.
