// data model for user object
interface LMUserUI {
    id: number;
    name: string;
    imageUrl: string;
    userUniqueId: string;
    sdkClientInfo: LMsdkClientInfoUIModel;
    uuid: string;
    isGuest: boolean;
    isDeleted: boolean;
    customTitle: string;
}