import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface LandlordFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const LandlordFields: React.FC<LandlordFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4 border-t pt-4">
      <FormField
        control={form.control}
        name="propertyDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מפרט הנכס להשכרה</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                className={`text-right min-h-[100px] bg-white text-[#000000] ${form.formState.errors.propertyDetails ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="פרט את הנכס - מספר חדרים, קומה, מעלית, חניה וכו׳" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="propertyType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>סוג הנכס</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.propertyType ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="דירה, פנטהאוז, בית פרטי, וכו׳" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="availableDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מועד כניסה אפשרי</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.availableDate ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="מיידי, 1/5/2024, גמיש" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="rentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>סכום שכירות מבוקש</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.rentAmount ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="סכום שכירות מבוקש" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="availableFrom"
        render={({ field }) => (
          <FormItem>
            <FormLabel>זמין מ-</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.availableFrom ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="זמין מ-" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};
