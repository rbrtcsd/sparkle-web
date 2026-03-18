'use client';

import { useActionState, useState } from 'react';
import { submitJobApplication, type ApplicationFormState } from './actions';
import Link from 'next/link';

const initialState: ApplicationFormState = { success: false, error: null };

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors';
const selectClass =
  'w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white';
const labelClass = 'block text-sm font-medium text-slate-700 mb-2';

function SectionHeader({
  number,
  title,
  isOpen,
  onToggle,
}: {
  number: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center gap-4 py-4 text-left group"
    >
      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
        {number}
      </span>
      <span className="text-lg font-bold text-slate-900 flex-1">{title}</span>
      <svg
        className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
}

export default function ApplyPage() {
  const [state, formAction, isPending] = useActionState(submitJobApplication, initialState);
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 1: true });
  const [previouslyWorked, setPreviouslyWorked] = useState(false);
  const [hasLicense, setHasLicense] = useState(false);
  const [movingViolations, setMovingViolations] = useState(false);
  const [militaryService, setMilitaryService] = useState(false);
  const [poolExperience, setPoolExperience] = useState(false);
  const [felonyConviction, setFelonyConviction] = useState(false);

  const toggleSection = (num: number) => {
    setOpenSections((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  if (state.success) {
    return (
      <>
        <section className="hero-gradient pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Application Submitted
              </h1>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Thank you for applying!</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              We&apos;ve received your application and will review it shortly. If your qualifications match our
              needs, a member of our team will reach out to schedule an interview. Thank you for your interest
              in joining Sparkle Pools!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                View Careers
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">Careers</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Job Application
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 leading-relaxed">
              Fill out the form below to apply for a position at Sparkle Pools. It should take about 10 minutes.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {state.error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
              {state.error}
            </div>
          )}

          <form action={formAction}>
            {/* ========== Section 1: Personal Information ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={1} title="Personal Information" isOpen={!!openSections[1]} onToggle={() => toggleSection(1)} />
              </div>
              {openSections[1] && (
                <div className="px-8 pb-8 space-y-5 border-t border-slate-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="first_name" className={labelClass}>
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" id="first_name" name="first_name" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="middle_name" className={labelClass}>Middle Name</label>
                      <input type="text" id="middle_name" name="middle_name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="last_name" className={labelClass}>
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" id="last_name" name="last_name" required className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="other_names" className={labelClass}>Other Names Used (formerly known as)</label>
                    <input type="text" id="other_names" name="other_names" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date_of_birth" className={labelClass}>Date of Birth</label>
                      <input type="date" id="date_of_birth" name="date_of_birth" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className={labelClass}>Full Address</label>
                    <input type="text" id="address" name="address" className={inputClass} placeholder="123 Main St, Terre Haute, IN 47804" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="(812) 555-1234" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input type="email" id="email" name="email" className={inputClass} placeholder="you@example.com" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 2: Position & Availability ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={2} title="Position & Availability" isOpen={!!openSections[2]} onToggle={() => toggleSection(2)} />
              </div>
              {openSections[2] && (
                <div className="px-8 pb-8 space-y-5 border-t border-slate-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="position" className={labelClass}>
                        Position Applied For <span className="text-red-500">*</span>
                      </label>
                      <select id="position" name="position" required className={selectClass}>
                        <option value="">-- Select --</option>
                        <option value="Pool Technician">Pool Technician</option>
                        <option value="Office Staff">Office Staff</option>
                        <option value="Retail / Store">Retail / Store</option>
                        <option value="Any Position">Any Position</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="employment_type" className={labelClass}>Employment Type</label>
                      <select id="employment_type" name="employment_type" className={selectClass}>
                        <option value="">-- Select --</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Seasonal">Seasonal</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date_available" className={labelClass}>Date Available to Start</label>
                      <input type="date" id="date_available" name="date_available" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="desired_pay" className={labelClass}>Desired Pay</label>
                      <input type="text" id="desired_pay" name="desired_pay" className={inputClass} placeholder="e.g. $15/hr, Negotiable" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Days Available</label>
                    <div className="flex flex-wrap gap-3">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <label key={day} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:border-primary/30 cursor-pointer transition-colors text-sm">
                          <input type="checkbox" name={`day_${day.toLowerCase()}`} className="rounded border-slate-300 text-primary focus:ring-primary" />
                          <span className="text-slate-700">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="heard_about_us" className={labelClass}>How did you hear about us?</label>
                    <select id="heard_about_us" name="heard_about_us" className={selectClass}>
                      <option value="">-- Select --</option>
                      <option value="Indeed">Indeed</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Walk-In">Walk-In</option>
                      <option value="Employee Referral">Employee Referral</option>
                      <option value="Sign / Storefront">Sign / Storefront</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 3: Work Authorization ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={3} title="Work Authorization" isOpen={!!openSections[3]} onToggle={() => toggleSection(3)} />
              </div>
              {openSections[3] && (
                <div className="px-8 pb-8 space-y-5 border-t border-slate-100 pt-6">
                  <div>
                    <label className={labelClass}>Are you legally authorized to work in the US?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="authorized_to_work" value="yes" className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="authorized_to_work" value="no" className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Will you require sponsorship?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="requires_sponsorship" value="yes" className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="requires_sponsorship" value="no" className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Have you previously worked for Sparkle Pools?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="previously_worked" value="yes" onChange={() => setPreviouslyWorked(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="previously_worked" value="no" onChange={() => setPreviouslyWorked(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                    {previouslyWorked && (
                      <div className="mt-3">
                        <label htmlFor="previously_worked_when" className={labelClass}>When?</label>
                        <input type="text" id="previously_worked_when" name="previously_worked_when" className={inputClass} placeholder="e.g. Summer 2023" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 4: Driver's License ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={4} title="Driver's License" isOpen={!!openSections[4]} onToggle={() => toggleSection(4)} />
              </div>
              {openSections[4] && (
                <div className="px-8 pb-8 space-y-5 border-t border-slate-100 pt-6">
                  <div>
                    <label className={labelClass}>Do you have a valid driver&apos;s license?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="has_drivers_license" value="yes" onChange={() => setHasLicense(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="has_drivers_license" value="no" onChange={() => setHasLicense(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                  </div>
                  {hasLicense && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="license_state" className={labelClass}>State</label>
                        <input type="text" id="license_state" name="license_state" maxLength={2} className={`${inputClass} uppercase`} placeholder="IN" />
                      </div>
                      <div>
                        <label htmlFor="license_number" className={labelClass}>License Number</label>
                        <input type="text" id="license_number" name="license_number" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="license_expiration" className={labelClass}>Expiration Date</label>
                        <input type="date" id="license_expiration" name="license_expiration" className={inputClass} />
                      </div>
                    </div>
                  )}
                  <div>
                    <label className={labelClass}>Any moving violations in the past 3 years?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="moving_violations" value="yes" onChange={() => setMovingViolations(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="moving_violations" value="no" onChange={() => setMovingViolations(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                    {movingViolations && (
                      <div className="mt-3">
                        <label htmlFor="moving_violations_explain" className={labelClass}>Please explain</label>
                        <textarea id="moving_violations_explain" name="moving_violations_explain" rows={2} className={`${inputClass} resize-none`} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 5: Employment History ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={5} title="Employment History" isOpen={!!openSections[5]} onToggle={() => toggleSection(5)} />
              </div>
              {openSections[5] && (
                <div className="px-8 pb-8 space-y-8 border-t border-slate-100 pt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Employer {i}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor={`employer_${i}_name`} className={labelClass}>Employer Name</label>
                          <input type="text" id={`employer_${i}_name`} name={`employer_${i}_name`} className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor={`employer_${i}_title`} className={labelClass}>Job Title</label>
                          <input type="text" id={`employer_${i}_title`} name={`employer_${i}_title`} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor={`employer_${i}_address`} className={labelClass}>Address / Phone</label>
                          <input type="text" id={`employer_${i}_address`} name={`employer_${i}_address`} className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor={`employer_${i}_supervisor`} className={labelClass}>Supervisor Name</label>
                          <input type="text" id={`employer_${i}_supervisor`} name={`employer_${i}_supervisor`} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor={`employer_${i}_start`} className={labelClass}>Start Date</label>
                          <input type="month" id={`employer_${i}_start`} name={`employer_${i}_start`} className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor={`employer_${i}_end`} className={labelClass}>End Date</label>
                          <input type="month" id={`employer_${i}_end`} name={`employer_${i}_end`} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor={`employer_${i}_reason`} className={labelClass}>Reason for Leaving</label>
                        <input type="text" id={`employer_${i}_reason`} name={`employer_${i}_reason`} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>May we contact this employer?</label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input type="radio" name={`employer_${i}_contact`} value="yes" className="text-primary focus:ring-primary" /> Yes
                          </label>
                          <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input type="radio" name={`employer_${i}_contact`} value="no" className="text-primary focus:ring-primary" /> No
                          </label>
                        </div>
                      </div>
                      {i < 3 && <hr className="border-slate-100" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ========== Section 6: Education ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={6} title="Education" isOpen={!!openSections[6]} onToggle={() => toggleSection(6)} />
              </div>
              {openSections[6] && (
                <div className="px-8 pb-8 space-y-8 border-t border-slate-100 pt-6">
                  {/* High School */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">High School</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hs_name" className={labelClass}>School Name</label>
                        <input type="text" id="hs_name" name="hs_name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="hs_city_state" className={labelClass}>City, State</label>
                        <input type="text" id="hs_city_state" name="hs_city_state" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="hs_from" className={labelClass}>From</label>
                        <input type="text" id="hs_from" name="hs_from" className={inputClass} placeholder="2018" />
                      </div>
                      <div>
                        <label htmlFor="hs_to" className={labelClass}>To</label>
                        <input type="text" id="hs_to" name="hs_to" className={inputClass} placeholder="2022" />
                      </div>
                      <div>
                        <label htmlFor="hs_graduated" className={labelClass}>Graduated?</label>
                        <select id="hs_graduated" name="hs_graduated" className={selectClass}>
                          <option value="">-- Select --</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="GED">GED</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* College */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">College</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="college_name" className={labelClass}>School Name</label>
                        <input type="text" id="college_name" name="college_name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="college_city_state" className={labelClass}>City, State</label>
                        <input type="text" id="college_city_state" name="college_city_state" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div>
                        <label htmlFor="college_from" className={labelClass}>From</label>
                        <input type="text" id="college_from" name="college_from" className={inputClass} placeholder="2022" />
                      </div>
                      <div>
                        <label htmlFor="college_to" className={labelClass}>To</label>
                        <input type="text" id="college_to" name="college_to" className={inputClass} placeholder="2026" />
                      </div>
                      <div>
                        <label htmlFor="college_major" className={labelClass}>Major</label>
                        <input type="text" id="college_major" name="college_major" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="college_degree" className={labelClass}>Degree</label>
                        <input type="text" id="college_degree" name="college_degree" className={inputClass} placeholder="e.g. B.S." />
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Other */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Other (Trade School, etc.)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="other_school_name" className={labelClass}>School Name</label>
                        <input type="text" id="other_school_name" name="other_school_name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="other_school_city_state" className={labelClass}>City, State</label>
                        <input type="text" id="other_school_city_state" name="other_school_city_state" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="other_school_from" className={labelClass}>From</label>
                        <input type="text" id="other_school_from" name="other_school_from" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="other_school_to" className={labelClass}>To</label>
                        <input type="text" id="other_school_to" name="other_school_to" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="other_school_certificate" className={labelClass}>Certificate / Degree</label>
                        <input type="text" id="other_school_certificate" name="other_school_certificate" className={inputClass} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 7: Additional Information ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={7} title="Additional Information" isOpen={!!openSections[7]} onToggle={() => toggleSection(7)} />
              </div>
              {openSections[7] && (
                <div className="px-8 pb-8 space-y-5 border-t border-slate-100 pt-6">
                  {/* Military */}
                  <div>
                    <label className={labelClass}>Have you served in the military?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="military_service" value="yes" onChange={() => setMilitaryService(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="military_service" value="no" onChange={() => setMilitaryService(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                    {militaryService && (
                      <div className="mt-4 space-y-4 pl-4 border-l-2 border-primary/20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="military_branch" className={labelClass}>Branch</label>
                            <input type="text" id="military_branch" name="military_branch" className={inputClass} />
                          </div>
                          <div>
                            <label htmlFor="military_rank" className={labelClass}>Rank at Discharge</label>
                            <input type="text" id="military_rank" name="military_rank" className={inputClass} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="military_from" className={labelClass}>From</label>
                            <input type="month" id="military_from" name="military_from" className={inputClass} />
                          </div>
                          <div>
                            <label htmlFor="military_to" className={labelClass}>To</label>
                            <input type="month" id="military_to" name="military_to" className={inputClass} />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="military_discharge" className={labelClass}>Type of Discharge</label>
                          <input type="text" id="military_discharge" name="military_discharge" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="military_skills" className={labelClass}>Skills Gained</label>
                          <textarea id="military_skills" name="military_skills" rows={2} className={`${inputClass} resize-none`} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pool Experience */}
                  <div>
                    <label className={labelClass}>Do you have pool industry experience?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="pool_experience" value="yes" onChange={() => setPoolExperience(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="pool_experience" value="no" onChange={() => setPoolExperience(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                    {poolExperience && (
                      <div className="mt-3">
                        <label htmlFor="pool_experience_details" className={labelClass}>Please describe</label>
                        <textarea id="pool_experience_details" name="pool_experience_details" rows={3} className={`${inputClass} resize-none`} />
                      </div>
                    )}
                  </div>

                  {/* Felony */}
                  <div>
                    <label className={labelClass}>Have you been convicted of a felony?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="felony_conviction" value="yes" onChange={() => setFelonyConviction(true)} className="text-primary focus:ring-primary" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="felony_conviction" value="no" onChange={() => setFelonyConviction(false)} className="text-primary focus:ring-primary" /> No
                      </label>
                    </div>
                    {felonyConviction && (
                      <div className="mt-3">
                        <label htmlFor="felony_explanation" className={labelClass}>Please explain</label>
                        <textarea id="felony_explanation" name="felony_explanation" rows={3} className={`${inputClass} resize-none`} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ========== Section 8: References ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={8} title="References" isOpen={!!openSections[8]} onToggle={() => toggleSection(8)} />
              </div>
              {openSections[8] && (
                <div className="px-8 pb-8 space-y-6 border-t border-slate-100 pt-6">
                  <p className="text-sm text-slate-500">Please provide 3 professional or personal references (not family members).</p>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Reference {i}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor={`ref_${i}_name`} className={labelClass}>Name</label>
                          <input type="text" id={`ref_${i}_name`} name={`ref_${i}_name`} className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor={`ref_${i}_relationship`} className={labelClass}>Relationship</label>
                          <input type="text" id={`ref_${i}_relationship`} name={`ref_${i}_relationship`} className={inputClass} placeholder="e.g. Former Manager" />
                        </div>
                        <div>
                          <label htmlFor={`ref_${i}_phone`} className={labelClass}>Phone</label>
                          <input type="tel" id={`ref_${i}_phone`} name={`ref_${i}_phone`} className={inputClass} />
                        </div>
                      </div>
                      {i < 3 && <hr className="border-slate-100" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ========== Section 9: Acknowledgment & Signature ========== */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-8 overflow-hidden">
              <div className="px-8">
                <SectionHeader number={9} title="Acknowledgment & Signature" isOpen={!!openSections[9]} onToggle={() => toggleSection(9)} />
              </div>
              {openSections[9] && (
                <div className="px-8 pb-8 space-y-6 border-t border-slate-100 pt-6">
                  {/* Physical requirements */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="physical_acknowledgment"
                      required
                      className="mt-1 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-slate-700 leading-relaxed">
                      I understand this position may require lifting up to 75 lbs, working outdoors in various weather
                      conditions, and performing physically demanding tasks.
                    </span>
                  </label>

                  {/* Disclaimer */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      I certify that the information provided is true and complete. I understand that false statements may
                      result in refusal to hire or termination. I authorize investigation of all statements and references.
                    </p>
                  </div>

                  {/* Signature */}
                  <div>
                    <label htmlFor="signature" className={labelClass}>
                      Type your full name as your signature <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="signature"
                      name="signature"
                      required
                      className={`${inputClass} font-serif italic text-lg`}
                      placeholder="Your Full Name"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className={labelClass}>Date</label>
                    <p className="text-sm text-slate-700">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full btn-pill btn-pill-primary text-lg shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed gap-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
