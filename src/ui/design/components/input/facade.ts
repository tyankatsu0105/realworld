type HTMLInputTypeAttribute = NonNullable<
  React.InputHTMLAttributes<HTMLInputElement>['type']
>;

type AvailableTypes = Extract<HTMLInputTypeAttribute, 'text'>;

export const availableTypes: Record<AvailableTypes, AvailableTypes> = {
  text: 'text',
};
