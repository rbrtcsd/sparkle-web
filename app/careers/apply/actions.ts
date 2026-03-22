'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type ApplicationFormState = {
  success: boolean;
  error: string | null;
  fields?: Record<string, string>;
};

export async function submitJobApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  // Preserve all text/select fields so form isn't cleared on error
  const fields: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === 'string') fields[key] = value;
  });

  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const phone = formData.get('phone') as string;

  // Basic validation
  if (!first_name || !last_name || !phone) {
    return { success: false, error: 'First name, last name, and phone are required.', fields };
  }

  const position = formData.get('position') as string;
  if (!position) {
    return { success: false, error: 'Please select a position.', fields };
  }

  const signature = formData.get('signature') as string;
  if (!signature) {
    return { success: false, error: 'Please type your full name as your signature to submit the application.', fields };
  }

  const acknowledged = formData.get('physical_acknowledgment');
  if (!acknowledged) {
    return { success: false, error: 'Please acknowledge the physical requirements to continue.', fields };
  }

  try {
    const supabase = getServiceSupabase();

    const gv = (key: string) => (formData.get(key) as string || '').trim() || null;
    const gb = (key: string) => formData.get(key) === 'yes' || formData.get(key) === 'on';

    // Parse days available checkboxes
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const availability_days = daysOfWeek.filter((day) => formData.get(`day_${day}`) === 'on');

    // Build flat record matching the database columns
    const record: Record<string, unknown> = {
      first_name,
      middle_name: gv('middle_name'),
      last_name,
      other_names_used: gv('other_names'),
      date_of_birth: gv('date_of_birth'),
      address: gv('address'),
      phone,
      email: gv('email'),
      position,
      employment_type: gv('employment_type'),
      start_date_available: gv('date_available'),
      desired_salary: gv('desired_pay'),
      availability_days,
      how_did_you_hear: gv('heard_about_us'),
      work_authorized: gb('authorized_to_work'),
      requires_sponsorship: gb('requires_sponsorship'),
      prev_employed_here: gb('previously_worked'),
      prev_employed_when: gv('previously_worked_when'),
      dl_valid: gb('has_drivers_license'),
      dl_state: gv('license_state'),
      dl_number: gv('license_number'),
      dl_expiry: gv('license_expiration'),
      dl_violations: gb('moving_violations'),
      dl_violations_explanation: gv('moving_violations_explain'),

      // Employment history (flat columns: emp1_, emp2_, emp3_)
      emp1_employer: gv('employer_1_name'),
      emp1_title: gv('employer_1_title'),
      emp1_address: gv('employer_1_address'),
      emp1_supervisor: gv('employer_1_supervisor'),
      emp1_start: gv('employer_1_start'),
      emp1_end: gv('employer_1_end'),
      emp1_reason: gv('employer_1_reason'),
      emp1_contact_ok: gb('employer_1_contact'),
      emp2_employer: gv('employer_2_name'),
      emp2_title: gv('employer_2_title'),
      emp2_address: gv('employer_2_address'),
      emp2_supervisor: gv('employer_2_supervisor'),
      emp2_start: gv('employer_2_start'),
      emp2_end: gv('employer_2_end'),
      emp2_reason: gv('employer_2_reason'),
      emp2_contact_ok: gb('employer_2_contact'),
      emp3_employer: gv('employer_3_name'),
      emp3_title: gv('employer_3_title'),
      emp3_address: gv('employer_3_address'),
      emp3_supervisor: gv('employer_3_supervisor'),
      emp3_start: gv('employer_3_start'),
      emp3_end: gv('employer_3_end'),
      emp3_reason: gv('employer_3_reason'),
      emp3_contact_ok: gb('employer_3_contact'),

      // Education (flat columns)
      edu_hs_name: gv('hs_name'),
      edu_hs_city_state: gv('hs_city_state'),
      edu_hs_from: gv('hs_from'),
      edu_hs_to: gv('hs_to'),
      edu_hs_graduated: gb('hs_graduated'),
      edu_college_name: gv('college_name'),
      edu_college_city_state: gv('college_city_state'),
      edu_college_from: gv('college_from'),
      edu_college_to: gv('college_to'),
      edu_college_degree: gv('college_degree'),
      edu_college_major: gv('college_major'),
      edu_other_name: gv('other_school_name'),
      edu_other_city_state: gv('other_school_city_state'),
      edu_other_from: gv('other_school_from'),
      edu_other_to: gv('other_school_to'),
      edu_other_degree: gv('other_school_certificate'),

      // References (flat columns)
      ref1_name: gv('ref_1_name'),
      ref1_relationship: gv('ref_1_relationship'),
      ref1_phone: gv('ref_1_phone'),
      ref2_name: gv('ref_2_name'),
      ref2_relationship: gv('ref_2_relationship'),
      ref2_phone: gv('ref_2_phone'),
      ref3_name: gv('ref_3_name'),
      ref3_relationship: gv('ref_3_relationship'),
      ref3_phone: gv('ref_3_phone'),

      // Military
      military_served: gb('military_service'),
      military_branch: gv('military_branch'),
      military_rank: gv('military_rank'),
      military_from: gv('military_from'),
      military_to: gv('military_to'),
      military_discharge: gv('military_discharge'),
      military_skills: gv('military_skills'),

      // Other
      has_pool_experience: gb('pool_experience'),
      experience_notes: gv('pool_experience_details'),
      convicted: gb('felony_conviction'),
      conviction_explanation: gv('felony_explanation'),
      physical_acknowledged: true,
      applicant_signature: signature,
      signature_date: new Date().toISOString().split('T')[0],
      status: 'new',
      submitted_by: 'website',
    };

    const { error } = await supabase.from('job_applications').insert(record);

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us at (812) 232-1292.', fields };
    }

    // Send notification to managers
    try {
      await supabase.from('notifications').insert({
        type: 'job_application',
        title: 'New Job Application',
        message: `${first_name} ${last_name} applied for ${position} via the website`,
        link: 'hr.html',
      });
    } catch {
      // Non-critical
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Application submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us directly.', fields };
  }
}
