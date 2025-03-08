
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Alert } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/schemas/contactFormSchema";
import { BasicContactFields } from "@/components/contact/BasicContactFields";
import { BuyerFields } from "@/components/contact/BuyerFields";
import { TenantFields } from "@/components/contact/TenantFields";
import { LandlordFields } from "@/components/contact/LandlordFields";
import { SaleFields } from "@/components/contact/SaleFields";
import { SuccessDialog } from "@/components/contact/SuccessDialog";
import { submitForm } from "@/components/contact/formSubmit";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      currentLocation: "",
      interestType: undefined,
      beforeSale: "",
      soldProperty: "",
      bankApproval: false,
      seenProperties: "",
      propertyInterest: "",
      propertySpecs: "",
      moveInDate: "",
      estimatedBudget: "",
      propertyDetails: "",
      propertyType: "",
      availableDate: "",
      propertyDescription: "",
      askingPrice: "",
      propertyAddress: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitForm(data);
      console.log("FormSubmit Response:", response);

      // שמירת הנתונים שנשלחו
      setSubmittedData(data);
      
      // הצגת חלון הצלחה במרכז המסך
      setShowSuccessDialog(true);
      
      // הצגת הודעת הצלחה
      setShowSuccessAlert(true);
      
      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "נחזור אליך בהקדם האפשרי"
      });
      
      form.reset();
      
      // הסתרת ההודעה לאחר 5 שניות
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסו שוב מאוחר יותר או צרו קשר ישירות בטלפון"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-up">
          {showSuccessAlert && (
            <Alert 
              variant="success" 
              className="mb-4 text-emerald-600 border-emerald-500/50"
              icon={<CircleCheck className="text-emerald-500" size={16} strokeWidth={2} />}
            >
              <p className="text-sm">הטופס נשלח בהצלחה ניצור איתך קשר בהקדם</p>
            </Alert>
          )}
          
          <BasicContactFields form={form} />

          {form.watch("interestType") === "buy" && <BuyerFields form={form} />}
          
          {form.watch("interestType") === "tenant" && <TenantFields form={form} />}
          
          {form.watch("interestType") === "landlord" && <LandlordFields form={form} />}

          {form.watch("interestType") === "sale" && <SaleFields form={form} />}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "שולח..." : "שליחה"}
          </Button>
        </form>
      </Form>

      <SuccessDialog 
        open={showSuccessDialog} 
        onOpenChange={setShowSuccessDialog} 
        submittedData={submittedData}
      />
    </>
  );
};
