import User from './User';

export default interface Images {
    url: string,
    creDate: string,
    uploader: User['_id']
}