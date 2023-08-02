import React from 'react';
import { interestData } from '../Data/interestData';

const Card = ({ title, content, Icon }) => (
    <div className="col-lg-4 col-md-6">
        <div className="card h-100">
            <div className="card-body">
                {Icon && <Icon className="icon" />}
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    </div>
);

const InterestCard = () => {

    return (
        <div className="container row g-4">
            {
                interestData.map((interest) => (
                    <Card
                        key={interest.id}
                        title={interest.title}
                        content={interest.content}
                        Icon={interest.icon}
                    />
                ))
            }
        </div>
    )
}

export default InterestCard;