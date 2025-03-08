
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface BasicContactFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export const BasicContactFields: React.FC<BasicContactFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>שם מלא</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right ${form.formState.errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="שם מלא" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>טלפון נייד</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="tel" 
                className={`text-right ${form.formState.errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="טלפון נייד" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>אימייל</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="email" 
                className={`text-right ${form.formState.errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="אימייל" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="currentLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מקום מגורים עדכני</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className={`text-right ${form.formState.errors.currentLocation ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                placeholder="מקום מגורים עדכני" 
              />
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="interestType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>מתעניין ב:</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className={`flex justify-end gap-4 mx-[42px] my-[6px] ${form.formState.errors.interestType ? 'text-red-500' : ''}`}
              >
                <div className="flex items-center gap-1">
                  <Label htmlFor="sale">מכירה</Label>
                  <RadioGroupItem value="sale" id="sale" />
                </div>
                <div className="flex items-center gap-1">
                  <Label htmlFor="buy">קנייה</Label>
                  <RadioGroupItem value="buy" id="buy" />
                </div>
                <div className="flex items-center gap-1">
                  <Label htmlFor="landlord">משכיר</Label>
                  <RadioGroupItem value="landlord" id="landlord" />
                </div>
                <div className="flex items-center gap-1">
                  <Label htmlFor="tenant">שוכר</Label>
                  <RadioGroupItem value="tenant" id="tenant" />
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-right" />
          </FormItem>
        )}
      />
    </div>
  );
};
