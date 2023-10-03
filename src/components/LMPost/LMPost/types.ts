import { LMPostFooterProps } from './../LMPostFooter/types';
import { LMPostHeaderProps } from './../LMPostHeader/types';
export interface LMPostProps {
  post: LMPostUI,
  headerProps?:LMPostHeaderProps,
  footerProps?:LMPostFooterProps
}
