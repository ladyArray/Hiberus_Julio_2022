import { create } from 'react-test-renderer';
import App from './App';

test('probar boton', () => {
    let dom = create(<App />);
    expect(dom.toJSON()).toMatchSnapshot();
});
