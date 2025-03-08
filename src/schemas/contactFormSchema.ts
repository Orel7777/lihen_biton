
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^05\d{8}$/, "מספר טלפון לא תקין - חייב להתחיל ב-05 ולהכיל 10 ספרות"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  currentLocation: z.string().min(2, "יש להזין מיקום תקין"),
  interestType: z.enum(["sale", "buy", "landlord", "tenant"], { required_error: "יש לבחור סוג התעניינות" }),
  // Buy fields
  beforeSale: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  soldProperty: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  bankApproval: z.boolean().optional(),
  seenProperties: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  propertyInterest: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  // Tenant specific fields
  propertySpecs: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  moveInDate: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  estimatedBudget: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  // Landlord specific fields
  propertyDetails: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  propertyType: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  availableDate: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  // Sale specific fields
  propertyDescription: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  askingPrice: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  propertyAddress: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal(''))
}).superRefine((data, ctx) => {
  // Make all buyer-specific fields required if interestType is "buy"
  if (data.interestType === "buy") {
    if (!data.beforeSale || data.beforeSale.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["beforeSale"]
      });
    }
    
    if (!data.soldProperty || data.soldProperty.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["soldProperty"]
      });
    }
    
    if (!data.seenProperties || data.seenProperties.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["seenProperties"]
      });
    }
    
    if (!data.propertyInterest || data.propertyInterest.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertyInterest"]
      });
    }
  }
  
  // Make all tenant-specific fields required if interestType is "tenant"
  if (data.interestType === "tenant") {
    if (!data.propertySpecs || data.propertySpecs.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertySpecs"]
      });
    }
    
    if (!data.moveInDate || data.moveInDate.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["moveInDate"]
      });
    }
    
    if (!data.estimatedBudget || data.estimatedBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["estimatedBudget"]
      });
    }
  }
  
  // Make all landlord-specific fields required if interestType is "landlord"
  if (data.interestType === "landlord") {
    if (!data.propertyDetails || data.propertyDetails.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertyDetails"]
      });
    }
    
    if (!data.propertyType || data.propertyType.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertyType"]
      });
    }
    
    if (!data.availableDate || data.availableDate.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["availableDate"]
      });
    }
  }

  // Make all sale-specific fields required if interestType is "sale"
  if (data.interestType === "sale") {
    if (!data.propertyDescription || data.propertyDescription.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertyDescription"]
      });
    }
    
    if (!data.askingPrice || data.askingPrice.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["askingPrice"]
      });
    }
    
    if (!data.propertyAddress || data.propertyAddress.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "יש למלא שדה זה",
        path: ["propertyAddress"]
      });
    }
  }
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
