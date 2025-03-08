
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface BuyerFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const BuyerFields: React.FC<BuyerFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4 border-t pt-4">
      <FormField
        control={form.control}
        name="beforeSale"
        render={({ field }) => (
          <FormItem>
            <FormLabel>האם אתם לפני מכירה?</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right ${form.formState.errors.beforeSale ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="ספר לנו על המצב הנוכחי" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="soldProperty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>האם כבר מכרתם נכס?</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right ${form.formState.errors.soldProperty ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="ספר לנו על המכירה" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bankApproval"
        render={({ field }) => (
          <FormItem className="flex flex-row-reverse items-center justify-end gap-2">
            <FormLabel>יש לי אישור עקרוני מהבנק</FormLabel>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className={form.formState.errors.bankApproval ? 'border-red-500' : ''}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="seenProperties"
        render={({ field }) => (
          <FormItem>
            <FormLabel>האם ראיתם כבר נכסים?</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right ${form.formState.errors.seenProperties ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="ספר לנו על הנכסים שראיתם" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="propertyInterest"
        render={({ field }) => (
          <FormItem>
            <FormLabel>תאר את הנכס שאתה מחפש</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                className={`text-right min-h-[100px] ${form.formState.errors.propertyInterest ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="תאר את הנכס המבוקש" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};
