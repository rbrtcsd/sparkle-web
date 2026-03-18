'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function QuoteActions({ token }: { token: string }) {
  const [loading, setLoading] = useState(false);

  async function handleRespond(status: 'approved' | 'declined') {
    if (loading) return;

    const confirmMsg =
      status === 'approved'
        ? 'Are you sure you want to approve this quote?'
        : 'Are you sure you want to decline this quote?';

    if (!window.confirm(confirmMsg)) return;

    setLoading(true);

    const tsField = status === 'approved' ? 'approved_at' : 'declined_at';

    try {
      const { error } = await supabase
        .from('quotes')
        .update({
          status,
          [tsField]: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('share_token', token);

      if (error) throw error;

      // Reload page to show updated status
      window.location.reload();
    } catch {
      alert('Something went wrong. Please try again or contact us directly.');
      setLoading(false);
    }
  }

  return (
    <div className="px-6 py-5 border-t border-[#eef1f6] flex gap-2.5">
      <button
        onClick={() => handleRespond('approved')}
        disabled={loading}
        className="flex-1 py-3.5 rounded-[10px] bg-[#2e7d32] text-white text-[15px] font-bold cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60"
      >
        {loading ? 'Processing...' : 'Approve Quote'}
      </button>
      <button
        onClick={() => handleRespond('declined')}
        disabled={loading}
        className="flex-1 py-3.5 rounded-[10px] bg-[#ffebee] text-[#c62828] text-[15px] font-bold cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-60"
      >
        Decline
      </button>
    </div>
  );
}
