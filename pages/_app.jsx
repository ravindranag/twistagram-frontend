import Head from 'next/head'
import Theme from '../components/theme/Theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

	const getLayout = Component.getLayout || (page => page)

	return (
		<Theme>
			<Head>
				<meta property='og:title' content='Twistagram' key='title' />
				<title>Twistagram</title>
				<link rel='shortcut icon' href='/logo/darklogo.png' />
			</Head>
			{getLayout(<Component {...pageProps} />)}
		</Theme>
	)
}

export default MyApp
