import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import {Space} from "./Components/Space";
import {Ship} from "./Components/Ship";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Space />
        <Ship />
    </>
);
