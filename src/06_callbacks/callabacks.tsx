import React, {MouseEvent} from 'react';

const User = () => {

    const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        alert('user deleted')
    }

    return (
        <div>
            <span>Anton</span>
            <button onClick={deleteUser}>delete</button>
            <button>save</button>
        </div>
    );
};

export default User;