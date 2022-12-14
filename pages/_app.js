import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;

/**
 * app.js를 이용하면
페이지 전황시 레이아웃을 유지 할수 있다. 
페이지 전환시 상태값을 유지할 수 있다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
글로벌 CSS를 이곳에 선언한다. 
 * 
 */
