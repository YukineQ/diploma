import { z } from "zod";

import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// TODO: remove
export const loginInputSchema = z.object({
    email: z.string().min(1, 'Required').email('Invalid email'),
    password: z.string().min(5, 'Required'),
});

export const LoginWithEmailForm = () => {
    return (
        <>
            <Form onSubmit={() => { }} schema={loginInputSchema}>
                {({ register, formState }) => (
                    <div className="space-y-2">
                        <Input
                            type="email"
                            label="Email Adress"
                            error={formState.errors['email']}
                            registration={register('email')}
                            className="h-11"
                        />
                        <Input
                            type="password"
                            label="Password"
                            error={formState.errors['password']}
                            registration={register('password')}
                            className="h-11"
                        />
                        <div>
                            <Button
                                type="submit"
                                className="w-full mt-6"
                                size='lg'
                            >
                                Log in
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </>
    )
}