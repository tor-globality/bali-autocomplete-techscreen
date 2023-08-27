import React from 'react';
import { User } from '../../types';

interface TeamListProps {
    users: User[];
}

function TeamList({ users }: TeamListProps) {
    return <div>{/* TODO display list of users */}</div>;
}

export default TeamList;
