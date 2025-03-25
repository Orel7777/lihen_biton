import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { contactFormSchema, ContactFormData } from "@/schemas/contactFormSchema";
import { BasicContactFields } from "@/components/contact/BasicContactFields";
import { BuyerFields } from "@/components/contact/BuyerFields";
import { TenantFields } from "@/components/contact/TenantFields";
import { LandlordFields } from "@/components/contact/LandlordFields";
import { SaleFields } from "@/components/contact/SaleFields";
import { SuccessDialog } from "@/components/contact/SuccessDialog";
import { SuccessAlert } from "@/components/contact/SuccessAlert";
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
      propertyAddress: "",
      rentAmount: "",
      propertyPrice: "",
      availableFrom: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
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

    try {
      await submitForm(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "שגיאה בשליחת הטופס",
        description: "הטופס נשלח אבל ייתכן שהייתה בעיה. אנא צרו קשר בטלפון אם לא נחזור אליכם בקרוב"
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
            <SuccessAlert
              isOpen={showSuccessAlert}
              onClose={() => setShowSuccessAlert(false)}
            />
          )}
          
          <BasicContactFields form={form} />

          {form.watch("interestType") === "buy" && <BuyerFields form={form} />}
          
          {form.watch("interestType") === "tenant" && <TenantFields form={form} />}
          
          {form.watch("interestType") === "landlord" && <LandlordFields form={form} />}

          {form.watch("interestType") === "sale" && <SaleFields form={form} />}

          <Button 
            type="submit" 
            className="w-full bg-white text-[#000000] border-2 border-[#000000] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300" 
            disabled={isSubmitting}
          >
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
