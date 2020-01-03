import React from 'react';

const Left = props => {
    
    // idk, i'm tired
    const listItems = []

    let info = {
        dropdowns: [],
        placeholder: ""
    }
    if (props.type === "Athlete") {

    } else if (props.type === "Parent") {

    } else if (props.type === "Admin") {

    } else {

    }

    return (
        <div className="left">
            <div className="dropdowns">

            </div>
            {
                listItems.length > 0 ? (
                    <ul>
                        {listItems.map(i => {
                            return <li key={i+Date.now()}>{i}</li>
                        })}
                    </ul>
                ) : <div>placeholder</div>
            }
        </div>
    );
};

export default Left;