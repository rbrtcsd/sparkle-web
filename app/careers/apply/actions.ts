'use server';

import { getServiceSupabase } from '@/lib/supabase';

export type ApplicationFormState = {
  success: boolean;
  error: string | null;
};

export async function submitJobApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const phone = formData.get('phone') as string;

  // Basic validation
  if (!first_name || !last_name || !phone) {
    return { success: false, error: 'First name, last name, and phone are required.' };
  }

  const position = formData.get('position') as string;
  if (!position) {
    return { success: false, error: 'Please select a position.' };
  }

  const signature = formData.get('signature') as string;
  if (!signature) {
    return { success: false, error: 'Please type your full name as your signature to submit the application.' };
  }

  const acknowledged = formData.get('physical_acknowledgment');
  if (!acknowledged) {
    return { success: false, error: 'Please acknowledge the physical requirements to continue.' };
  }

  try {
    const supabase = getServiceSupabase();

    // Parse days available checkboxes
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const days_available = daysOfWeek.filter((day) => formData.get(`day_${day}`) === 'on');

    // Parse employment history (up to 3)
    const employment_history = [];
    for (let i = 1; i <= 3; i++) {
      const employer = formData.get(`employer_${i}_name`) as string;
      if (employer) {
        employment_history.push({
          employer: employer,
          job_title: formData.get(`employer_${i}_title`) as string || '',
          address_phone: formData.get(`employer_${i}_address`) as string || '',
          supervisor: formData.get(`employer_${i}_supervisor`) as string || '',
          start_date: formData.get(`employer_${i}_start`) as string || '',
          end_date: formData.get(`employer_${i}_end`) as string || '',
          reason_for_leaving: formData.get(`employer_${i}_reason`) as string || '',
          may_contact: formData.get(`employer_${i}_contact`) === 'yes',
        });
      }
    }

    // Parse education
    const education = {
      high_school: {
        name: formData.get('hs_name') as string || '',
        city_state: formData.get('hs_city_state') as string || '',
        from: formData.get('hs_from') as string || '',
        to: formData.get('hs_to') as string || '',
        graduated: formData.get('hs_graduated') as string || '',
      },
      college: {
        name: formData.get('college_name') as string || '',
        city_state: formData.get('college_city_state') as string || '',
        from: formData.get('college_from') as string || '',
        to: formData.get('college_to') as string || '',
        major: formData.get('college_major') as string || '',
        degree: formData.get('college_degree') as string || '',
      },
      other: {
        name: formData.get('other_school_name') as string || '',
        city_state: formData.get('other_school_city_state') as string || '',
        from: formData.get('other_school_from') as string || '',
        to: formData.get('other_school_to') as string || '',
        certificate: formData.get('other_school_certificate') as string || '',
      },
    };

    // Parse references (up to 3)
    const references = [];
    for (let i = 1; i <= 3; i++) {
      const name = formData.get(`ref_${i}_name`) as string;
      if (name) {
        references.push({
          name,
          relationship: formData.get(`ref_${i}_relationship`) as string || '',
          phone: formData.get(`ref_${i}_phone`) as string || '',
        });
      }
    }

    // Parse military info
    const military_service = formData.get('military_service') === 'yes';
    const military = military_service
      ? {
          branch: formData.get('military_branch') as string || '',
          rank: formData.get('military_rank') as string || '',
          from: formData.get('military_from') as string || '',
          to: formData.get('military_to') as string || '',
          discharge_type: formData.get('military_discharge') as string || '',
          skills: formData.get('military_skills') as string || '',
        }
      : null;

    const record = {
      first_name,
      middle_name: formData.get('middle_name') as string || null,
      last_name,
      other_names: formData.get('other_names') as string || null,
      date_of_birth: formData.get('date_of_birth') as string || null,
      address: formData.get('address') as string || null,
      phone,
      email: formData.get('email') as string || null,
      position,
      employment_type: formData.get('employment_type') as string || null,
      date_available: formData.get('date_available') as string || null,
      desired_pay: formData.get('desired_pay') as string || null,
      days_available,
      heard_about_us: formData.get('heard_about_us') as string || null,
      authorized_to_work: formData.get('authorized_to_work') === 'yes',
      requires_sponsorship: formData.get('requires_sponsorship') === 'yes',
      previously_worked: formData.get('previously_worked') === 'yes',
      previously_worked_when: formData.get('previously_worked_when') as string || null,
      has_drivers_license: formData.get('has_drivers_license') === 'yes',
      license_state: formData.get('license_state') as string || null,
      license_number: formData.get('license_number') as string || null,
      license_expiration: formData.get('license_expiration') as string || null,
      moving_violations: formData.get('moving_violations') === 'yes',
      moving_violations_explain: formData.get('moving_violations_explain') as string || null,
      employment_history,
      education,
      references,
      military_service,
      military,
      pool_experience: formData.get('pool_experience') === 'yes',
      pool_experience_details: formData.get('pool_experience_details') as string || null,
      felony_conviction: formData.get('felony_conviction') === 'yes',
      felony_explanation: formData.get('felony_explanation') as string || null,
      physical_acknowledgment: true,
      signature,
      signature_date: new Date().toISOString().split('T')[0],
      status: 'new',
      source: 'website',
      submitted_by: 'online',
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('job_applications').insert(record);

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
    }

    // Send notification to managers
    try {
      await supabase.from('notifications').insert({
        type: 'job_application',
        title: 'New Job Application',
        message: `${first_name} ${last_name} applied for ${position} via the website`,
      });
    } catch {
      // Non-critical — don't fail the submission if notification fails
      console.error('Failed to create notification');
    }

    return { success: true, error: null };
  } catch (err) {
    console.error('Application submission error:', err);
    return { success: false, error: 'Something went wrong. Please try again or call us directly.' };
  }
}
