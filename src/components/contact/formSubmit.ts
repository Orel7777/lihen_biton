import { ContactFormData } from "@/schemas/contactFormSchema";

// FormSubmit endpoint - send emails to lihenb84@gmail.com
const FORM_ENDPOINT = "https://formsubmit.co/lihenb84@gmail.com";

export const submitForm = async (data: ContactFormData): Promise<void> => {
  try {
    // Create a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_ENDPOINT;
    form.style.display = 'none';

    // הוספת שדות נסתרים לקונפיגורציה של FormSubmit
    const configFields = {
      _subject: `פנייה חדשה מ-${data.name}`,
      _template: 'box',
      _captcha: 'false',
      _next: window.location.href,
      _autoresponse: "תודה על פנייתך! קיבלנו את ההודעה ונחזור אליך בהקדם."
    };

    // הוספת שדות הטופס
    const formFields = {
      ...data,
      ...configFields
    };

    // יצירת שדות נסתרים עבור כל המידע
    Object.entries(formFields).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      }
    });

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

  } catch (error) {
    console.error('Error in submitForm:', error);
    throw error;
  }
};
