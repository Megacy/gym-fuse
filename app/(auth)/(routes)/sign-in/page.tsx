"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
  };

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="text-center mb-4">Gym FUSE</CardTitle>
        <Button variant="outline">Sign in with Google</Button>
        <div className="flex items-center my-4 before:flex-1 before:border-t  before:mt-0.5 after:flex-1 after:border-t after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0 dark:text-white">OR</p>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <div className="items-top flex space-x-2">
                <Checkbox id="rememberMe" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember this device
                  </label>
                </div>
              </div>
              <div className="items-top flex space-x-2">
                <label className="text-sm font-medium leading-none">Forgot Password?</label>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-center">
          Don't have an account? <span>Sign Up</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
