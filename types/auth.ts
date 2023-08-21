export interface AuthEmailProvider {
  email: string;
  password: string;
}

export interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  children: React.ReactNode;
  footerChildren: React.ReactNode;
}
