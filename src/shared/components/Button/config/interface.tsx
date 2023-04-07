export interface ButtonProps {
  onClick: () => void;
  children: string;
  type?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary';
}
