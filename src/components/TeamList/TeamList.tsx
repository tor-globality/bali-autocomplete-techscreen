import React from 'react';
import { User } from 'src/types';

interface TeamListProps {
    users: User[];
}

const TeamList: React.VFC<TeamListProps> = ({ users }) => <div></div>;

export default TeamList;
