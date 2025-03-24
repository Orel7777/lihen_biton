import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface SaleFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const SaleFields: React.FC<SaleFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4 border-t pt-4">
      <FormField
        control={form.control}
        name="propertyDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מפרט הנכס</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                className={`text-right min-h-[100px] bg-white text-[#000000] ${form.formState.errors.propertyDescription ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="תאר את מפרט הנכס למכירה (חדרים, שטח, קומה וכו')" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="askingPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>האם יש לך הערכת שווי הנכס? או שאתה לפני התהליך?</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.askingPrice ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="propertyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>כתובת הנכס</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.propertyAddress ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="כתובת מלאה" 
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
        name="propertyPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מחיר מכירה מבוקש</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right bg-white text-[#000000] ${form.formState.errors.propertyPrice ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="מחיר מכירה מבוקש" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};
