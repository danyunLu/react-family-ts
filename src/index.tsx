import * as React from "react";
import ReactDom,{  } from "react-dom";
import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
// import 'mock/mock';

import App from "./components/App/App"

/**
 * 初始化
 */
renderWithHotReload(App);

/**
 * 热更新
 */
if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
// class MainComponent extends React.Component<any, any> {
//   render() {
//     return (
//       <AppContainer>
//         <Provider store={store}>
//           <Router>
//             <App />
//           </Router>
//         </Provider>
//       </AppContainer>
//     );
//   }
// }

// render(<MainComponent />, document.getElementById("app"));