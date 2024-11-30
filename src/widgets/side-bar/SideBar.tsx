import { Button, Input } from '~/shared/ui'
import { FilterIcon, PinIcon, RightArrowIcon, SideBarIcon, StarIcon } from '~/shared/ui/icons'

import './side-bar.scss'

export function SideBar() {
	return (
		<aside className="side-bar">
			<div className="side-bar__controls">
				<SideBarIcon />
				<StarIcon className="cursor-pointer" />
			</div>
			<div>
				<div className="side-bar__filter-wrapper">
					<Input suffix={<FilterIcon />} />
					<Button variant={'secondary'}>
						<PinIcon />
					</Button>
				</div>
				<div className="side-bar__nav">
					{MENU_ITEMS.map((menuItem) => (
						<div className="nav-item">
							<RightArrowIcon />
							<p>{menuItem}</p>
						</div>
					))}
				</div>
			</div>
		</aside>
	)
}

const MENU_ITEMS = [
	'Личное расписание',
	'Отсутствие на рабочем месте',
	'Портфель услуг',
	'Дашборды',
	'Доски задач',
	'Обращения',
	'События',
	'Инциденты',
	'Проблемы',
	'Настройка каталогов',
	'Запросы на обслуживание',
	'Запросы на изменение',
	'Управление конфигурациями',
	'Управление уровнем услуг',
	'Настройка соответствий',
	'Моя работа',
	'Структура портала',
]