// data model for menu items of post
interface LMLikeItemUI {
    likes: LMLikeUI[];
    totalCount: number;
    users: {
        [key: string]: LMUserUI;
    };
}