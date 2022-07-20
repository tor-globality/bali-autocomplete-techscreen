export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    title: string;
    status: 'ACTIVE' | 'DEACTIVATED' | 'REINVITED';
    thumbnailUrl: string;
    dateCreated: string;
};
