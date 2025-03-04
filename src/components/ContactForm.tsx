import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^05\d{8}$/, "מספר טלפון לא תקין - חייב להתחיל ב-05 ולהכיל 10 ספרות"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  currentLocation: z.string().min(2, "יש להזין מיקום תקין"),
  interestType: z.enum(["sale", "buy", "landlord", "tenant"], { required_error: "יש לבחור סוג התעניינות" }),
  beforeSale: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  soldProperty: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  bankApproval: z.boolean().optional(),
  seenProperties: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal('')),
  propertyInterest: z.string().min(1, "יש למלא שדה זה").optional().or(z.literal(''))
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
});

type FormData = z.infer<typeof formSchema>;

// FormSubmit endpoint - send emails to lihenb84@gmail.com
const FORM_ENDPOINT = "https://formsubmit.co/lihenb84@gmail.com";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
      propertyInterest: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Prepare data for FormSubmit
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('currentLocation', data.currentLocation);
      formData.append('interestType', data.interestType === "sale" ? "מכירה" : 
                     data.interestType === "buy" ? "קנייה" :
                     data.interestType === "landlord" ? "משכיר" : "שוכר");
      
      if (data.interestType === "buy") {
        formData.append('beforeSale', data.beforeSale || "");
        formData.append('soldProperty', data.soldProperty || "");
        formData.append('bankApproval', data.bankApproval ? "כן" : "לא");
        formData.append('seenProperties', data.seenProperties || "");
        formData.append('propertyInterest', data.propertyInterest || "");
      }
      
      // Add hidden fields for FormSubmit configuration
      formData.append('_subject', `פנייה חדשה מ-${data.name}`);
      formData.append('_template', 'table');  // Use table template for organized data
      formData.append('_captcha', 'false');   // Disable captcha
      formData.append('_next', window.location.href); // Return to same page after submission
      
      console.log("Sending form data to FormSubmit:", Object.fromEntries(formData));

      // Send form using FormSubmit service
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

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

            {form.watch("interestType") === "buy" && (
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
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "שולח..." : "שליחה"}
          </Button>
        </form>
      </Form>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md text-right">
          <DialogHeader>
            <DialogTitle className="text-emerald-600 flex items-center justify-end gap-2">
              <span>הפנייה נשלחה בהצלחה</span>
              <CircleCheck className="text-emerald-500" size={24} />
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <p className="text-sm text-gray-700">תודה שפנית אלינו, נחזור אליך בהקדם האפשרי!</p>
            <p className="text-sm text-gray-700">הודעה נשלחה למייל: lihenb84@gmail.com</p>
            
            {submittedData && (
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100 space-y-2">
                <p className="text-sm font-semibold">פרטי הפנייה:</p>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">שם:</span> {submittedData.name}</p>
                  <p><span className="font-medium">טלפון:</span> {submittedData.phone}</p>
                  <p><span className="font-medium">אימייל:</span> {submittedData.email}</p>
                  <p><span className="font-medium">מקום מגורים:</span> {submittedData.currentLocation}</p>
                  <p>
                    <span className="font-medium">מתעניין ב:</span> 
                    {submittedData.interestType === "sale" ? "מכירה" : 
                     submittedData.interestType === "buy" ? "קנייה" :
                     submittedData.interestType === "landlord" ? "משכיר" : "שוכר"}
                  </p>
                  
                  {submittedData.interestType === "buy" && (
                    <>
                      <p><span className="font-medium">לפני מכירה:</span> {submittedData.beforeSale}</p>
                      <p><span className="font-medium">מכרתם נכס:</span> {submittedData.soldProperty}</p>
                      <p><span className="font-medium">אישור עקרוני מהבנק:</span> {submittedData.bankApproval ? "כן" : "לא"}</p>
                      <p><span className="font-medium">ראיתם נכסים:</span> {submittedData.seenProperties}</p>
                      <p><span className="font-medium">תיאור הנכס המבוקש:</span> {submittedData.propertyInterest}</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <Button onClick={() => setShowSuccessDialog(false)} className="w-full">
            סגור
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
