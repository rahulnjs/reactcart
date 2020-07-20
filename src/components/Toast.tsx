import React from 'react';
import { AppState } from '../types';

import '../styles/common.scss';

import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';



const mapStateToProps = (state: AppState) => {
    return {
        show: state.toast.show,
        text: state.toast.text
    };
};


let connector = connect(mapStateToProps, {});

type Props = ConnectedProps<typeof connector>;


const Toast: React.FC<Props> = ({show, text}) => {
    return (
        <>
        { show &&
            <div className="toast">
                <span>{text}</span>
            </div>
        }
        </>
    );
}


export default compose(connector)(Toast);