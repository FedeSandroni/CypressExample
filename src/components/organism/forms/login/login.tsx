'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from '@/components/atoms';
import { LOGIN_DEMO_DATA } from '@/mocks/login-demo-data';
import { Form } from '@/components/molecules';
import { useToast } from '@/hooks/use-toast';
import { SCHEMA } from './schema';

export const LoginForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SCHEMA),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof SCHEMA>) => {
    //change the logic here to compare with the real data, this is an example
    const { user, password } = LOGIN_DEMO_DATA;
    if (
      values.username.toLocaleLowerCase().trim() ===
        user.toLocaleLowerCase().trim() &&
      values.password === password
    ) {
      toast({
        variant: 'success',
        title: 'login example',
        description: 'Success, use routing to redirect!',
      });
    } else {
      toast({
        variant: 'error',
        title: 'login example',
        description: 'User or password are incorrect',
      });
    }
  };

  return (
    <div className="grid grid-cols-12 w-full h-full">
      <Card className="bg-slate-50 col-span-4 lg:col-span-3 2xl:col-span-2 rounded-none min-h-full">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900  ">
            LogIn
          </CardTitle>
          <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Please, enter your credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de usuario</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your username"
                        {...field}
                        id="web_user"
                      />
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
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Type your password"
                        {...field}
                        id="login-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                id="login-button"
              >
                Enter
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="grid col-span-8 lg:col-span-9 2xl:col-span-10 bg-slate-100 justify-items-center content-center">
        <Label>Here your business content</Label>
      </div>
    </div>
  );
};
