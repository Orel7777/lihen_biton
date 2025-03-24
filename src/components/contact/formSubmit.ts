import { ContactFormData } from "@/schemas/contactFormSchema";

// FormSubmit endpoint - send emails to orelbukris7777@gmail.com
export const FORM_ENDPOINT = "https://formsubmit.co/orelbukris7777@gmail.com";

export const submitForm = async (data: ContactFormData): Promise<void> => {
  try {
    // Create a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_ENDPOINT;
    form.style.display = 'none';

    // Add form fields
    const addField = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    // Add all fields
    addField('name', data.name);
    addField('phone', data.phone);
    addField('email', data.email);
    addField('currentLocation', data.currentLocation);
    addField('interestType', data.interestType === "sale" ? "מכירה" : 
                            data.interestType === "buy" ? "קנייה" :
                            data.interestType === "landlord" ? "משכיר" : "שוכר");

    if (data.interestType === "buy") {
      addField('beforeSale', data.beforeSale || "");
      addField('soldProperty', data.soldProperty || "");
      addField('bankApproval', data.bankApproval ? "כן" : "לא");
      addField('seenProperties', data.seenProperties || "");
      addField('propertyInterest', data.propertyInterest || "");
    }

    if (data.interestType === "tenant") {
      addField('propertySpecs', data.propertySpecs || "");
      addField('moveInDate', data.moveInDate || "");
      addField('estimatedBudget', data.estimatedBudget || "");
    }

    if (data.interestType === "landlord") {
      addField('propertyDetails', data.propertyDetails || "");
      addField('propertyType', data.propertyType || "");
      addField('availableDate', data.availableDate || "");
    }

    if (data.interestType === "sale") {
      addField('propertyDescription', data.propertyDescription || "");
      addField('askingPrice', data.askingPrice || "");
      addField('propertyAddress', data.propertyAddress || "");
    }

    // Add FormSubmit configuration
    addField('_subject', `פנייה חדשה מ-${data.name}`);
    addField('_template', 'table');
    addField('_captcha', 'false');
    addField('_next', window.location.href);
    addField('_autoresponse', 'תודה על פנייתך, נחזור אליך בהקדם!');

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

  } catch (error) {
    console.error('Error in submitForm:', error);
    throw error;
  }
};
