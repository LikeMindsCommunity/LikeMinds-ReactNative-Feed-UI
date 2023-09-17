import {TextStyle} from 'react-native';

export interface LMInputTextProps {
  onType?: (value: string) => void; // this represents a callback function that is called when the text input's text changes
  inputText?: string; // this represents the text to be displayed on text input
  inputTextStyle?: TextStyle; // this represents the style of the input text style
  placeholderText?: string; // this represents the text to be displayed before any text is entered
  placeholderTextColor?: string; // this represents the color of the placeholder text
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'; // this represents the auto capitalization behaviour of the input text
  // this represents the type of keyboard to be opened
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
    // for ios only
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    // for android only
    | 'visible-password';
  multilineField?: boolean; // this represents if the input text should be multi lined or not
  secureText?: boolean; // this represents if the text entered should be hidden or visible for sensitive text like passwords
  disabled?: boolean; // this represents if the text input is editable or not
}
