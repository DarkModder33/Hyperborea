/** Pure validation for the multi-step quote wizard */

export const SERVICE_IDS = [
  'Device / software repair',
  'Website system',
  'Care retainer',
  'Custom automation',
  'Other',
  'Intelligence waitlist'
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export type QuoteFormData = {
  service: string;
  message: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
};

export type FieldErrors = Partial<Record<keyof QuoteFormData, string>>;

const EMAIL_RE = /^[^\\]\s@]+@[^\\s@]+\.[^\\s@]+$/;
// Allow common formats: (609) 412-8878, 609-412-8878, +1 609..., digits only
const PHONE_RE = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,18}$/;

export function isAllowedService(service: string): service is ServiceId {
  return (SERVICE_IDS as readonly string[]).includes(service);
}

/** Step 0 — service required and on allowlist */
export function validateService(data: QuoteFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.service.trim()) {
    errors.service = 'Choose a service to continue.';
  } else if (!isAllowedService(data.service)) {
    errors.service = 'Select a valid service from the list.';
  }
  return errors;
}

/** Step 1 — meaningful description; budget optional */
export function validateDetails(data: QuoteFormData): FieldErrors {
  const errors: FieldErrors = {};
  const msg = data.message.trim();
  if (msg.length < 10) {
    errors.message = 'Add a short description (at least ~10 characters).';
  } else if (msg.length > 4000) {
    errors.message = 'Please keep the description under 4000 characters.';
  }
  return errors;
}

/** Step 2 — name + email required; phone optional but checked if present */
export function validateContact(data: QuoteFormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();

  if (name.length < 2) {
    errors.name = 'Enter your name.';
  } else if (name.length > 120) {
    errors.name = 'Name is too long.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address.';
  } else if (email.length > 200) {
    errors.email = 'Email is too long.';
  }

  if (phone) {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15 || !PHONE_RE.test(phone)) {
      errors.phone = 'Enter a valid phone number or leave blank.';
    }
  }

  return errors;
}

/** Step 3 — everything required for submit */
export function validateReview(data: QuoteFormData): FieldErrors {
  return {
    ...validateService(data),
    ...validateDetails(data),
    ...validateContact(data)
  };
}

export function validateStep(step: number, data: QuoteFormData): FieldErrors {
  switch (step) {
    case 0:
      return validateService(data);
    case 1:
      return validateDetails(data);
    case 2:
      return validateContact(data);
    case 3:
      return validateReview(data);
    default:
      return {};
  }
}

/** First error message for banner (stable field order) */
export function firstErrorMessage(errors: FieldErrors): string {
  const order: (keyof QuoteFormData)[] = ['service', 'message', 'budget', 'name', 'email', 'phone'];
  for (const key of order) {
    if (errors[key]) return errors[key]!;
  }
  return '';
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
