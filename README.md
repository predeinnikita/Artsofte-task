## Реализация:

1. Реализовал роутинг приложения.
	В приложении должен есть layout - приложения (компонента layout-component).
	А также 3 роута:
	- /list, который ведёт на компоненту company-list, список компаний.
	- /detail/:id , который ведёт на компоненту company-detail, детальную страницу о компании.
	- /map , который ведёт на компоненту company-yandex-map, отображение компаний на карте.

2. Реализовал страницу со списком компаний.
	- Список должен состоит как из 2-х компонент:
		- company-item, в которой отображаются данные: логотип (logo), название компании (в формате: suffix "business_name"), вид деятельности (industry) и тип (type).
		- company-list, в которой содержится массив company-item.
	- Сервис, для запросов на endpoint.
	- В html отображается массив company-item.
	
3. Реализовал страницу с подробной информации о конкретной компании (компонента company-detail).
	- Переход на данную страницу происходит при клике на компанию в списке (компонента company-item).
	- В company-detail есть следующие данные: логотип (logo), название компании (в формате: suffix "business_name"), вид деятельности (industry), слоган (catch_phrase), контактный номер телефона (phone_number), адрес (full_address).
	
4. На странице со списком компаний (компонента company-list) реализовал функционал сортировки.
	- Реализовал компоненту company-sort, которая генерирует эвент для сортировки списка компаний.
	- Сортировка по: названию, типу, виду деятельности.
	- При клике по сорт-полю, должен автоматически перестраивается список.
	- Связал сортировку с компонентой company-list через Input/Output или через сервис.

5.  На страницу со списком компаний (компонента company-list) добавил функционал фильтрации.
	- Реализовал компоненту company-filter, которая генерирует эвент для фильтрации списка компаний.
	- Контролы в фильтре: text-box поиск по названию, select-box с типами компаний, select-box с видами деятельности.
	- Это форма, реализованная с помощью модуля ReactiveForm.
	- При изменение поля, автоматически происходит фильтрация списка компаний, компоненты company-list.
	- Связал фильтрацию с компонентой company-list через Input/Output или через сервис.


Первый опыт в Ангуляре:)
