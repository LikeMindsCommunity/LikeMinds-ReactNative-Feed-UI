import { LMButtonProps } from "../../base/LMButton/types";

export interface LMCommentProps {
    comment?: LMCommentUI
    likeIconButton?: LMButtonProps
    likeTextButton?: LMButtonProps,
    onTapViewMore?: () => void
}