import { LMButtonProps } from "../../base/LMButton/types";

export interface LMCommentProps {
    comment: LMCommentUI // comment data 
    likeIconButton?: LMButtonProps // custom like icon button
    likeTextButton?: LMButtonProps, // custom like text button
    onTapViewMore?: () => void, // callback function to be executed on click of view more replies
    commentMaxLines?: number, // maximun lines of comment to be shown
    menuIcon?: LMButtonProps // custom menu icon button
}