import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, lightTheme, darkTheme } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';
import Showcase from './components/Showcase/Showcase';
import Experience from './components/Experience/Experience';
import Posts from './components/Posts/Posts';
import PostArticle from './components/Posts/PostArticle';
import Recommendations from './components/Recommendations/Recommendations';
import Navigation from './components/Navigation/Navigation';
import { useGlobalContext } from './Context/Context';
import Footer from './components/Footer/Footer';
import { useHashRoute, matchPostSlug } from './hooks/useHashRoute';
import { postData } from './data/postData';

function App() {
  const { theme } = useGlobalContext();
  const lightMode = { ...lightTheme };
  const darkMode = { ...darkTheme };

  const currentTheme = {
    ...base,
    ...(theme === 'light' ? lightMode : darkMode),
  };

  const route = useHashRoute();
  const slug = matchPostSlug(route);
  const articleIndex = slug
    ? postData.findIndex(post => post.slug === slug)
    : -1;

  // The section the browser wants to reach only exists after the main view
  // renders, so restore the scroll position ourselves when leaving an article.
  useEffect(() => {
    if (articleIndex >= 0) {
      window.scrollTo(0, 0);
      return;
    }
    const { hash } = window.location;
    if (hash && !hash.startsWith('#/')) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [articleIndex]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navigation />
      <Sidebar />
      {articleIndex >= 0 ? (
        <main>
          <PostArticle post={postData[articleIndex]} index={articleIndex} />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Showcase />
          <Experience />
          <Posts />
          <Recommendations />
        </main>
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
