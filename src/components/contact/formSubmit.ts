import { ContactFormData } from "@/schemas/contactFormSchema";

// FormSubmit endpoint - send emails to lihenb84@gmail.com
const FORM_ENDPOINT = "https://formsubmit.co/lihenb84@gmail.com";

export const submitForm = async (data: ContactFormData): Promise<void> => {
  try {
    // יצירת טופס HTML רגיל
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_ENDPOINT;
    form.style.display = 'none';

    // הגדרות FormSubmit
    const configFields = {
      ...data,
      _subject: `פנייה חדשה מ-${data.name}`,
      _template: 'box',
      _captcha: 'false',
      _next: window.location.href,
      _autoresponse: "תודה על פנייתך! קיבלנו את ההודעה ונחזור אליך בהקדם.",
      _replyto: data.email || '',
    };

    // יצירת שדות הטופס
    Object.entries(configFields).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      }
    });

    // הוספת הטופס לדף ושליחה
    document.body.appendChild(form);
    form.submit();
    
    // מחיקת הטופס אחרי שנייה
    setTimeout(() => {
      document.body.removeChild(form);
    }, 1000);

  } catch (error) {
    console.error('Error in submitForm:', error);
    throw error;
  }
};
