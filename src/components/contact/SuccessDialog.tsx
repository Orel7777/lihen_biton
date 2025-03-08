
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { ContactFormData } from "@/schemas/contactFormSchema";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submittedData: ContactFormData | null;
}

export const SuccessDialog: React.FC<SuccessDialogProps> = ({ 
  open, 
  onOpenChange, 
  submittedData 
}) => {
  if (!submittedData) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              
              {submittedData.interestType === "tenant" && (
                <>
                  <p><span className="font-medium">מפרט הנכס המבוקש:</span> {submittedData.propertySpecs}</p>
                  <p><span className="font-medium">תאריך כניסה מבוקש:</span> {submittedData.moveInDate}</p>
                  <p><span className="font-medium">תקציב משוער:</span> {submittedData.estimatedBudget}</p>
                </>
              )}
              
              {submittedData.interestType === "landlord" && (
                <>
                  <p><span className="font-medium">מפרט הנכס להשכרה:</span> {submittedData.propertyDetails}</p>
                  <p><span className="font-medium">סוג הנכס:</span> {submittedData.propertyType}</p>
                  <p><span className="font-medium">מועד כניסה אפשרי:</span> {submittedData.availableDate}</p>
                </>
              )}

              {submittedData.interestType === "sale" && (
                <>
                  <p><span className="font-medium">מפרט הנכס למכירה:</span> {submittedData.propertyDescription}</p>
                  <p><span className="font-medium">מחיר מבוקש:</span> {submittedData.askingPrice}</p>
                  <p><span className="font-medium">כתובת הנכס:</span> {submittedData.propertyAddress}</p>
                </>
              )}
            </div>
          </div>
        </div>
        
        <Button onClick={() => onOpenChange(false)} className="w-full">
          סגור
        </Button>
      </DialogContent>
    </Dialog>
  );
};
