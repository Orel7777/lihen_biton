
import { ContactFormData } from "@/schemas/contactFormSchema";

// FormSubmit endpoint - send emails to lihenb84@gmail.com
export const FORM_ENDPOINT = "https://formsubmit.co/lihenb84@gmail.com";

export const submitForm = async (data: ContactFormData): Promise<Response> => {
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
  
  if (data.interestType === "tenant") {
    formData.append('propertySpecs', data.propertySpecs || "");
    formData.append('moveInDate', data.moveInDate || "");
    formData.append('estimatedBudget', data.estimatedBudget || "");
  }
  
  if (data.interestType === "landlord") {
    formData.append('propertyDetails', data.propertyDetails || "");
    formData.append('propertyType', data.propertyType || "");
    formData.append('availableDate', data.availableDate || "");
  }
  
  if (data.interestType === "sale") {
    formData.append('propertyDescription', data.propertyDescription || "");
    formData.append('askingPrice', data.askingPrice || "");
    formData.append('propertyAddress', data.propertyAddress || "");
  }
  
  // Add hidden fields for FormSubmit configuration
  formData.append('_subject', `פנייה חדשה מ-${data.name}`);
  formData.append('_template', 'table');  // Use table template for organized data
  formData.append('_captcha', 'false');   // Disable captcha
  formData.append('_next', window.location.href); // Return to same page after submission
  
  console.log("Sending form data to FormSubmit:", Object.fromEntries(formData));

  // Send form using FormSubmit service
  return fetch(FORM_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
};
