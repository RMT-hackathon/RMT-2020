import React from 'react';

const Overview = props => {
    
    console.log("overview props", props);
    let botStats = []
    if (props.type === "Athlete") {
        botStats = [
            {
                icon: "",
                num: 0,
                label: "Messages"
            },
            {
                icon: "",
                num: 0,
                label: "Coaches"
            },
            {
                icon: "",
                num: 0,
                label: "Teams"
            }
        ]
    } else if (props.type === "Parent") {
        botStats = [
            {
                icon: "",
                num: 0,
                label: "Messages"
            },
            {
                icon: "",
                num: 0,
                label: "Coaches"
            },
            {
                icon: "",
                num: 0,
                label: "Teams"
            }
        ]
    } else if (props.type === "Admin") {
        botStats = [
            {
                icon: "",
                num: 0,
                label: "Messages"
            },
            {
                icon: "",
                num: 0,
                label: "Coaches"
            },
            {
                icon: "",
                num: 0,
                label: "Teams"
            }
        ]
    } else { 
        botStats = [
            {
                icon: "",
                num: 0,
                label: "Messages"
            },
            {
                icon: "",
                num: 0,
                label: "Coaches"
            },
            {
                icon: "",
                num: 0,
                label: "Teams"
            }
        ]
    }

    return (
        <div className="overview">
            <div className="top">
                <div className="text">
                    <h1>Name here</h1>
                    <h3>Organization</h3>
                </div>
                <div>icon here</div>
            </div>
            <div className="bot">
                {botStats.map(b => {
                    return (
                        <div className="bot-stat" key={b.label}>
                            <div className="b-stat-icon">{b.icon}</div>
                            <h4 className="b-stat-num">{b.num}</h4>
                            <p className="b-stat-label">{b.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Overview;