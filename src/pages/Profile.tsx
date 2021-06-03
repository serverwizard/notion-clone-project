import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

// mock data
const profileData: any = {
    serverwizard: {
        name: '홍종완',
        description:
            'Developer. 사람냄새 나는 개발자'
    }
};

interface MatchParams {
    username: string;
}

const Profile: React.FC<RouteComponentProps<MatchParams>> = ({match}) => {
    const {username} = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;