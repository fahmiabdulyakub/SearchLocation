export interface PropsType {
  value: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
}

export type SearchInputRefType =
  | {
      blur: () => void;
    }
  | undefined;
