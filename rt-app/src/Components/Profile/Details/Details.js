import React from 'react';

const Details = props => {
    
    const details = [
        {
            label: "Bio",
            content: ""
        },
        {
            label: "Email",
            content: ""
        },
        {
            label: "Location",
            content: ""
        },
        {
            label: "Timezone",
            content: ""
        },
        {
            label: "Phone",
            content: ""
        },
        {
            label: "Skype",
            content: ""
        },
        {
            label: "Twitter",
            content: ""
        },
    ]
    
    return (
        <div className="details">
            <h4>Profile Details</h4>
            <div className="details-list">
            {
                details.map(d => {
                    return (
                        <div className={`detail ${d.label}`} key={d.label}>
                            <p className="label">{d.label}</p>
                            <p className="content">{d.content}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Details;