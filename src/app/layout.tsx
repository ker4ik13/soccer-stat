import './styles';
import { renderSeo } from '@/shared/renderSeo';
import Nav from '@/widgets/Header/Nav';

export const metadata = renderSeo({
	title: 'Заголовок',
	description: 'Описание',
	keywords: 'Футбольная статистика',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
