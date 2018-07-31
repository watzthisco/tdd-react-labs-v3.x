import React from 'react';
import ReactDOM from 'react-dom';
import PageContainer from '../containers/PageContainer';


ReactDOM.hydrate(<PageContainer />,
    document.getElementById('app'));