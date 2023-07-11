'use client';

import { toast } from '@/hooks/use-toast';
import { UserNameRequest, UsernameValidator } from '@/lib/validators/username';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/Card';
import { Input } from './ui/Input';
import { Label } from './ui/Label';

interface UserNameFormProps {
  user: Pick<User, 'id' | 'username'>;
}

const UserNameForm: FC<UserNameFormProps> = ({ user }) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserNameRequest>({
    resolver: zodResolver(UsernameValidator),
    defaultValues: {
      name: user?.username || '',
    },
  });

  const {mutate:updateUsername, isLoading} = useMutation({
    mutationFn: async ({ name }: UserNameRequest) => {
      const payload: UserNameRequest = {
        name,
      };

      const { data } = await axios.patch(`/api/username`, payload);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: 'Username already exists.',
            description: 'Please choose a different username.',
            variant: 'destructive',
          });
        }
      }

      toast({
        title: 'There was an error.',
        description: 'Could not create subreddit.',
        variant: 'destructive',
      });
    },

    onSuccess: () => {
      return toast({
        description: 'Your username has been updated.',
      });
      router.refresh();
    },
  });

  return (
    <form onSubmit={handleSubmit((e) => updateUsername(e))}>
      <Card>
        <CardHeader>
          <CardTitle>Your username</CardTitle>
          <CardDescription>
            Please enter a name you are comfortable with.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className='relative grid gap-1'>
            <div className='absolute top-0 left-0 w-8 h-10 grid place-items-center'>
              <span className='text-sm text-zinc-400'>u/</span>
            </div>
            <Label className='sr-only' htmlFor='name'>
              Name
            </Label>
            <Input
              id='name'
              className='w-[400px] pl-6'
              size={32}
              {...register('name')}
            />

            {errors?.name && (
              <p className='px-1 text-xs text-red-600'>{errors.name.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button isLoading={isLoading}>Change name</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default UserNameForm;
