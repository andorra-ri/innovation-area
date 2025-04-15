import { ReactElement, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as FormSchema from 'yup'

export type FormProps<T> = {
  initialValues?: T,
  validationSchema?: FormSchema.Schema<T>,
  handleSubmit: (data: T) => void
  children?: ReactNode
}

export const Form: <T>(props: FormProps<T>) => ReactElement = ({
  validationSchema,
  initialValues,
  handleSubmit,
  children,
}) => {
  const methods = useForm<any>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema as FormSchema.AnyObjectSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  })
  return(
    <FormProvider {...methods}> 
      <form  onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

