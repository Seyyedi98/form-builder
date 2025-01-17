import { newPassword } from "@/actions/auth/new-password";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "آدرس ایمیل نامعتبر است" }),
  password: z.string().min(1, { message: "رمز عبور نامعتبر" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "آدرس ایمیل نامعتبر است" }),
  password: z
    .string()
    .min(6, { message: "رمز عبور باید بیش از ۶ کاراکتر باشد" }),
  name: z.string().min(1, {
    message: "",
  }),
});

export const OtpLoginSchema = z.object({
  phoneNumber: z.string().length(11),
  password: z.string().min(1, { message: "رمز عبور نامعتبر" }),
  code: z.optional(z.string()),
});

export const OtpRegisterSchema = z.object({
  phoneNumber: z.string().length(11),
  password: z
    .string()
    .min(6, { message: "رمز عبور باید بیش از ۶ کاراکتر باشد" }),
  name: z.string().min(1, {
    message: "",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "آدرس ایمیل نامعتبر است" }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "رمز عبور باید بیش از ۶ کاراکتر باشد" }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(
      z.string().min(3, { message: "نام کاربری باید حداثل ۳ حرف باشد" })
    ),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) return false;
      return true;
    },
    { message: "New password is requider!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) return false;
      return true;
    },
    { message: "Password is requider!", path: ["password"] }
  );

///////////////////////////////////////////////////////////
///////////////////////   FORM    /////////////////////////
///////////////////////////////////////////////////////////
export const FormSchema = z.object({
  name: z.string().min(3, { message: "نام فرم باید بیش از ۳ کاراکتر باشد" }),
  description: z.string().optional(),
});

// Text Field properties schema
export const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

export const TextAreaFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  rows: z.number().min(1).max(10),
});

export const TitleFieldPropertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export const ParagraphFieldPropertiesSchema = z.object({
  text: z.string().min(1),
});

export const SpacerFieldPropertiesSchema = z.object({
  height: z.number().min(5).max(200),
});

export const DateFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});

export const SelectFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  options: z.array(z.string()).default([]),
});

export const checkboxFieldPropertiesSchema = z.object({
  label: z.string().max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});
