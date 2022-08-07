import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import { DefaultLayout } from './layouts';

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRouters.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
