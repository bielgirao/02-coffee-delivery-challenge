import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import {DefaultLayout} from "./layouts/DefaultLayout";
import { ThankYou } from './pages/ThankYou'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Route>
        </Routes>
    );
}
