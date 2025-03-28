import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface TenantFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const TenantFields: React.FC<TenantFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4 border-t pt-4">
      <FormField
        control={form.control}
        name="propertySpecs"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מפרט הנכס המבוקש:</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                className={`text-right min-h-[100px] bg-white text-[#000000] ${form.formState.errors.propertySpecs ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="פרט את דרישותיך - מספר חדרים, מיקום מועדף, קומה, מעלית וכו׳" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="moveInDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>תאריך כניסה מבוקש:</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="date"
                className={`text-right bg-white text-[#000000] ${form.formState.errors.moveInDate ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="מתי תרצה להיכנס לנכס?" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="estimatedBudget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>תקציב משוער:</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="number"
                min="0"
                className={`text-right bg-white text-[#000000] ${form.formState.errors.estimatedBudget ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="מה התקציב שלך?" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};
