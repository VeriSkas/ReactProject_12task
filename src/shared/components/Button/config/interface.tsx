export interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary';
}
