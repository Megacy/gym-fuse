import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthCardProps } from "@/types";

const AuthCard = ({ title, description, children, footerChildren, ...props }: AuthCardProps) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footerChildren}</CardFooter>
    </Card>
  );
};

export default AuthCard;
