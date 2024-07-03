
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signinValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"



const SignInForm = () => {

const { toast } = useToast()

const {mutateAsync:signInAccount, isPending} = useSignInAccount();

const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

const navigate = useNavigate();

const form = useForm<z.infer<typeof signinValidation>>({
    resolver: zodResolver(signinValidation),
    defaultValues: {
      email:"",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof signinValidation>) {
  
  try {


   const session = await signInAccount({
    email:values.email,
    password:values.password
   });

   if (!session) {
    return toast({
      variant: "destructive",
      className: "bg-black",
      title: "Sign in Failed!!!",
    });
   }
   const isLoggedIn = await checkAuthUser();

   if (isLoggedIn) {
    form.reset();
    navigate('/')
   }else{
    return toast({
      variant: "destructive",
      className: "bg-black",
      title: "Sign up Failed!!!",
    });
   }

    
  } catch (error) {
    return toast({
      variant: "destructive",
      className: "bg-black",
      title: "Sign up Failed!!!",
    });
  } 
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Log in to your Account</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
       
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
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
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">{
         isPending && isUserLoading ? (
            <div className="flex-center gap-2"><Loader/> Loading...</div>
          ): (<div className="flex-center gap-2">Sign In</div>)}</Button>
        <p className="text-small-regular text-light-2 text-center mt-2">
            Don't Have an Account??
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-2">
              Sign Up
            </Link>
          </p>
      </form>
      </div>
    </Form>
  )
};

export default SignInForm;