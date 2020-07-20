import React from 'react';


interface Prop {
    text: string;
}


export const EmptyBanner: React.FC<Prop> = ({text}) => {
    return (
        <div className="empty-banner">
            <div>
                <img src="/empty-banner.png" alt={text}/>
            </div>
            <div className="text">{text}</div>
        </div>
    )
} 