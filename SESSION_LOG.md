# SESSION LOG — projects/zotova-site

> Лог только этой спицы. 1 строка + `💾` после задачи. Без `💾` — задача не закрыта.
> В корневой `SESSION_LOG.md` НЕ дублировать.

## История до миграции на хаб-спица
До 2026-05-08 события писались в корневой `SESSION_LOG.md`. Краткий итог:
- 2026-05-07: создан полноценный сайт Vite+React+Tailwind+Router (8 маршрутов, 9 компонентов, реальные ассеты).
- 2026-05-07: до этого был статический макет в `mockups/zotova-massage/` с FAQ-блоком и адаптацией под палитру пыльно-розовый+золото+винный.

## 2026-05-08
- 🏗 Спица оформлена: создана локальная `CLAUDE.md` и этот лог. Дальнейшие события пишу сюда. 💾
- 🚀 Деплой на Cloudflare Pages: создан standalone GitHub-репо `DimanSuperHero/zotova-site`, настроен авто-деплой при push в `main`. Live: https://zotova-site.pages.dev — все 7 маршрутов отдают 200 OK. 💾
- 🐞 Фикс мобилки + навигация: верхнее меню переведено на якоря лендинга (`/#about`, `/#techniques`, `/#faq`, `/#booking`), «Отзывы» и «Контакты» — отдельные страницы. Добавлен `ScrollToTop` (сброс скролла + smooth scroll к hash). Hero/About/TechniquesGrid/Reviews/FAQ/BookingForm/Footer/Header переадаптированы под мобилку (px-4 sm:px-6, адаптивная типографика, кнопки в колонку, overflow-x:hidden на html/body). Build OK. 💾
