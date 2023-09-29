// data model for user object
interface LMUserUI {
    id: number;
    name: string;
    imageUrl: string;
    userUniqueId: string;
    sdkClientInfo: {
      community: number;
      user: number;
      userUniqueId: string;
      uuid: string;
    };
    uuid: string;
    isGuest: boolean;
    isDeleted: boolean;
    customTitle: string;
    questionAnswers: null; // Define a specific type if needed
}